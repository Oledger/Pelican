import styled from 'styled-components'

export const PageWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const HomeTopBanner = styled.div`
  height: 50vh;
  background-color: rgba(245, 161, 39, 0.15);
  width: 95vw;
  border-radius: 4rem;
  margin-bottom: 30px;
`
export const Hello = styled.div`
  height: 15vh;
  background-color: rgba(245, 161, 39, 0.15);
  width: 75vw;
  border-radius: 4rem;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const Hellocont = styled.div`
  margin-top: 50px;

  flex-direction: column;
  justify-content: space-around;

  height: 50%;
`
export const HomeTopBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`
export const BannerRow1 = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 50vh;
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
  gap: 28px;
`
export const Card = styled.div`
  height: 10rem;
  width: 20rem;
  cursor: pointer;
  border-radius: 1rem;
  border: solid 4px white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
export const Card1 = styled.div`
  height: 10rem;
  width: 23rem;
  cursor: pointer;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const Card2 = styled.div`
  height: 10rem;
  width: 40rem;
  cursor: pointer;
  border-radius: 1rem;
  marginleft: 100px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const Card3 = styled.div`
  height: 5rem;
  width: 4rem;
  cursor: pointer;
  border-radius: 1rem;
  marginleft: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
`
export const CardImage = styled.img`
  height: 10%;
  width: 15%;
  justify-content: left;
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
  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
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
export const Bluedot = styled.div`
  background-color: rgba(0, 0, 255, 0.2);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: solid 2px white;
`
export const Greendot = styled.div`
  background-color: orange;
  height: 20px;
  border: solid 2px white;
  width: 20px;
  border-radius: 50%;
`
export const Query = styled.div`
  background-color: rgba(4, 4, 4, 0.2);
  border: solid 2px rgba(62, 25, 25, 0.6138830532212884);
  height: 20px;
  width: 20px;
  border-radius: 70%;
`
export const Rect = styled.div`
  height: 8px;
  width: 1300px;
  background-color: rgba(255, 159, 7, 0.53);
  background-color: rgba(245, 161, 39, 0.15);
`
export const Rect1 = styled.div`
  height: 8px;
  width: 1050px;
  margin-left: 300px;
  background-color: rgba(255, 159, 7, 0.53);
  background-color: rgba(245, 161, 39, 0.15);
`
export const Hello1 = styled.div`
  height: 30vh;
  background-color: rgba(245, 161, 39, 0.15);
  width: 95vw;
  border-radius: 4rem;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const Hello2 = styled.h1`
  font-size: 40px;
`
export const Arrow = styled.div``
