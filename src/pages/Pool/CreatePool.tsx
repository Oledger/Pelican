import React from 'react'
import PelicanOpenLogo from '../../assets/Logo_Exports/Illustration/Pelican-Gullar-Open.png'
import PelicanCloseLogo from '../../assets/Logo_Exports/Illustration/Pelican-Gullar-Closed.png'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import PoolIcon from '../../assets/images/swimming-pool.png'
import {
  TopBanner,
  PeliconOpenImage,
  BannerTextHolder,
  BannerTextHead,
  BannerTextTag,
  Span,
  PeliconCloseFlipImage
} from '../Swap/styled'
import {
  BackArrowHolder,
  CreatePoolCardBg,
  CreatePoolHead,
  CreatePoolHeadBg,
  CreatePoolHeaderLeft,
  CreatePoolTextContainer,
  MainHeadinBox,
  ParaInBox,
  PoolExtendedIcon,
  PoolIconSmall,
  PoolTextIconContainer,
  SubHeadinBox
} from './styleds'

const CreatePool = () => {
  return (
    <>
      <TopBanner>
        <PeliconOpenImage src={PelicanOpenLogo} />
        <BannerTextHolder>
          <BannerTextHead>Manage Pool</BannerTextHead>
          <BannerTextTag>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
              Home
            </Link>
            <Span> {'>'} </Span>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/pool">
              Pool
            </Link>
            <Span> {'>'} </Span>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/pool/create">
              Manage Pool
            </Link>
          </BannerTextTag>
        </BannerTextHolder>
        <PeliconCloseFlipImage src={PelicanCloseLogo} />
      </TopBanner>
      <CreatePoolHeadBg>
        <CreatePoolHeaderLeft>
          <Link to="/pool" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <BackArrowHolder>
              <IoIosArrowBack />
            </BackArrowHolder>
          </Link>
          <CreatePoolHead>Manage Pool</CreatePoolHead>
        </CreatePoolHeaderLeft>
        <PoolExtendedIcon src={PoolIcon}></PoolExtendedIcon>
      </CreatePoolHeadBg>
      <PoolTextIconContainer>
        <CreatePoolTextContainer>
          <MainHeadinBox>Create a Pool</MainHeadinBox>
          <SubHeadinBox>You are the first Liquidity Provider.</SubHeadinBox>
          <div>
            <ParaInBox>The ratio of tokens you add will set the price of this pool.</ParaInBox>
            <ParaInBox>Once you are happy with the rate click supply to review</ParaInBox>
          </div>
          <PoolIconSmall src={PoolIcon}></PoolIconSmall>
        </CreatePoolTextContainer>
        <CreatePoolCardBg></CreatePoolCardBg>
      </PoolTextIconContainer>
    </>
  )
}

export default CreatePool
