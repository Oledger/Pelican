import React,{useState,useEffect,useRef} from 'react'
//import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import axios from 'axios'
//import { SINGLE_SIDE_STAKING_REWARDS_INFO, useSingleSideStakingInfo } from '../../state/stake/hooks'
//import { TYPE } from '../../theme'
//import SingleSidePoolCard from '../../components/earn/SingleSidePoolCard'
//import { RouteComponentProps } from 'react-router-dom'
//import { RowBetween } from '../../components/Row'
//import { CardSection, DataCard } from '../../components/earn/styled'
//import Loader from '../../components/Loader'
//import { useActiveWeb3React } from '../../hooks'
//import { BIG_INT_ZERO } from '../../constants'
import { useTranslation } from 'react-i18next'
import { TopBanner,BannerTextHead,BannerTextTag,BannerTextHolder,Span,PeliconCloseFlipImage,PeliconOpenImage } from '../Swap/styled'
import {Link} from 'react-router-dom';
import PelicanOpenLogo from '../../assets/Logo_Exports/Illustration/Pelican-Gullar-Open.png'
import PelicanCloseLogo from '../../assets/Logo_Exports/Illustration/Pelican-Gullar-Closed.png'
import PelicanPng from '../../assets/Logo_Exports/Emblem/Emblem-BG-Transparent.png';
//import {ConnectedWalletBtn,ConnectWalletBtn} from '../../pages/Home/styled' ;
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'
//import { ArrowDown } from 'react-feather';
import { useModalOpen, useToggleModal } from '../../state/application/hooks';
import { ApplicationModal } from '../../state/application/actions';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { StyledMenu, MenuItem, MenuNavItem } from '../../components/StyledMenu';

import { MessageCircle, Send, Info, Twitter, GitHub, Book, Calendar } from 'react-feather';
//import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
import { LANDING_PAGE } from '../../constants';




// const PageWrapper = styled(AutoColumn)`
//   max-width: 100px;
//    width: 100%;
  
// `
const Heading =styled.h1`

width:70%;
 
margin-left:-16.8rem;
`
const Paragraph  = styled.p`
position :absolute;
width:70%;
margin-left:-16.8rem;
font-weight: 600;
top:520px;
color: #F8941D
`
const Paragraph2 = styled.p`
display : flex;
width : 90%;
margin-left:0rem;
font-weight: 500;
font-size:17px;
padding-top:5px;
line-height:22px;
margin-top : 0.5rem;
text-align: justify;
text-justify: inter-word
`
const Text1 = styled.h1`
width:100%;
margin-left:1.5rem;
font-weight :600;
font-size:28px;
`
const Text2 = styled.h2`

width: 104px;
height: 20px;
left: 613.04px;
top: 584.04px;
margin-top: -70px;
margin-left : 30rem;
`
const Text3 = styled.h3`
white-space: nowrap;
width: 120px;
height: 20px;
left: 640.04px;
top: 584.04px;
margin-top: -10px;
margin-left : 28.7rem;
`

