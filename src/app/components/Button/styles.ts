import styled, { css, DefaultTheme } from 'styled-components'
import theme from 'styles/theme'

import { ButtonProps } from '.'
import { BackgroundOptionEnum } from './enum'

type WrappeProps = Pick<
  ButtonProps,
  | 'size'
  | 'background'
  | 'radius'
  | 'fullWidth'
  | 'backgroundOption'
  | 'fontStyle'
>
const wrapperModifiersBackground = {
  blue: (theme: DefaultTheme, backgroundOption: BackgroundOptionEnum) => css`
    background: ${theme.colors.blue[backgroundOption]};
    color: ${theme.colors.gray[65]};
  `,
  gray: (theme: DefaultTheme, backgroundOption: BackgroundOptionEnum) => css`
    background: ${theme.colors.gray[backgroundOption]};
    color: ${theme.colors.gray[65]};
  `,
  green: (theme: DefaultTheme, backgroundOption: BackgroundOptionEnum) => css`
    background: ${theme.colors.green[backgroundOption]};
    color: ${theme.colors.gray[65]};
  `,
  orange: (theme: DefaultTheme, backgroundOption: BackgroundOptionEnum) => css`
    background: ${theme.colors.orange[backgroundOption]};
    color: ${theme.colors.gray[65]};
  `,
  pink: (theme: DefaultTheme, backgroundOption: BackgroundOptionEnum) => css`
    background: ${theme.colors.pink[backgroundOption]};
    color: ${theme.colors.gray[65]};
  `,
  purple: (theme: DefaultTheme, backgroundOption: BackgroundOptionEnum) => css`
    background: ${theme.colors.purple[backgroundOption]};
    color: ${theme.colors.gray[65]};
  `,
  red: (theme: DefaultTheme, backgroundOption: BackgroundOptionEnum) => css`
    background: ${theme.colors.red[backgroundOption]};
    color: ${theme.colors.gray[65]};
  `,
  yellow: (theme: DefaultTheme, backgroundOption: BackgroundOptionEnum) => css`
    background: ${theme.colors.yellow[backgroundOption]};
    color: ${theme.colors.gray[65]};
  `
}

const wrapperModifiersFullWidth = {
  fullWidth: () =>
    css`
      width: 100%;
    `
}

const wrapperDisabled = {
  disabled: () =>
    css`
      background: #ccc;
      &:hover {
        background: #aaa;
      }
    `
}

const wrapperModifiersFontStyle = {
  normal: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.normal};
  `,
  semibold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.semibold};
  `,
  bold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
  `,
  extraBold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.extraBold};
  `
}

const wrapperModifiersRadius = {
  radius100: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius100};
  `,
  radius200: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius200};
  `,
  radius300: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius300};
  `
}

const wrapperModifiersSize = {
  xxsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.buttonPadding.xxsmall};
  `,
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.buttonPadding.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.buttonPadding.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.buttonPadding.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.buttonPadding.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.buttonPadding.xlarge};
  `
}

export const Wrapper = styled.button<WrappeProps>`
  ${({
    theme,
    size,
    background,
    radius,
    fullWidth,
    disabled,
    backgroundOption,
    fontStyle
  }) => css`
    color: ${theme.colors.gray[65]};
    border: 0;
    transition-duration: 0.5s;
    cursor: pointer;
    outline: none;

    ${!!fontStyle && wrapperModifiersFontStyle[fontStyle](theme)}
    ${!!size && wrapperModifiersSize[size](theme)}
    ${!!background &&
    !!backgroundOption &&
    wrapperModifiersBackground[background](theme, backgroundOption)}
    ${!!radius && wrapperModifiersRadius[radius](theme)}
    ${!!fullWidth && wrapperModifiersFullWidth.fullWidth()}
    ${!!disabled && wrapperDisabled.disabled()}
  `}
`
