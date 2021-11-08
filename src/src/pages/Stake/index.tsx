import React from 'react'
import { Link } from 'react-router-dom'
import PelicanOpenLogo from '../../assets/Logo_Exports/Illustration/Pelican-Gullar-Open.png'
import PelicanCloseLogo from '../../assets/Logo_Exports/Illustration/Pelican-Gullar-Closed.png'
import LogoFilled from '../../assets/Logo_Exports/Emblem/Emblem-Filled.png'
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
  OrangeSubHead,
  StakeDescriptions,
  StakeFirstTextComponent,
  StakeMainHead,
  StakeSeconCompWrapper,
  StakeBoxesHolder,
  StakeBoxColumnOne,
  StakeConeRone,
  StakeBoxColumnTwo,
  StakeAPRHead,
  OrangeButton,
  StakeConeRtwo,
  StakeIconBox,
  XpelicanBalance,
  StakedPelican,
  LogoHandler,
  IconTextContent,
  StakeConeBoxTwoBottom,
  NoteText,
  StakePelicanHead,
  OnlyBorder,
  BalanceInCtwo,
  BigBoxBottomPart,
  InputSection,
  TheInput,
  StakeConnectWalletBtn,
  StakeWalletConnectedBtn,
  SelectDropDown,
  DropDownItem
} from './styled'
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'

const Stake = () => {
  const toggleWalletModal = useWalletModalToggle()
  const { account } = useActiveWeb3React()
  return (
    <>
      <TopBanner>
        <PeliconOpenImage src={PelicanOpenLogo} />
        <BannerTextHolder>
          <BannerTextHead>Stake</BannerTextHead>
          <BannerTextTag>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
              Home
            </Link>
            <Span> {'>'} </Span>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/stake">
              Stake
            </Link>
          </BannerTextTag>
        </BannerTextHolder>
        <PeliconCloseFlipImage src={PelicanCloseLogo} />
      </TopBanner>
      <StakeSeconCompWrapper>
        <StakeFirstTextComponent>
          <StakeMainHead>Earn more Pelican</StakeMainHead>
          <OrangeSubHead>Stake your PELICAN for XPELICAN and maximize your yield. No Impermanent Loss.</OrangeSubHead>
          <StakeDescriptions>
            For every swap on PELICAN, a 0.05% fee is collected to XPELICAN and used to buy back PELICAN
            tokens.Currently, buybacks are occurring every 2 days. Your XPELICAN is continuously compounding! When you
            unstake you will receive all the originally deposited PELICAN and any additional from fees.
          </StakeDescriptions>
        </StakeFirstTextComponent>
        <StakeBoxesHolder>
          <StakeBoxColumnOne>
            <StakeConeRone>
              <StakeBoxColumnOne>
                <StakeAPRHead>Staking APR</StakeAPRHead>
                <OrangeButton>View Status</OrangeButton>
              </StakeBoxColumnOne>
            </StakeConeRone>
            <StakeConeRtwo>
              <StakeIconBox>
                <XpelicanBalance>
                  <LogoHandler src={LogoFilled} />
                  <IconTextContent>
                    <XpelicanBalance>XPELICAN Balance</XpelicanBalance>
                    <XpelicanBalance>0</XpelicanBalance>
                  </IconTextContent>
                </XpelicanBalance>
                <StakedPelican>
                  <LogoHandler src={LogoFilled} />
                  <IconTextContent>
                    <XpelicanBalance>Staked Pelican</XpelicanBalance>
                    <XpelicanBalance>0</XpelicanBalance>
                  </IconTextContent>
                </StakedPelican>
              </StakeIconBox>
              <StakeConeBoxTwoBottom>
                <OrangeButton>Add xJOE to Wallet</OrangeButton>
                <NoteText>Note: If you've staked your xJOE into a farm,it will not appear here.</NoteText>
              </StakeConeBoxTwoBottom>
            </StakeConeRtwo>
          </StakeBoxColumnOne>
          <StakeBoxColumnTwo>
            <StakePelicanHead>Stake PELICAN</StakePelicanHead>
            <OnlyBorder>1 XPELICAN = 1.14091 PELICAN</OnlyBorder>
            <BigBoxBottomPart>
              <BalanceInCtwo>
                <p>Balance</p>
                <p>0</p>
              </BalanceInCtwo>
              <InputSection>
                <TheInput type="number" placeholder="0.0" />
                <SelectDropDown>
                  <DropDownItem value="Pelican">PELICAN</DropDownItem>
                </SelectDropDown>
              </InputSection>
            </BigBoxBottomPart>
            {account ? (
              <StakeWalletConnectedBtn>Wallet Connected</StakeWalletConnectedBtn>
            ) : (
              <StakeConnectWalletBtn onClick={toggleWalletModal}>Connect Wallet</StakeConnectWalletBtn>
            )}
          </StakeBoxColumnTwo>
        </StakeBoxesHolder>
      </StakeSeconCompWrapper>
    </>
  )
}

export default Stake
