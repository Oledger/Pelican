import styled from 'styled-components'

export const PageWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`


export const HomeTopBanner = styled.div`
  height: 50vh;
  background-color: rgba(245, 161, 39, 0.15);
  width: 100vw;

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
  justify-content:space-around;
`
export const Hellocont = styled.div`
margin-top:30px;
marginleft:50px;

  flex-direction:column;
  justifycontent: space-around;

  height: 50%;

`
export const HomeTopBannerContent = styled.div`
  display: flex;
  flex-direction:column;
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
  height: 13rem;
  width: 30rem;
  cursor: pointer;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const Card2 = styled.div`
height: 13rem;
width: 15rem;
cursor: pointer;
border-radius: 1rem;

display: flex;
flex-direction: column;
padding: 1rem;
`
export const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  
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
  width:45 %;
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

export const Tbody1 = styled.tbody``

export const Tr1 = styled.tr`
  &:hover {
    background-color: orange;
  }
`

export const Table1 = styled.table`
  width: 45%;
  border-collapse: separate;
  border-spacing: 0 10px;
`

export const Thead1 = styled.thead``

export const Th1 = styled.th`
  padding: 1rem;
  color: gray;
`
export const Td1 = styled.td`
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
  width:20px;
border-radius:50%;
border:solid  2px white;

`
export const Greendot = styled.div`
  background-color: orange;
  height: 20px;
  border:solid  2px white;
  width:20px;
border-radius:50%;
`
export const Query = styled.div`
  background-color: rgba(4, 4, 4, 0.2);
  border:solid  2px rgba(62,25,25,0.6138830532212884);
  height: 20px;
  width:20px;
border-radius:70%;
`
export const Query1 = styled.div`
  background-color: rgba(4, 4, 4, 0.2);
  border:solid  2px rgba(62,25,25,0.6138830532212884);
  height: 25px;
  width:25px;
border-radius:100%;
`
export const Rect = styled.div`
width: 90em;
  display: block;
  height: 5px;
  background-color: #4b4b4d;
  margin: 60px auto 0;
  margin-top:30px;
  justifycontent: space-around;
background-color: rgba(245, 161, 39, 0.15);

`
export const Rect1 = styled.div`
width: 80em;
  display: block;
  height: 5px;
  background-color: #4b4b4d;
  margin: 60px auto 0;
  margin-top:60px;
background-color: rgba(245, 161, 39, 0.15);
`
export const Hello1 = styled.div`
  height: 30vh;
  background-color: rgba(245, 161, 39, 0.15);
  width: 95vw;
  border-radius: 4rem;
  margin-bottom: 30px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`
export const Hello2 = styled.h1`
height: 15vh;
background-color: rgba(245, 161, 39, 0.15);
width: 100vw;
font-size:20px;
// margin-bottom: 0px;

`
export const Head1 = styled.div`
  box-sizing: border-box;
`

/* Container for flexboxes */
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
     .row {
        flex-direction: column;
       }
 
  
`
export const Header = styled.div`
  height: 30vh;
  background-color: rgba(245, 161, 39, 0.15);
  width: 100vw;
  margin-bottom: 30px;
`
/* Create four equal columns */
export const Column = styled.div`
  flex: 25%;
  padding: 20px;
  display: flex;
  justify-content:space-around; 
  @media screen and (max-width: 992px){
  .column {
  flex: 50%;
  }
 
`

export const Odiv = `
  display: table;
  width: 100%;
`

export const Section = `
  background: coral;
  height: 300px;
  width: 70%;
  display: table-cell;
  @media (max-width: 600px){

      display: block;
      height: 300px;
      width: 100%;
    }
  
`

export const Aside = `
  background: red;
  height: 300px;
  width: 30%;
  display: table-cell;
  @media (max-width: 600px){
      display: block;
      height: 150px;
      width: 100%;
    
  }
`


// /* On screens that are 992px wide or less, go from four columns to two columns */
// export const @media screen and (max-width: 992px) ``
//   export const column =`
//     flex: 50%;
//   `
// `
// /* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
// @media screen and (max-width: 600px) {
//   .row {
//     flex-direction: column;
//   }
// }