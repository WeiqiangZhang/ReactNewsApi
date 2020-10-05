import styled, { keyframes } from 'styled-components';
import { GlobalFont } from 'style/globalTheme';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 2s linear infinite;
  background-color: ${(props) => props.theme.color.text.primary};
  width: 24px;
  height: 24px;
`;

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const NewsWrapper = styled(Wrapper)`
  flex-direction: column;
`;

export const OrdinalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 2.5rem 2rem;
`;

export const OrdinalTextWrapper = styled.div`
  width: ${(props) => `${props.digits}rem`};
  margin-right: 1.5rem;
  display: flex;
  justify-content: flex-end;
`;

export const OrdinalText = styled(GlobalFont)`
  font-size: ${(props) => props.theme.typography.ordinal.fontSize};
`;

export const OrdinalRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrdinalLink = styled(GlobalFont)`
  font-weight: 600;
  margin-bottom: 0.75rem;
  cursor: ${(props) => (props.isLink ? 'pointer' : 'auto')};
`;

export const OrdinalInfo = styled(GlobalFont)`
  font-size: ${(props) => props.theme.typography.info.fontSize};
`;
