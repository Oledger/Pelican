import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { useWalletModalToggle } from '../../state/application/hooks'
import TradeIcon from '../../assets/images/trading.png'
import SwimmingPoolIcon from '../../assets/images/swimming-pool.png'
import FarmIcon from '../../assets/images/harvest.png'
import StakeIcon from '../../assets/images/stake.png'
import PeliconCoinIcon from '../../assets/images/coins.png'
import PeliconWalletIcon from '../../assets/images/wallet.png'
import VoteIconIcon from '../../assets/images/positive-vote.png'
import LendingIcon from '../../assets/images/lending.png'

const PageWrapper = styled(AutoColumn)``

const ConnectWalletBtn = styled.button`
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

const HomeTopBanner = styled.div`
  height: 60vh;
  background-color: rgba(240, 240, 240, 0.96);
  width: 95vw;
  border-radius: 4rem;
`
const HomeTopBannerContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`

const BannerRow1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-left: 3rem;
`

const BannerHeading = styled.h1`
  font-size: 2rem;
  margin: 5px;
  padding: 0;
`

const HomeSecondComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: red;
`

const SecondaryHead = styled.h2`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  font-weight: 500;
`
const GridOfCards = styled.div`
  display: grid;
  width: 60%;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`
const Card = styled.div`
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

const CardImage = styled.img`
  height: 70%;
  width: 75%;
`

const Home = () => {
  const toggleWalletModal = useWalletModalToggle()
  return (
    <PageWrapper gap="lg">
      <HomeTopBanner>
        <HomeTopBannerContent>
          <BannerRow1>
            <BannerHeading>One-Stop</BannerHeading>
            <BannerHeading>Decentralized Trading</BannerHeading>
            <BannerHeading>On Avakanche</BannerHeading>
            <ConnectWalletBtn onClick={toggleWalletModal}>Connect Wallet</ConnectWalletBtn>
          </BannerRow1>
        </HomeTopBannerContent>
      </HomeTopBanner>
      <HomeSecondComp>
        <SecondaryHead>Explore</SecondaryHead>
        <GridOfCards>
          <Card style={{ backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
            <CardImage src={TradeIcon} />
          </Card>
          <Card style={{ backgroundColor: 'rgba(255, 201, 164, 0.8)' }}>
            <CardImage src={SwimmingPoolIcon} />
          </Card>
          <Card style={{ backgroundColor: 'rgba(188, 255, 166, 0.8)' }}>
            <CardImage src={FarmIcon} />
          </Card>
          <Card style={{ backgroundColor: 'rgba(202, 234, 255, 0.8)' }}>
            <CardImage src={StakeIcon} />
          </Card>
          <Card style={{ backgroundColor: 'rgba(188, 255, 166, 0.8)' }}>
            <CardImage src={PeliconCoinIcon} />
          </Card>
          <Card style={{ backgroundColor: 'rgba(248, 214, 196, 0.8)' }}>
            <CardImage src={PeliconWalletIcon} />
          </Card>
          <Card style={{ backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
            <CardImage src={VoteIconIcon} />
          </Card>
          <Card style={{ backgroundColor: 'rgba(248, 205, 196, 0.8)' }}>
            <CardImage src={LendingIcon} />
          </Card>
        </GridOfCards>
      </HomeSecondComp>
      <SecondaryHead>Top Gainers</SecondaryHead>
    </PageWrapper>
  )
}

export default Home
