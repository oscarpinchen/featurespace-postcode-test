import { getPostCodes, postcodeValidation } from "../../services/api";
import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { sanitisePostcode } from "../../helpers/sanitisePostcode";
import {
  AppConsole,
  AppContainer,
  DataContainer,
  DataTable,
  FormButton,
  FormInput,
  InputContainer,
  TableData,
  TableHeader,
} from "./styles";

function App() {
  const history = useHistory();
  const location = useLocation();
  const [postCode, setPostCode] = useState("");
  const [results, setResults] = useState([]);
  const [isInvalidPostcode, setIsInvalidPostcode] = useState(false);

  useEffect(() => {
    const postcode = location.pathname.substring(1);
    if (postcode) {
      requestPostcodeData(postcode);
    }
  }, []);

  const requestPostcodeData = async (postcode) => {
    const sanitisedPostcode = sanitisePostcode(postcode);

    // First check if the postcode is valid
    const postcodeValid = await postcodeValidation(sanitisedPostcode);

    // handle case where postcode is valid
    if (postcodeValid.result === true) {
      const postcodes = await getPostCodes(sanitisedPostcode);

      if (postcodes.status === 200) {
        const formattedPostcodes = postcodes.result.map((result) => {
          return {
            postcode: result.postcode,
            country: result.country,
            region: result.region,
          };
        });
        setResults(formattedPostcodes);

        history.push(`/${sanitisedPostcode}`);
      }
    } else {
      // handle case where postcode invalid
      setResults([]); // Hide any old results from a previously valid search
      setIsInvalidPostcode(true); // Toggle state to show user the invalid message
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    requestPostcodeData(postCode);
  };

  function handleChange(event) {
    setIsInvalidPostcode(false); // Hide invalid message if user has typed
    setPostCode(event.target.value);
  }

  return (
    <>
      <AppContainer>
        <AppConsole>
          <InputContainer>
            <FormInput
              input="text"
              onChange={handleChange}
              placeholder="Type your postcode here..."
              value={postCode}
            />
            <FormButton
              data-testid="submitButton"
              onClick={handleClick}
              type="submit"
            >
              Submit
            </FormButton>
          </InputContainer>
          {isInvalidPostcode && <div>The postcode you entered is invalid</div>}
          <Switch>
            <Route path="/:postcode">
              <DataContainer>
                {results && results.length > 0 && (
                  <DataTable>
                    <thead>
                      <tr>
                        <TableHeader>Postcode</TableHeader>
                        <TableHeader>Country</TableHeader>
                        <TableHeader>Region</TableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, i) => (
                        <tr key={i}>
                          <TableData>{result.postcode}</TableData>
                          <TableData>{result.country}</TableData>
                          <TableData>{result.region}</TableData>
                        </tr>
                      ))}
                    </tbody>
                  </DataTable>
                )}
              </DataContainer>
            </Route>
          </Switch>
        </AppConsole>
      </AppContainer>
    </>
  );
}

export default App;
