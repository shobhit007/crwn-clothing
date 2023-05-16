import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

import { BaseButton } from "../button/button.styles";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const Spinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
export const PaymentButton = styled(BaseButton)`
  margin-left: auto;
  margin-top: 30px;
  align-items: center;
`;
