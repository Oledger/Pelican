import styled from 'styled-components'

export const LendingTopContainer = styled.div`
  background-color: rgba(245, 161, 39, 0.15);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LendingCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   grid-template-columns: repeat(1, 1fr);
   width: 95%;
  `}
`

export const LendingCard = styled.div`
  background-color: ${({ color }) => color};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  border: 3px solid ${({ theme }) => theme.bg1};
  border-radius: 10px;
`

export const CardTextContainer = styled.div`
  display: flex;
`

export const CardHead = styled.h4`
  color: black;
  margin: 0;
  font-weight: 500;
`

export const CircleInCard = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  margin-right: 0.6rem;
  padding: 0.5rem;
  background-color: ${({ color }) => color};
`
export const CardValue = styled.h3`
  margin: 0;
  margin-top: 0.5rem;
  font-weight: 600;
  color: black;
`

export const BorrowingContainer = styled.div`
  width: 80%;
  background-color: ${({ theme }) => theme.bg1};
  border-radius: 10px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   width: 95%;
  `}
`
export const Line = styled.div`
  background-color: rgb(255, 221, 171);
  padding: 3px;
  flex: 8;
`
export const BorrowingSecondLine = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BorrowingText = styled.h5`
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
  display: flex;
  margin-right: 1rem;
`
export const BorrowingValue = styled.h5`
  margin: 0;
  font-weight: 500;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const ManageLending = styled.div`
  background-color: rgba(255, 212, 147, 0.25);
  margin-top: 2rem;
  width: 80%;
  padding: 1rem 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   width: 95%;
   flex-direction: column;
  `}
`

export const ManageHeadContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   margin-bottom: 2rem;
  
  `}
`

export const RewardsContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   flex-direction: column;
  `}
`

export const RewardsCard = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 1rem;
  border-radius: 10px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   width: 95%;
   flex-direction: column;
   margin-bottom: 1rem;
  `}
`

export const RewardsCardIcon = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
   margin-bottom: 1rem;
  `}
`

export const RewardsCardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const RewardsCardHead = styled.h4`
  margin: 0;
  font-weight: 500;
  color: black;
`

export const RewardsCardValue = styled.div`
  margin-top: 0.3rem;
  color: black;
`

export const ManageHead = styled.h2`
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`
export const LendIcon = styled.img`
  width: 4vw;
  margin-right: 1rem;
`
export const ArrowRight = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg1};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary1};
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  margin-left: 1rem;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.bg2};
  }

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   margin-left: 0;
  `}
`
export const PortfolioHeadContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  width: 100vw;  
  `};
`

export const PortfolioHead = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 2.2rem;
`

export const LeftArrow = styled.button`
  margin-right: 1rem;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.primary1};
  padding: 0.6rem;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: center;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  margin-right: 0.5rem;
  `};
`
export const RewardBoxHolder = styled.div`
  display: flex;
  width: 80%;
  margin-top: rem;
  margin-top: 2rem;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column; 
    width: 100%;
  `};
`

export const RewardBox = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  width: 45%;
  border-radius: 10px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  width: 80%;
  margin-bottom: 1rem;  
  `};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  width: 100vw;
  `};
`
export const IconInBox = styled.img`
  width: 2.5rem;
`

export const RewardText = styled.h4`
  margin: 0;
  font-size: 1rem;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: .8rem;
  `};
`
export const RewardValue = styled.h4`
  margin: 0;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: .8rem;
  `};
`
export const RewardSecondValue = styled.h4`
  margin: 0;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  font-size: .8rem;
  `};
`
export const TokenContainer = styled.div`
  margin-top: 4rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  width: 100%;
  align-items: center;  
  `};
`

export const AccountAssetsContainer = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  width: 100%;
  align-items: center;  
  `};
`

export const AccountAssetsHead = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 1rem;
`

export const AccountAssetsValue = styled.h4`
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`

export const BorrowedTokenContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  width: 100vw;
  align-items: center;  
  `};
`

export const BorrowedTokenHead = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 1rem;
`

export const BorrowedTokenValue = styled.h4`
  margin: 0;
  font-weight: 500;
  letter-spacing: 1px;
`
