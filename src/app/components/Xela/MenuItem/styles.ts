import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
      background: ${theme.colors.blue[65]};
      border-radius: 12px;
      cursor: pointer;
      span {
        color: ${theme.colors.blue[20]};
        font-weight: ${theme.font.extraBold};
      }
    }
  `}
`

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Span = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray[15]};
  `}
`

export const Box = styled.div`
  font-size: 1.4rem;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 8px 8px 8px 16px;
  text-align: center;
  transition-duration: 0.5s;
`
export const Badge = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.orange[25]};
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.gray[65]};
    font-size: 1.2rem;
    padding: 4px 8px;

    border-radius: 1rem;
    margin-right: 8px;
  `}
`
