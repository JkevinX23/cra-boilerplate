import styled, { css } from 'styled-components'

export const Wrapper = styled.div``
export const Divider = styled.div`
  ${({ theme }) => css`
    border-top: 1px ${theme.colors.gray[50]} dotted;
    background-image: linear-gradient(
      to right,
      ${theme.colors.gray[50]} 10%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 10px 1px;
    background-repeat: repeat-x;
  `}
`
