import styled from '@emotion/styled';

export const StyledForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;
export const StyledInputForm = styled.input`
margin: 20px;
margin-right: 0;
  padding: 20px 10px;
  background-color: #2ee59d30;
  width: 200px;
  border: 1px solid #00000050;
  border-radius: 20px;
  max-height: 25px;
`;
export const StyledButtonForm = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 60px;
  line-height: 45px;
  border-radius: 45px;
  margin: 20px 20px;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
