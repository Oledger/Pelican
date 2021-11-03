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
  height: 60%;
  width: 100%;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  gap: 5%;
  align-items: center;
`
export const PoolTextContainer = styled.div`
  height: 90%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
export const PoolLargeIconContainer = styled.div`
  height: 90%;
  background-color: white;
  width: 40%;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  background-color: rgba(245, 161, 39, 0.15);
`
export const LargeIcon = styled.img`
  height: 100%;
  width: 70%;
`

export const ZapRowTransparent = styled.div`
  height: 7rem;
  background-color: rgba(245, 161, 39, 0.15);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: flex-start;
  padding-left: 2%;
  margin: 0;
`
export const ZapTextTag = styled.h3`
  font-weight: 500;
  margin: 0;
  padding: 0;
`

export const ZapRowTransparentRow1 = styled.div`
  display: flex;
  gap: 10px;
`
export const ButtonInZap = styled.button`
  background-color: ${({ theme }) => theme.primary1};
  color: white;
  border: none;
  padding: 8% 16%;
  border-radius: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
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
  font-weight: 500;
  padding: 8% 16%;
  border: 1px solid ${({ theme }) => theme.primary1};
  margin-left: 10px;
`
export const CreatePoolHeadBg = styled.div`
  height: 10vh;
  background-color: rgba(245, 161, 39, 0.15);
  width: 90vw;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const MainHeadinBox = styled.h1`
  font-weight: 700;
  letter-spacing: 1px;
`

export const SubHeadinBox = styled.h3`
  margin: 0;
  margin-bottom: 0.6rem;
  padding: 0;
  font-weight: 550;
`
export const ParaInBox = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 400;
`

export const CreatePoolHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const BackArrowHolder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-size: 2rem;
`

export const CreatePoolHead = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  letter-spacing: 1px;
`
export const PoolExtendedIcon = styled.img`
  height: 13vh;
  margin-right: 2rem;
`

export const CreatePoolTextContainer = styled.div`
  height: 90%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: rgba(245, 161, 39, 0.3);
  border-radius: 2rem;
  padding: 1% 4% 1% 2%;
`
export const CreatePoolCardBg = styled.div`
  height: 90%;
  width: 40%;
  background-color: red;
`
export const PoolIconSmall = styled.img`
  height: 20vh;
  width: 10vw;
  margin-bottom: 1rem;
`
