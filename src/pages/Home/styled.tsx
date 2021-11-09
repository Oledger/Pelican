import styled from 'styled-components'

export const PageWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const ConnectWalletBtn = styled.button`
  font-size: 20px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.bg1};
  background-color: ${({ theme }) => theme.primary1};
  cursor: pointer;
  font-weight: 400;
  margin: 0;
  margin-top: 1rem;
  border-radius: 20px;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 14px;
`}
`
export const ConnectedWalletBtn = styled.button`
  font-size: 20px;
  margin: 0;
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
  border-radius: 20px;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 14px;
`}
`

export const HomeTopBanner = styled.div`
  background-color: rgba(240, 240, 240, 0.96);
  background: ${({ theme }) => theme.bg1};
  width: 95vw;
  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding : 1rem;
  `}

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  padding : .5rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`}
`

export const HomeTopBannerContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
`
export const BannerRow1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  align-items: flex-start;
  margin-left: 10rem;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  margin-left: 0;
`}
`
export const BannerRow2 = styled.div`
  width: 48%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  width:20%;
    `}
`

export const PelicanOpenImage = styled.img`
  height: 420px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  height: 300px;
`}

  ${({ theme }) => theme.mediaWidth.upToSmall`
  height: 200px;  
`}

${({ theme }) => theme.mediaWidth.upToExtraSmall`
height:100px;
`}

`
export const PelicanCloseImage = styled.img`
  height: 290px;
  ${({ theme }) => theme.mediaWidth.upToLarge`
  height: 240px;
`}


  ${({ theme }) => theme.mediaWidth.upToMedium`
  height: 200px;
`}

  ${({ theme }) => theme.mediaWidth.upToSmall`
  height: 150px;

`}
${({ theme }) => theme.mediaWidth.upToExtraSmall`
height:50px;
display:none;
`}
`

export const BannerHeading = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding: 0;
  margin-top: 0.5rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: 1.5rem;
  `}

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size:1rem;
`}
`
export const HomeSecondComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SecondaryHead = styled.h2`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  font-weight: 500;
`
export const GridOfCards = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
   width:100%;
`}

  ${({ theme }) => theme.mediaWidth.upToSmall`
  grid-template-columns:repeat(2,1fr);
`}

${({ theme }) => theme.mediaWidth.upToExtraSmall`
width:60%;
`}
`
export const Card = styled.div`
  cursor: pointer;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding:1rem;
`}
`

export const LinkText = styled.h3`
  color: black;
  font-weight: 500;
  margin: 0;
  font-size: 1rem;
  margin: 0;
  margin-top: 1.5rem;
`

export const CardImage = styled.img`
  height: 80%;
  width: 75%;
`

export const HomeThirdComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Table = styled.table`
  width: 90vw;
  border-collapse: separate;
  border-spacing: 0 10px;
`

export const Thead = styled.thead``

export const Th = styled.th`
  padding: 1rem;
  color: gray;
`
export const Td = styled.td`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 500;
  text-align: center;
  font-size: 1rem;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    font-size:.8rem;
`}
`

export const Tbody = styled.tbody``

export const Tr = styled.tr`
  &:hover {
    background-color: rgba(245, 105, 39, 0.2);
  }
`

export const TokenIcon = styled.img`
  height: 20px;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
height:15px;

`}
`
