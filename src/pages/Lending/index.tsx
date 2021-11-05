import React, { useEffect, useState } from 'react'
import axios from 'axios'
import lendlog from '../../assets/images/lending.png'
import arrow from '../../assets/images/arrow-right-white.png'
import avax from '../../assets/images/avalanche_token_round.png'
import lendlog1 from '../../assets/Logo_Exports/Emblem/Emblem-Filled.png'
import {
  BannerRow1,
  SecondaryHead,
  HomeTopBannerContent,
  HomeTopBanner,
  GridOfCards,
  PageWrapper,
  Card,
  HomeThirdComp,
  Table,
  Thead,
  Th,
  Td,
  Tbody,
  TokenIcon,
  Tr,
  Bluedot,
  Query,
  Greendot,
  Hello,
  Rect,
  Hellocont,
  Rect1,
  Hello1,
  Hello2,
  Card1,
  Card2,
  Card3
} from './styled'

const Lending = () => {
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
    <>
      <PageWrapper>
        <HomeTopBanner>
          <HomeTopBannerContent>
            <BannerRow1>
              <GridOfCards>
                <Card style={{ backgroundColor: 'rgba(255, 201, 164, 0.8)' }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ width: '10%', float: 'left' }}>
                      {' '}
                      <Greendot />
                    </div>
                    <div style={{}}>Supply Balance</div>
                  </div>
                  <h1>$0</h1>
                </Card>
                <Card style={{ backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ width: '25%', float: 'left' }}>Net APY</div>
                    <div style={{ width: '10%', marginRight: '170px', float: 'right' }}>
                      {' '}
                      <Query>.?</Query>
                    </div>
                  </div>
                  <h1>0%</h1>
                </Card>
                <Card style={{ backgroundColor: 'rgba(188, 255, 166, 0.8)' }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ width: '40%', float: 'left' }}>Rewards APR</div>
                    <div style={{ width: '10%', marginRight: '140px', float: 'right' }}>
                      {' '}
                      <Query>.?</Query>
                    </div>
                  </div>
                  <h1>0%</h1>
                </Card>
                <Card style={{ backgroundColor: 'rgba(202, 234, 255, 0.8)' }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ width: '10%', float: 'left' }}>
                      {' '}
                      <Bluedot></Bluedot>
                    </div>
                    <div style={{}}>Borrow Balance</div>
                  </div>
                  <h1>$0</h1>
                </Card>
              </GridOfCards>
            </BannerRow1>
            <Hello>
              {' '}
              <Hellocont style={{ marginLeft: '50px' }}>
                {' '}
                <Rect></Rect>
              </Hellocont>
              <div style={{ width: '100%', marginBottom: '15px' }}>
                <div style={{ width: '10%', marginRight: '1030px', float: 'right' }}>
                  {' '}
                  <Query>.?</Query>
                </div>
                <div style={{ width: '150px', float: 'left', marginLeft: '50px' }}>Borrow Limit 0%</div>
                <Rect1></Rect1>
              </div>
            </Hello>
          </HomeTopBannerContent>
        </HomeTopBanner>

        <Hello1>
          <div style={{ width: '100%' }}>
            <div style={{ width: '50%', float: 'left' }}>
              <Card2>
                <div style={{ width: '100%' }}>
                  <div style={{ width: '25%', float: 'left' }}>
                    {' '}
                    <img src={lendlog} alt="" style={{}} width="120px" />{' '}
                  </div>
                  <div style={{}}>
                    <Hello2>Manage My Portfolio</Hello2>
                  </div>
                </div>
              </Card2>
            </div>
            <div>
              <GridOfCards>
                <Card1 style={{ backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ width: '35%', float: 'left' }}>
                      {' '}
                      <img src={lendlog1} alt="" style={{}} width="110px" />{' '}
                    </div>
                    <div style={{}}>
                      <h2>Pelican Awards</h2>
                    </div>
                    <h1>0</h1>
                  </div>
                </Card1>
                <Card1 style={{ backgroundColor: 'rgba(255, 201, 164, 0.8)' }}>
                  <div style={{ width: '100%' }}>
                    <div style={{ width: '35%', float: 'left' }}>
                      {' '}
                      <img src={avax} style={{}} alt="" width="110px" />{' '}
                    </div>
                    <div style={{}}>
                      <h2>AWAX Rewards</h2>
                    </div>
                    <h1>0</h1>
                  </div>
                </Card1>

                <Card3 style={{ marginTop: '50px' }}>
                  <img src={arrow} alt="" style={{ marginTop: '10px', marginLeft: '10px' }} width="50px" />
                </Card3>
              </GridOfCards>
            </div>
          </div>
        </Hello1>

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
                    <Td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
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
    </>
  )
}

export default Lending
