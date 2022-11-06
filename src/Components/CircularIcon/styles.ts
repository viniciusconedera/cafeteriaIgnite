import styled from 'styled-components';

const COLORS = {
  yellow: 'brandYellowMedium',
  gray: 'text',
  orange: 'brandYellowDark',
  purple: 'brandPurpleDark'
} as const

interface StatusProps {
  color: keyof typeof COLORS;
}

export const IconContainer = styled.div<StatusProps>`
  background-color: ${({theme, color}) => theme[COLORS[color]]};
  padding: 8px;
  border-radius: 50%;
  margin-right: 10px;

  & > svg {
    display: flex;
    color: white;
    width: 18px;
  }
`;