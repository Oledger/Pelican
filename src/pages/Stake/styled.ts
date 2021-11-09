import styled from 'styled-components'

export const StakeSeconCompWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const StakeFirstTextComponent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-bottom: 2rem;
`
export const StakeMainHead = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  margin: 0;
  margin-bottom: 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  font-size: 2.5rem;
  `};
`
export const OrangeSubHead = styled.h3`
  margin: 0;
  font-weight: 500;
  color: ${({ theme }) => theme.primary1};
  margin-bottom: 1rem;
`
export const StakeDescriptions = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 0;
`
export const StakeBoxesHolder = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 3rem;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  flex-direction: column;
  padding: 1rem;
  width: 85%;
  `};
  ${({ theme }) => theme.mediaWidth.upToSmall`
   width: 90%;  
  `};
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
   width: 100vw;
   margin:0;
  `};
`
export const StakeBoxColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.7rem;
  width: 40%;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  width: 100%;  
  `};
`

export const OrangeButton = styled.button`
  background-color: ${({ theme }) => theme.primary1};
  border: none;
  padding: 0.6rem;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  border-radius: 1rem;
  font-weight: 500;
`

export const StakeConeRone = styled.div`
  width: 100%;
  background-color: rgba(245, 161, 39, 0.15);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  align-items: center;
  `};
`
export const StakeConeRtwo = styled.div`
  width: 100%;
  background-color: rgba(245, 161, 39, 0.15);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const StakeIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem
    ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  `};
`
export const StakeConeBoxTwoBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`
export const NoteText = styled.p`
  font-size: 0.8rem;
`

export const XpelicanBalance = styled.div`
  display: flex;
  gap: 10px;
`
export const IconTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const XpelicanBalanceText = styled.h4`
  font-size: 1rem;
  margin: 0;
`

export const LogoHandler = styled.img`
  height: 3rem;
`

export const StakedPelican = styled.div`
  display: flex;
  gap: 10px;
`

export const StakeAPRHead = styled.h2`
  margin: 0;
  font-weight: 600;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  font-size: 1.2rem;
  `};
`

export const StakeBoxColumnTwo = styled.div`
  width: 40%;
  border-radius: 1rem;
  border: 3px solid rgba(245, 161, 39, 0.2);
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  margin-top: 1.5rem;
  width: 100%;
  `};
`
export const StakePelicanHead = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`
export const OnlyBorder = styled.h2`
  margin: 0;
  border: 1px solid ${({ theme }) => theme.primary1};
  font-weight: 500;
  color: ${({ theme }) => theme.primary1};
  font-size: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 0px ${({ theme }) => theme.primary1};
  padding: 3.2%;
`
export const BalanceInCtwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const BigBoxBottomPart = styled.div`
  width: 100%;
  flex-direction: column;
`

export const InputSection = styled.div`
  border: solid 1px lightgray;
  padding: 2%;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
`

export const TheInput = styled.input`
  width: 80%;
  padding: 1% 2%;
  font-size: 1rem;
  border: none;
  outline: none;
`
export const StakeConnectWalletBtn = styled.button`
  background-color: ${({ theme }) => theme.primary1};
  border: none;
  padding: 1rem 1.5rem;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  border-radius: 1rem;
  font-weight: 500;
  width: 100%;
  margin-top: 1rem;
`

export const StakeWalletConnectedBtn = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.bg1};
  border: solid 2px rgba(245, 88, 39, 0.8);
  color: ${({ theme }) => theme.bg5};
  cursor: crossair;
  font-weight: 500;
  margin-top: 1rem;
`
export const SelectDropDown = styled.select`
  padding: 1% 2% 1% 4%;
  border: none;
  outline: none;
  border-left: 1px solid gray;
  font-family: inherit;
  background-color: rgba(245, 161, 39, 0.2);
  color: ${({ theme }) => theme.text1};
`
export const DropDownItem = styled.option`
  padding: 1% 2%;
  border: none;
  outline: none;
`
