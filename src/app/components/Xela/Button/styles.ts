import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrappeProps = Pick<
  ButtonProps,
  'size' | 'background' | 'outline' | 'disabled'
>

const wrapperModifiersSize = {
  large: () => css`
    padding: 16px 24px;
    font-size: 16px;
    letter-spacing: 0.03em;
  `,
  medium: () => css`
    padding: 16px;
    font-size: 14px;
    letter-spacing: 0.02em;
  `,
  small: () => css`
    padding: 8px 16px;
    font-size: 12px;
    letter-spacing: 0.04em;
  `
}

export const Wrapper = styled.button<WrappeProps>`
  ${({ theme, size, outline }) => css`
    padding: 8px;
    gap: 8px;
    border-radius: 16px;
    font-style: normal;
    font-weight: 700;
    color: ${theme.colors.gray[65]};
    background: ${theme.colors.blue[20]};
    border: 0;
    transition-duration: 0.5s;
    cursor: pointer;
    outline: none;
    &:hover {
      background: ${theme.colors.blue[40]};
    }
    &:focus {
      background: ${theme.colors.blue[25]};
      border: 4px solid ${theme.colors.blue[40]};
    }
    &:disabled {
      background: ${theme.colors.blue[50]};
    }
    ${outline
      ? css`
          background: transparent;
          color: ${theme.colors.blue[20]};
          border: 1px solid ${theme.colors.gray[60]};
          &:hover {
            background: transparent;
            border: 1px solid ${theme.colors.blue[35]};
            color: ${theme.colors.blue[35]};
          }
          &:focus {
            background: transparent;
            color: ${theme.colors.blue[20]};
            border: 2px solid ${theme.colors.blue[20]};
          }
          &:disabled {
            background: transparent;
            color: ${theme.colors.blue[50]};
            border: 2px solid ${theme.colors.gray[65]};
          }
        `
      : ''}
    ${!!size && wrapperModifiersSize[size]()}
  `}
`
