import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #fff;
    width: 32rem;
    height: 85rem;
    padding: 32px 24px 24px 24px;
    gap: 24px;
    border-radius: 24px;
  `}
`
export const Logo = styled.img`
  width: 100px;
  height: 16px;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`
export const Divider = styled.div`
  margin-top: 14px;
  margin-bottom: 14px;
`
export const Search = styled.div`
  display: flex;
  input {
    margin-bottom: 5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 240px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #e8e8ea;
    border-radius: 18px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    padding-left: 3.5rem;
  }
`

export const SearchIcon = styled.div`
  position: relative;
  left: 30px;
  margin-top: 15px;
`
export const Footer = styled.div`
  display: flex;
  position: relative;
  margin-top: 14rem;
  justify-content: space-around;
`
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 18px;
  padding: 5px;
  background-color: #c0a8ed;
`
export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
`
export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.gray[3]};
    font-weight: ${theme.font.bold};
  `}
`
export const Email = styled.span`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.gray[35]};
    font-weight: ${theme.font.semibold};
  `}
`

export const Icon = styled.div`
  margin: 1rem;
`