const Box = styled.div`
width: 630.34px;
height: 144.65px;
margin-right : 720px;
margin-top : 2rem;
top: 536.02px;
margin-left:11rem;

background: ${({ theme }) => theme.bg1};
border-radius: 15px
`
const StyledLink  = styled(Link)`
width: 153.16px;
height: 49.54px;
left: 182.54px;
top: 615.75px;
color : white;
text-decoration : none;
margin-left : 2rem;
margin-top:1.5rem;
padding:  14px 25px  ;

background: #F7931F;
border-radius: 15px 
`
const Box2 = styled.div`
width: 630.34px;
height: 144.65px;
margin-right : 720px;
margin-top : 2rem;
top: 536.02px;
margin-left:11rem;
padding-bottom:20%;
background-color: ${({ theme }) => theme.bg1};
border-radius: 15px
`
const Logo = styled.img`
max-width: 10%;
margin-left : 2.4rem;
margin-top: 1rem

`
const Text4 = styled.h1`
position: absolute;
height: 18px;
top: 780px;
font-weight: 500;
font-size: 16px;
line-height: 18px;
margin-left : 8rem;
`
const Text5 = styled.h2`
position: absolute;
width: 14px;
height: 18px;
top: 799px;

font-weight: 500;
font-size: 16px;
line-height: 18px;
margin-left : 8rem
`
const Logo2 = styled.img`
max-width: 10%;
margin-left : 17rem;
margin-top:2.6rem
`
const Text6 = styled.h2`
position: absolute;
height: 18px;
top: 780px;
font-weight: 500;
font-size: 16px;
line-height: 18px;
margin-left : 29rem;
`
const Text7 = styled.h2`
position: absolute;
width: 14px;
height: 18px;
top: 799px;

font-weight: 500;
font-size: 16px;
line-height: 18px;
margin-left : 29rem

`
const StyledLink1  = styled(Link)`
position:absolute;
width: auto;
height: 49.54px;
left: 182.54px;
margin-top: 170px;
color : white;
text-align : center;
text-decoration : none;
margin-left : -3.8rem;
padding:  14px 32px  ;
overflow : hidden;

background: #F7931F;
border-radius: 15px 
`
const Text8 = styled.h2`
position: absolute;
width: 431px;
height: 13px;
margin-left : 2.3rem;
top: 980.05px;

font-weight: normal;
font-size: 12px;
line-height: 13px;
`
const Box3 = styled.div`

margin-top : -450px;
width: 521.59px;
height: 428.45px;
left: 768.41px;
top: 536.02px;
margin-left: 40rem;

background-color: ${({ theme }) => theme.bg1};
border: 3px solid #FFF1E1;
box-sizing: border-box;
border-radius: 15px
padding-bottom : 27.7rem;

`
const Text9 = styled.h2`
position: absolute;
height: 18px;
top: 600px;
font-weight: 500;
font-size: 16px;
line-height: 18px;
margin-left : 2.2rem;
`
const Text10 = styled.h2`
position: absolute;
width: 40px;
height: 13px;
margin-left : 11.4rem;
top: 605px;

font-weight: normal;
font-size: 13px;
line-height: 13px;
color: #B1B1B1;
`
const Box4 = styled.div`
position: absolute;
width: 313.27px;
height: 49.54px;
left: 799px;
top: 680px;
margin-left : -2rem;

background: #FFFFFF;
border: 1px solid #F7931F;
box-sizing: border-box;
border-radius: 15px;
`
const Text11 = styled.h2`
position: absolute;
width: auto;
height: 14.97px;
left: 30px;
top: 0.5px;
font-weight: 600;
font-size: 16px;
line-height: 18px;
text-align: center;
overflow : hidden
color: #F8941D;
`
const Text12 = styled.h2`
position: absolute;
width: 61px;
height: 16px;
left: 9px;
top: 100.92px;

font-weight: 600;
font-size: 14px;
line-height: 16px;
/* identical to box height */

color: #B1B1B1;

`
const Text16 = styled.h2`
position: absolute;
width: 12px;
height: 16px;
left: 440px;
top: 100.92px;

font-weight: 600;
font-size: 14px;
line-height: 16px;
/* identical to box height */

text-align: right;
`
const Box5 = styled.div`
position: absolute;
width: 313.27px;
height: 49.54px;
left: 799px;
top: 840px;
margin-left : -2rem;
padding-right: 28.5rem;
background: #FFFFFF;
border: 1px solid #F7931F;
box-sizing: border-box;
border-radius: 15px;
`
const Text13 = styled.h2`
position: absolute;
width: 48.05px;
height: 15.92px;
left: 25px;
top: -3px;

font-weight: bold;
font-size: 20px;
line-height: 22px;

color: #D7E7FF;
`
const Rectangle = styled.div`
position: absolute;
width: 55.69px;
height: 34.05px;
left: 230px;
top: 7px;
background: #FFF1E1;
border-radius: 5px;
`
const Text14 = styled.h2`
position: absolute;
width: 35.69px;
height: 11.88px;
left: 11px;
top: -1px;
color: orange;
font-weight: 500;
font-size: 12px;
line-height: 13px;
text-align: center;

`
const Vector = styled.svg`
position: absolute;
width: 0px;
height: 34.98px;
left: 295px;
top: 7px;

border: 1px solid #EAEAEA;
`
const Rectangle2 = styled.div`
position: absolute;
width: 55.69px;
height: 34.05px;
left: 307px;
top: 7px;
background: #FFF1E1;
border-radius: 5px;
padding-left: 15%;
`
const Text15 = styled.h2`
position: absolute;
width: 35.69px;
height: 11.88px;
left: 6px;
top: -1px;
color:orange;
font-weight: 500;
font-size: 12px;
line-height: 13px;
text-align: center;

`

