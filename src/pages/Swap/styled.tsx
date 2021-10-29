import styled from 'styled-components'

export const SwapTopBanner = styled.div`
  background-color: rgba(240, 240, 240, 0.96);
  height: 250px;
  width: 90%;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`

export const PeliconOpenImage = styled.img`
  height: 220px;
`
export const PeliconCloseFlipImage = styled.img`
  height: 220px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`
export const SwapBannerTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const SwapBannerTextHead = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  letter-spacing: 1px;
`
export const SwapBannerTextTag = styled.h4``
