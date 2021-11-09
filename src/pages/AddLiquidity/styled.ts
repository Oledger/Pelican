import styled from 'styled-components'

export const AppHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  width:95%;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
flex-direction:column;
  `};
`

export const CPoolTopBanner = styled.div`
  background-color: rgba(240, 240, 240, 0.96);
  height: 250px;
  width: 90%;
  background: ${({ theme }) => theme.bg1};
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`

export const CPoolPeliconOpenImage = styled.img`
  height: 220px;
  margin-top: 8rem;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    height: 7rem;
    display: none;
  `};
`

export const CPoolPeliconCloseFlipImage = styled.img`
  height: 220px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  margin-top: 8rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
 display:none;
  `};
`

export const CPoolBannerTextHead = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  letter-spacing: 1px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: 2rem;
  `};
`
export const CPoolBannerTextTag = styled.h3`
<<<<<<< HEAD
  color: ${({ theme }) => theme.primary1};
=======
  color: rgba(245, 161, 39, 1);
>>>>>>> 416120129ba9324d7f2c26dc1e46f2349e284932
  font-size: 1.2rem;
  font-weight: 500;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: 1rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: .8rem;
  `};
`

export const CPoolSpan = styled.span`
  margin-left: 20px;
  margin-right: 20px;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      margin-left: 10px;
      margin-right: 10px
  `};
`

export const CPoolBannerTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const CreateCard = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg1};
  border-radius: 2rem;
  padding: 1rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  width:90%;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  width:100vw;
  `};
`
export const CreatePoolHeadBg = styled.div`
  background-color: rgba(245, 161, 39, 0.15);
  width: 90%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const PoolIconSmall = styled.img`
  height: 40%;
  width: 30%;
  margin-top: 1rem;
`
export const CreatePoolTextContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(245, 161, 39, 0.3);
  border-radius: 2rem;
  padding: 1.5rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  width:100%;
  margin-bottom:2rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  width:100vw;  
  `};
`
export const CreatePoolHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`

export const BackArrowHolder = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`

export const CreatePoolHead = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 500;
  letter-spacing: 1px;
  margin-left: 2rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: 1.5rem;
  margin-left:1rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: 1rem;
  margin-left:.5rem;
  `};
`
export const PoolExtendedIcon = styled.img`
  position: absolute;
  height: 13vh;
  right: 7%;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  height:7.5vh;
  `};
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