const ConnectWalletBtn = styled.button`
position:absolute;
font-size: 20px;
width: auto;
height: 49.54px;
left: 182.54px;
margin-top: 70px;
margin-left : -11.5rem;
padding:  14px 230px  ;
cursor: pointer;
border: none;
background: #F7931F;
border-radius: 15px ;

`
const ConnectedWalletBtn = styled.button`
position:absolute;
font-size: 20px;
width: auto;
height: 49.54px;
left: 182.54px;
margin-top: 70px;
margin-left : -11.5rem;
padding:  14px 200px  ;
border: none;
cursor: pointer;
background: #F7931F;
border-radius: 15px ;
`
const Text17 = styled.h2`
position: absolute;
width: auto;
height: 14.97px;
left: 167px;
top: 4px;

font-weight: 600;
font-size: 16px;
line-height: 18px;
text-align: center;
overflow:hidden;
color: #FFFFFF;
`
const Text18 = styled.h2`
position: absolute;
width: auto;
height: 14.97px;
left: 167px;
top: 4px;

font-weight: 600;
font-size: 16px;
line-height: 18px;
text-align: center;
overflow:hidden;
color: #FFFFFF;
`
const StyledMenuButton = styled.button`
  
border: solid grey;
border-width: 0 4px 4px 0;
display: inline-block;
padding: 5px;
cursor: pointer;
margin-top : 1rem;
margin-left : 53rem;
transform: rotate(45deg);
-webkit-transform: rotate(45deg);
  }
`
const MenuFlyout = styled.span`
  min-width: 12.125rem;
  background-color: ${({ theme }) => theme.bg2};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 4rem;
  right: 0rem;
  left : 24rem;
  z-index: 100;

`

const Stake = ()=>{

  const TutorialPage = LANDING_PAGE + 'tutorials'

const NarrowMenuFlyout = styled(MenuFlyout)`
  min-width: 10.125rem;
  
  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -17.25rem;
    
  `};
