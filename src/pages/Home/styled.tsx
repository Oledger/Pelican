import styled from 'styled-components'

export const PageWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const ConnectWalletBtn = styled.button`
  font-size: 20px;
  width: 60%;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background-color: rgba(245, 88, 39, 0.8);
  color: white;
  cursor: pointer;
  font-weight: 400;
  margin-top: 1rem;
`
export const ConnectedWalletBtn = styled.button`
  font-size: 20px;
  width: 60%;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background-color: white;
  background-color: ${({ theme }) => theme.bg1};
  border: solid 2px rgba(245, 88, 39, 0.8);
  color: lightgray;
  color: ${({ theme }) => theme.bg5};
  cursor: crossair;
  font-weight: 400;
  margin-top: 1rem;
`

export const HomeTopBanner = styled.div`
  height: 70vh;
  background-color: rgba(240, 240, 240, 0.96);
  background: ${({ theme }) => theme.bg1};
  width: 95vw;
  border-radius: 4rem;
  margin-bottom: 30px;
`

export const HomeTopBannerContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`
export const BannerRow1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-left: 3rem;
`
export const BannerRow2 = styled.div``

export const PelicanOpenImage = styled.img`
  height: 420px;
`
export const PelicanCloseImage = styled.img`
  height: 290px;
`

export const BannerHeading = styled.h1`
  font-size: 2rem;
  margin: 5px;
  padding: 0;
`
export const HomeSecondComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-bottom: 50px;
`
export const SecondaryHead = styled.h2`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  font-weight: 500;
`
export const GridOfCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`
export const Card = styled.div`
  height: 15rem;
  width: 14rem;
  cursor: pointer;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

export const CardImage = styled.img`
  height: 70%;
  width: 75%;
`

export const HomeThirdComp = styled.div`
  display: flex;
  justify-content: center;
`

export const Table = styled.table`
  width: 90%;
  border-collapse: separate;
  border-spacing: 0 10px;
`

export const Thead = styled.thead``

export const Th = styled.th`
  padding: 1rem;
  color: gray;
`
export const Td = styled.td`
  padding: 1rem;
  font-weight: 500;
  text-align: center;
`

export const Tbody = styled.tbody``

export const Tr = styled.tr`
  &:hover {
    background-color: rgba(245, 105, 39, 0.2);
  }
`

export const TokenIcon = styled.img`
  height: 20px;
`
