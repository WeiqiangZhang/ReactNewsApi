import styled from 'styled-components';

export const GlobalFont = styled.span`
  font-family: ${(props) => props.theme.typography.defaults.fontFamily};
  font-size: ${(props) => props.theme.typography.defaults.fontSize};
  color: ${(props) => props.theme.typography.defaults.color};
`;

export const GlobalButton = styled.button`
  font-family: ${(props) => props.theme.typography.defaults.fontFamily};
  font-size: ${(props) => props.theme.typography.defaults.fontSize};
  color: ${(props) => props.theme.typography.defaults.color};
  border: none;
  background-color: white;
`;