`

const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  const { t } = useTranslation()
  useOnClickOutside(node, open ? toggle : undefined)
  

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


// export default function Earn({
//   match: {
//     params: { version }
//   }
// }: RouteComponentProps<{ version: string }>) {
 // const { chainId } = useActiveWeb3React()
  //const { t } = useTranslation()
  //const stakingInfos = useSingleSideStakingInfo(Number(version))
  //const [stakingInfoResults, setStakingInfoResults] = useState<any[]>()

  // useMemo(() => {
  //   Promise.all(
  //     stakingInfos
  //       ?.sort(function(info_a, info_b) {
  //         // greater stake in png comes first
  //         return info_a.totalStakedInPng?.greaterThan(info_b.totalStakedInPng ?? BIG_INT_ZERO) ? -1 : 1
  //       })
  //       .sort(function(info_a, info_b) {
  //         if (info_a.stakedAmount.greaterThan(BIG_INT_ZERO)) {
  //           if (info_b.stakedAmount.greaterThan(BIG_INT_ZERO))
  //             // both are being staked, so we keep the previous sorting
  //             return 0
  //           // the second is actually not at stake, so we should bring the first up
  //           else return -1
  //         } else {
  //           if (info_b.stakedAmount.greaterThan(BIG_INT_ZERO))
  //             // first is not being staked, but second is, so we should bring the first down
  //             return 1
  //           // none are being staked, let's keep the  previous sorting
  //           else return 0
  //         }
  //       })
  //   ).then(results => {
  //     setStakingInfoResults(results)
  //   })
	// // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [stakingInfos?.length])

  // const DataRow = styled(RowBetween)`
  //   ${({ theme }) => theme.mediaWidth.upToSmall`
  //    flex-direction: column;
  //  `};
  // `

  //const stakingRewardsExist = Boolean(typeof chainId === 'number' && (SINGLE_SIDE_STAKING_REWARDS_INFO[chainId]?.length ?? 0) > 0)

 
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
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/stake/0">
              Stake
            </Link>
          </BannerTextTag>
        </BannerTextHolder>
        <PeliconCloseFlipImage src={PelicanCloseLogo} />
      </TopBanner>
      <Heading>
      Earn more Pelican
      </Heading>
      <Paragraph>
        Stake your PELICAN for XPELICAN and maximize your yield. No Impermanent Loss.
      </Paragraph>
      <Paragraph2>
      For every swap on PELICAN ,a 0.05% fee is collected to XPELICAN and used to buy back PELICAN tokens.
      Currently,buybacks are occurring every 2 days.Your XPELICAN is continuously compounding!When you unstake you will receive all the 
      originally deposited PELICAN and any additional from fees.
      </Paragraph2>
      
      
        <Box>
         <Text1> Staking APR</Text1>
         <StyledLink to="/">
              View Stats
            </StyledLink>
            <Text2> 18.31703% </Text2>
            <Text3>Last 7 days APR</Text3>
       </Box>
       <Box2>
         <Logo src={PelicanPng} alt="logo" />
         <Text4>XPELICAN Balance</Text4>
         <Text5>0</Text5>
         <Logo2 src={PelicanPng} alt="logo" />
         <Text6>Staked PELICAN</Text6>
         <Text7>0</Text7>
         <StyledLink1 to="/">
              Add xJOE to Wallet
            </StyledLink1>
            <Text8>Note: If you have staked your xJOE into a form, it will not appear here </Text8>
       </Box2>
       <Box3>
         <Text9>Stake PELICAN</Text9>
         <Text10>Unstake</Text10>
       </Box3>
       <Box4>
         <Text11>1 XPELICAN = 1.14091 PELICAN</Text11>
         <Text12>Balance</Text12>
         <Text16>0</Text16>
       </Box4>
       <Box5>
         <Text13>0.0</Text13>
         <Rectangle>
           <Text14>Max</Text14>
         </Rectangle>
         <Vector>

         </Vector>
         <Rectangle2>
           <Text15>PELICAN</Text15>
         </Rectangle2>
         {/* <ArrowDown size="16" style={{marginLeft : '27rem', marginTop:'1rem',cursor:'pointer'}}
         /> */}
          <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        
      </StyledMenuButton>

      {open && (
        <NarrowMenuFlyout>
          <MenuItem id="link" href={LANDING_PAGE}>
            <Info size={14} />
            {t('menu.about')}
          </MenuItem>
          <MenuNavItem id="link" to={'/IDO'}>
            <Calendar size={14} />
            {t('menu.idos')}
          </MenuNavItem>
          <MenuItem id="link" href={TutorialPage}>
            <Book size={14} />
            {t('menu.tutorials')}
          </MenuItem>
          <MenuItem id="link" href="https://t.me/pangolindex">
            <Send size={14} />
            {t('menu.telegram')}
          </MenuItem>
          <MenuItem id="link" href="https://discord.com/invite/PARrDYYbfw">
            <MessageCircle size={14} />
            {t('menu.discord')}
          </MenuItem>
          <MenuItem id="link" href="https://twitter.com/pangolindex">
            <Twitter size={14} />
            {t('menu.twitter')}
          </MenuItem>
          <MenuItem id="link" href="https://github.com/pangolindex">
            <GitHub size={14} />
            {t('menu.code')}
          </MenuItem>
        </NarrowMenuFlyout>
      )}
    </StyledMenu>
  

{account ? (
              <ConnectedWalletBtn>
                <Text17>Wallet Connected</Text17>
              </ConnectedWalletBtn>
              
            ) : (
              <ConnectWalletBtn onClick={toggleWalletModal}>
                <Text18>Connect Wallet</Text18>
              </ConnectWalletBtn>
            )}
       </Box5>
    {/* <PageWrapper gap="lg" justify="center">
    
      <TopSection gap="md">
        <DataCard>

          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>{t('earnPage.pangolinLiquidityStaking')}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>{t('earnPage.depositPangolinStaking')}</TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
        </DataCard>
      </TopSection> */}

      {/* <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <DataRow style={{ alignItems: 'baseline' }}>
          <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>
            {t('earnPage.currentOpportunities')}
          </TYPE.mediumHeader>
        </DataRow>

        <PoolSection>
          {stakingRewardsExist && stakingInfos?.length === 0 ? (
            <Loader style={{ margin: 'auto' }} />
          ) : !stakingRewardsExist ? (
            t('earnPage.noActiveRewards')
          ) : (
            stakingInfoResults?.map(stakingInfo => (
              <SingleSidePoolCard
                key={stakingInfo.stakingRewardAddress}
                stakingInfo={stakingInfo}
                version={version}
              />
            ))
          )}
        </PoolSection>
      </AutoColumn>
    </PageWrapper> */}
    </>
    
  )
  }
    export default Stake;
