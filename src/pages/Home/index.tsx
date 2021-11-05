import React, { useEffect, useState } from 'react'
import { useWalletModalToggle } from '../../state/application/hooks'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TradeIcon from '../../assets/images/trading.png'
import SwimmingPoolIcon from '../../assets/images/swimming-pool.png'
import FarmIcon from '../../assets/images/harvest.png'
import StakeIcon from '../../assets/images/stake.png'
import PeliconCoinIcon from '../../assets/images/coins.png'
import PeliconWalletIcon from '../../assets/images/wallet.png'
import VoteIconIcon from '../../assets/images/positive-vote.png'
import LendingIcon from '../../assets/images/lending.png'
import PelicanOpenLogo from '../../assets/Logo_Exports/Illustration/Pelican-Gullar-Open.png'
import PelicanCloseLogo from '../../assets/Logo_Exports/Illustration/Pelican-Gullar-Closed.png'
import {
  ConnectWalletBtn,
  BannerRow1,
  HomeSecondComp,
  SecondaryHead,
  BannerHeading,
  HomeTopBannerContent,
  HomeTopBanner,
  GridOfCards,
  PageWrapper,
  Card,
  CardImage,
  HomeThirdComp,
  Table,
  Thead,
  Th,
  Td,
  Tbody,
  BannerRow2,
  PelicanOpenImage,
  PelicanCloseImage,
  TokenIcon,
  Tr,
  ConnectedWalletBtn,
  LinkText
} from './styled'
import { useActiveWeb3React } from '../../hooks'

const Home = () => {
  const toggleWalletModal = useWalletModalToggle()
  const { account } = useActiveWeb3React()
  const [coins, setCoins] = useState<any[]>([])

  const tokenFetch = () => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d'
      )
      .then(res => {
        setCoins(res.data)
        //console.log(coins);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    tokenFetch()
  }, [coins])

  return (
    <PageWrapper>
      <HomeTopBanner>
        <HomeTopBannerContent>
          <BannerRow1>
            <BannerHeading>One-Stop</BannerHeading>
            <BannerHeading>Decentralized Trading</BannerHeading>
            <BannerHeading>On Avalanche</BannerHeading>
            {account ? (
              <ConnectedWalletBtn>Wallet Connected</ConnectedWalletBtn>
            ) : (
              <ConnectWalletBtn onClick={toggleWalletModal}>Connect Wallet</ConnectWalletBtn>
            )}
          </BannerRow1>
          <BannerRow2>
            <PelicanOpenImage src={PelicanOpenLogo} />
            <PelicanCloseImage src={PelicanCloseLogo} />
          </BannerRow2>
        </HomeTopBannerContent>
      </HomeTopBanner>
      <HomeSecondComp>
        <SecondaryHead>Explore</SecondaryHead>
        <GridOfCards>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/trade">
            <Card style={{ backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
              <CardImage src={TradeIcon} />
              <LinkText>Trade</LinkText>
            </Card>
          </Link>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/pool">
            <Card style={{ backgroundColor: 'rgba(255, 201, 164, 0.8)' }}>
              <CardImage src={SwimmingPoolIcon} />
              <LinkText>Pool</LinkText>
            </Card>
          </Link>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/png/1">
            <Card style={{ backgroundColor: 'rgba(188, 255, 166, 0.8)' }}>
              <CardImage src={FarmIcon} />
              <LinkText>Farm</LinkText>
            </Card>
          </Link>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/stake/0">
            <Card style={{ backgroundColor: 'rgba(202, 234, 255, 0.8)' }}>
              <CardImage src={StakeIcon} />
              <LinkText>Stake</LinkText>
            </Card>
          </Link>
          <Card style={{ backgroundColor: 'rgba(188, 255, 166, 0.8)' }}>
            <CardImage src={PeliconCoinIcon} />
            <LinkText>Pelican</LinkText>
          </Card>
          <Card style={{ backgroundColor: 'rgba(248, 214, 196, 0.8)' }}>
            <CardImage src={PeliconWalletIcon} />
            <LinkText>Add to Pelican Wallet</LinkText>
          </Card>
          <Card style={{ backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
            <CardImage src={VoteIconIcon} />
            <LinkText>Vote</LinkText>
          </Card>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/lending">
            <Card style={{ backgroundColor: 'rgba(248, 205, 196, 0.8)' }}>
              <CardImage src={LendingIcon} />
              <LinkText>Lend</LinkText>
            </Card>
          </Link>
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
            {coins.map(coin => {
              return (
                <Tr>
                  <Td
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                      // backgroundColor: 'red'
                    }}
                  >
                    <TokenIcon src={coin.image} /> {coin.symbol.toUpperCase()}
                  </Td>
                  <Td>${coin.total_volume.toLocaleString('en-US')}</Td>
                  <Td>${coin.current_price.toLocaleString('en-US')}</Td>
                  {Math.sign(coin.price_change_percentage_24h.toFixed(2)) < 0 ? (
                    <Td style={{ color: 'red' }}>{coin.price_change_percentage_24h.toFixed(2)}%</Td>
                  ) : Math.sign(coin.price_change_percentage_24h.toFixed(2)) === 0 ? (
                    <Td style={{ color: 'gray' }}>{coin.price_change_percentage_24h.toFixed(2)}%</Td>
                  ) : (
                    <Td style={{ color: 'green' }}>{coin.price_change_percentage_24h.toFixed(2)}%</Td>
                  )}
                  {Math.sign(coin.price_change_percentage_7d_in_currency.toFixed(2)) < 0 ? (
                    <Td style={{ color: 'red' }}>{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</Td>
                  ) : Math.sign(coin.price_change_percentage_7d_in_currency.toFixed(2)) === 0 ? (
                    <Td style={{ color: 'gray' }}>{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</Td>
                  ) : (
                    <Td style={{ color: 'green' }}>{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</Td>
                  )}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </HomeThirdComp>
    </PageWrapper>
  )
}

export default Home
