import styled from 'styled-components'

export const TopBanner = styled.div`
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

export const PeliconOpenImage = styled.img`
  height: 220px;
  margin-top: 8rem;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    height: 7rem;
    display: none;
  `};
`
export const PeliconCloseFlipImage = styled.img`
  height: 220px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  margin-top: 8rem;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    height: 7rem;
    display: none;
  `};
`
export const BannerTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const BannerTextHead = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  letter-spacing: 1px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: 3rem;
  `};
`
export const BannerTextTag = styled.h3`
  color: rgba(245, 161, 39, 1);
  font-size: 1.2rem;
  font-weight: 500;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: .9rem;
  `};
`

export const Span = styled.span`
  margin-left: 20px;
  margin-right: 20px;
`
export const SettingHolder = styled.div`
  display: flex;
  justify-content: flex-end;
`
