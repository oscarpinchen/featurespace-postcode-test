export const getPostCodes = async (postCode) => {
  try {
    const response = await fetch(
      "http://api.postcodes.io/postcodes/" + postCode + "/nearest"
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const postcodeValidation = async (postCode) => {
  try {
    const response = await fetch(
      "http://api.postcodes.io/postcodes/" + postCode + "/validate"
    );
    if (response.ok) {
      const validationData = await response.json();
      return validationData;
    }
  } catch (error) {
    console.log(error);
  }
};
