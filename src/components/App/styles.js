import styled from "styled-components";

export const AppConsole = styled.div`
  background: #f4f4f4;
  border-radius: 15px;
  box-shadow: 0 2px 15px #c9c9c9;
  margin: 35px auto 0;
  width: 400px;
`;

export const AppContainer = styled.div`
  text-align: center;
`;

export const DataContainer = styled.div`
  padding: 0 36px;
  text-align: center;
`;

export const DataTable = styled.table`
  display: inline-block;
  padding: 10px 0 20px;
`;

export const FormButton = styled.button`
  background: #b4bebf;
  :hover {
    background: #8f999c;
  }
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  :focus {
    outline: none;
  }
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 10px;
`;

export const FormInput = styled.input`
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
  margin: 30px 0;
  padding: 10px;
`;

export const InputContainer = styled.form`
  background: #e8eded;
  border-radius: 10px;
  box-shadow: 0 2px 15px #c9c9c9;
  margin: 35px 0;
  padding: 0 35px;
`;

export const TableData = styled.td`
  padding: 10px 20px;
`;

export const TableHeader = styled.th`
  font-weight: 600;
`;
