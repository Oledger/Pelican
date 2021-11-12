import React from 'react'
import LendingIcon from '../../assets/images/lending.png'
import PelicanTokenIcon from '../../assets/Logo_Exports/Emblem/Emblem-Filled.png'
import AvaxTokenIcon from '../../assets/images/avax-token.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {
  CardTextContainer,
  CircleInCard,
  LendingCardContainer,
  CardHead,
  LendingCard,
  LendingTopContainer,
  CardValue,
  BorrowingContainer,
  Line,
  BorrowingSecondLine,
  BorrowingText,
  BorrowingValue,
  ManageLending,
  ManageHeadContainer,
  ManageHead,
  LendIcon,
  RewardsContainer,
  RewardsCard,
  RewardsCardIcon,
  RewardsCardText,
  RewardsCardHead,
  RewardsCardValue,
  ArrowRight
} from './styled'
import { Link } from 'react-router-dom'

const Lending = () => {
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
      <ManageLending>
        <ManageHeadContainer>
          <LendIcon src={LendingIcon} />
          <ManageHead>Manage your portfolio</ManageHead>
        </ManageHeadContainer>
        <RewardsContainer>
          <RewardsCard color={'rgb(255, 220, 167)'}>
            <RewardsCardIcon src={PelicanTokenIcon} />
            <RewardsCardText>
              <RewardsCardHead>Pelican Rewards</RewardsCardHead>
              <RewardsCardValue>0</RewardsCardValue>
            </RewardsCardText>
          </RewardsCard>
          <RewardsCard color={'#fde4d3'}>
            <RewardsCardIcon src={AvaxTokenIcon} />
            <RewardsCardText>
              <RewardsCardHead>Avax Rewards</RewardsCardHead>
              <RewardsCardValue>0</RewardsCardValue>
            </RewardsCardText>
          </RewardsCard>
          <Link to="/lending/myportfolio" style={{ textDecoration: 'inherit', color: 'inherit' }}>
            <ArrowRight>
              <AiOutlineArrowRight />
            </ArrowRight>
          </Link>
        </RewardsContainer>
      </ManageLending>
    </>
  )
}

export default Lending
