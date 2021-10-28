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
import {
  ConnectWalletBtn,
  BannerRow1,
  HomeSecondComp,
  SecondaryHead,
  BannerHeading,
  HomeTopBannerContent,
  HomeTopBanner,
  GridOfCards,
  Card,
  CardImage,
  HomeThirdComp,
  Table,
  Thead,
  Th,
  Td,
  Tbody
} from './styled'

const PageWrapper = styled(AutoColumn)``

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
      <HomeThirdComp>
        <Table>
          <Thead>
            <tr>
              <Th>Token</Th>
              <Th>Volume(24H)</Th>
              <Th>Price</Th>
              <Th>24H</Th>
              <Th>7D</Th>
            </tr>
          </Thead>
          <Tbody>
            <tr>
              <Td>AVAX</Td>
              <Td>$151548611</Td>
              <Td>$57.16</Td>
              <Td>0.60%</Td>
              <Td>3.96%</Td>
            </tr>
          </Tbody>
        </Table>
      </HomeThirdComp>
    </PageWrapper>
  )
}

export default Home
