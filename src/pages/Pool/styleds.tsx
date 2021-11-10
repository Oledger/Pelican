import { Text } from 'rebass'
import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  position: relative;
`

export const ClickableText = styled(Text)`
  :hover {
    cursor: pointer;
  }
  color: ${({ theme }) => theme.primary1};
`
export const MaxButton = styled.button<{ width: string }>`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primary5};
  border: 1px solid ${({ theme }) => theme.primary5};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 500;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({ theme }) => theme.primary6};
  :hover {
    border: 1px solid ${({ theme }) => theme.primary6};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary6};
    outline: none;
  }
`

export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`
export const PoolTextIconContainer = styled.div`
  width: 100%;
  border-radius: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column-reverse;
    
  `};
`
export const PoolTextContainer = styled.div`
  height: 90%;
  width: 45%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`
export const PoolLargeIconContainer = styled.div`
  height: 90%;
  background-color: white;
  width: 45%;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  background-color: rgba(245, 161, 39, 0.15);

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`
export const LargeIcon = styled.img`
  height: 100%;
  width: 70%;
`

export const ZapRowTransparent = styled.div`
  background-color: rgba(245, 161, 39, 0.15);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3%;
  margin: 0;
  margin-top: 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    align-items: center;
  `};
`
export const ZapTextTag = styled.h3`
  font-weight: 500;
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: 1rem;
  `};
`

export const ZapRowTransparentRow1 = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-content: center;
  align-items: center;
  `};
`
export const ButtonInZap = styled.button`
  background-color: ${({ theme }) => theme.primary1};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
`
export const MigrateButton = styled.button`
  background-color: ${({ theme }) => theme.primary1};
  border: none;
  width: 20%;
  letter-spacing: 1px;
  color: white;
  padding: 2%;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
`

export const ZapGrayButton = styled.button`
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 10px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.primary1};
  ${({ theme }) => theme.mediaWidth.upToSmall`
  margin: 0;
  `};
`
