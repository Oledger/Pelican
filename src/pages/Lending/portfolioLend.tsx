import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import PelicanTokenIcon from '../../assets/Logo_Exports/Emblem/Emblem-Filled.png'
import AvaxTokenIcon from '../../assets/images/avax-token.png'
import {
  LendingTopContainer,
  LendingCardContainer,
  LendingCard,
  CardTextContainer,
  CircleInCard,
  CardHead,
  CardValue,
  BorrowingContainer,
  Line,
  BorrowingSecondLine,
  BorrowingText,
  BorrowingValue,
  PortfolioHeadContainer,
  PortfolioHead,
  LeftArrow,
  RewardBoxHolder,
  RewardBox,
  IconInBox,
  RewardText,
  RewardValue,
  RewardSecondValue,
  TokenContainer,
  AccountAssetsContainer,
  AccountAssetsHead,
  AccountAssetsValue,
  BorrowedTokenContainer,
  BorrowedTokenHead,
  BorrowedTokenValue
} from './styled'

const portfolioLend = () => {
  return (
    <>
      <LendingTopContainer>
        <LendingCardContainer>
          <LendingCard color={'#fde4d3'}>
            <CardTextContainer>
              <CircleInCard color={'rgb(255, 221, 171)'} />
              <CardHead>Supply Balance</CardHead>
            </CardTextContainer>
            <CardValue>$0</CardValue>
          </LendingCard>
          <LendingCard color={'#e2e9ff'}>
            <CardTextContainer>
              <CardHead>Net APY</CardHead>
            </CardTextContainer>
            <CardValue>0%</CardValue>
          </LendingCard>
          <LendingCard color="#ddffe0">
            <CardTextContainer>
              <CardHead>Rewards APR</CardHead>
            </CardTextContainer>
            <CardValue>0%</CardValue>
          </LendingCard>
          <LendingCard color={'#ffe8e8'}>
            <CardTextContainer>
              <CircleInCard color={'skyblue'} />
              <CardHead>Borrow Balance</CardHead>
            </CardTextContainer>
            <CardValue>$0</CardValue>
          </LendingCard>
        </LendingCardContainer>
        <BorrowingContainer>
          <Line />
          <BorrowingSecondLine>
            <BorrowingText>Borrow Limit 0% </BorrowingText>
            <Line />
            <BorrowingValue>$0</BorrowingValue>
          </BorrowingSecondLine>
        </BorrowingContainer>
      </LendingTopContainer>
      <PortfolioHeadContainer>
        <Link to="/lending" style={{ textDecoration: 'none', color: 'inherit' }}>
          <LeftArrow>
            {' '}
            <AiOutlineArrowLeft />
          </LeftArrow>
        </Link>
        <PortfolioHead>My Portfolio</PortfolioHead>
      </PortfolioHeadContainer>
      <RewardBoxHolder>
        <RewardBox color={'rgb(255, 221, 171)'}>
          <IconInBox src={PelicanTokenIcon} />
          <RewardText>Pelican Rewards</RewardText>
          <RewardValue>0 PELICAN</RewardValue>
          <RewardSecondValue>0</RewardSecondValue>
        </RewardBox>
        <RewardBox color={'#fde4d3'}>
          <IconInBox src={AvaxTokenIcon} />
          <RewardText>AWAX Rewards</RewardText>
          <RewardValue>0 AWAX</RewardValue>
          <RewardSecondValue>0</RewardSecondValue>
        </RewardBox>
      </RewardBoxHolder>
      <TokenContainer>
        <AccountAssetsContainer>
          <AccountAssetsHead>Account Assets</AccountAssetsHead>
          <AccountAssetsValue>No lending tokens</AccountAssetsValue>
        </AccountAssetsContainer>
        <BorrowedTokenContainer>
          <BorrowedTokenHead>Borrowed Tokens</BorrowedTokenHead>
          <BorrowedTokenValue>No borrowing tokens</BorrowedTokenValue>
        </BorrowedTokenContainer>
      </TokenContainer>
    </>
  )
}

export default portfolioLend
