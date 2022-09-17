import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 0;
  height: 0;
`;

export const StyledToast = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
`;

export const StyledMessage = styled.div`
  margin-bottom: 8px;
`;

export const StyledButton = styled.button`
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
`;
