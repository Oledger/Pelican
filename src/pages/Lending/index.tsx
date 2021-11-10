import React, { useEffect, useState } from 'react'
import axios from 'axios'
import lendlog from '../../assets/images/lending.png'

import avax from '../../assets/images/avalanche_token_round.png'
import lendlog1 from '../../assets/Logo_Exports/Emblem/Emblem-Filled.png'

import {
  // BannerRow1,
  SecondaryHead,
  // HomeTopBannerContent,
  // HomeTopBanner,
  // GridOfCards,
  // PageWrapper,
  // Card,
  HomeThirdComp,
  Table,
  Thead,
  Th,
  Td,
  Tbody,
  TokenIcon,
  Tr,
  Header,
  Row,
  Column,
  Greendot,
  Query,
  // Hellocont,
  // Hello,
  // Rect,
  // Rect1,
  Card1,
  Hello2,
  Card,
  Rect,
  Rect1,
  Card2,
  Query1,
  Bluedot
  // Odiv,
  // Section,
  // Aside,
  // Bluedot,
  // Query,
  // Greendot,
  // Hello,
  // Rect,
  // Hellocont,
  // Rect1,
  // Hello1,
  // Hello2,
  // Card1,
  // Card2,
  // Card3
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
      <Header>
        <Row>
          <Column>
            <Card style={{ backgroundColor: 'rgba(255, 201, 164, 0.8)' }}>
              <Row>
                <Column>
                  <Greendot />
                </Column>

                <Column>SupplyBalance</Column>
              </Row>
              <Row>
                <Column>
                  <h1>$0</h1>
                </Column>
              </Row>
            </Card>
          </Column>
          <Column>
            <Card style={{ backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
              <Row>
                <Column>Netiyviyhiy Api</Column>

                <Column>
                  <Query>.?</Query>
                </Column>
              </Row>
              <Row>
                <Column>
                  <h1>$0</h1>
                </Column>
              </Row>
            </Card>
          </Column>
          <Column>
            <Card style={{ backgroundColor: 'rgba(188, 255, 166, 0.8)' }}>
              <Row>
                <Column>Rewards APR</Column>

                <Column>
                  <Query>.?</Query>
                </Column>
              </Row>
              <Row>
                <Column>
                  <h1>$0</h1>
                </Column>
              </Row>
            </Card>
          </Column>
          <Column>
            <Card style={{ backgroundColor: 'rgba(255, 201, 164, 0.8)' }}>
              <Row>
                <Column>
                  <Bluedot />
                </Column>

                <Column>BorrowBalance</Column>
              </Row>
              <Row>
                <Column>
                  <h1>$0</h1>
                </Column>
              </Row>
            </Card>
          </Column>
        </Row>
      </Header>
      <Hello2>
        <Row>
          <Rect></Rect>
        </Row>
        <Row>
          <Column>
            Borrow Limit<Query1>.?</Query1>
            <Rect1> </Rect1>
          </Column>
        </Row>
      </Hello2>

      <Header>
        <Row>
          <Column>
            <Card2>
              <Row>
                <Column>
                  <img src={lendlog} alt="" width="120px" />
                </Column>
              </Row>
            </Card2>

            <h1>Manage My Portfolio</h1>
          </Column>

          <Column>
            <Card1 style={{ backgroundColor: 'rgba(188, 255, 166, 0.8)' }}>
              <Row>
                <Column>
                  <img alt="" src={lendlog1} width="50%" />
                </Column>

                <Column>
                  <h2> Pelican Rewards</h2>
                </Column>
              </Row>
            </Card1>
          </Column>
          <Column>
            <Card1 style={{ backgroundColor: 'rgba(255, 201, 164, 0.8)' }}>
              <Row>
                <Column>
                  <img alt="" src={avax} width="50%" />
                </Column>

                <Column>
                  <h2> Avax Rewards</h2>
                </Column>
              </Row>
            </Card1>
          </Column>
        </Row>
      </Header>
      {/* <Hello>
        <Row>
          <Rect></Rect>
        </Row>{' '}
        <Row>
          BorrowBalance <Query>.?</Query>
          <Rect1></Rect1>
        </Row>{' '}
      </Hello>
 */}
      <SecondaryHead>Total Deposits</SecondaryHead>
      <Row>
        <Column>
          <HomeThirdComp>
            <Table>
              <Thead>
                <tr>
                  <Th>Token</Th>

                  <Th>Deposit APy</Th>
                  <Th>Rewards APR</Th>
                  <Th>Deposites</Th>
                  <Th>Colletaral</Th>
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
        </Column>
      </Row>
    </>
  )
}

export default Lending
