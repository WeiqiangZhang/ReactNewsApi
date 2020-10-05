import styled from 'styled-components';
import { GlobalFont } from 'style/globalTheme';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const Text = styled(GlobalFont)`
  color: ${(props) => props.theme.typography.header.color};
`;

export const HeaderLeft = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 0.8125rem;
`;

export const CustomLogo = styled(Logo)`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.background.header};
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;
