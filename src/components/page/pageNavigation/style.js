import styled from 'styled-components';
import { GlobalButton } from 'style/globalTheme';

export const Button = styled(GlobalButton)`
  font-weight: 600;
  color: ${(props) => props.theme.color.text.primary};
  cursor: pointer;
`;

export const PrevButton = styled(Button)`
  color: ${(props) =>
    props.theme.color.text[props.page === 1 ? 'secondary' : 'primary']};
  margin-right: 0.5rem;
`;

export const NextButton = styled(Button)`
  margin-left: 0.5rem;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.background.pagination};
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 3rem;
  box-shadow: ${(props) => props.theme.shadows.pagination};
`;
