import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import URLWarning from '../components/Header/URLWarning'
import Home from './Home'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Earn from './Earn'
import ManageEarn from './Earn/Manage'
import Stake from './Stake'
import Lending from './Lending/index'
import ManageStake from './Stake/Manage'
import Pool from './Pool'
import Buy from './Buy'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import Airdrop from './Airdrop'

import Vote from './Vote'
import VotePage from './Vote/VotePage'

import IDO from './IDO'
import Migrate from './Earn/Migrate'
import Footer from '../components/Footer/index'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

// const BodyWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding-top: 100px;
//   align-items: center;
//   flex: 1;
//   overflow-y: auto;
//   overflow-x: hidden;
//   z-index: 10;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 2rem;
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
  margin: 0;
`

const FooterWrapper = styled.div`
  background-color: rgba(245, 161, 39, 0.15);
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export default function App() {
  return (
    <Suspense fallback={null}>
      <Route component={GoogleAnalyticsReporter} />
      <Route component={DarkModeQueryParamReader} />
      <AppWrapper>
        <URLWarning />
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Popups />
          <Polling />
          <Web3ReactManager>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact strict path="/trade" component={Swap} />
              <Route exact strict path="/trade/:outputCurrency" component={RedirectToSwap} />
              <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
              <Route exact strict path="/buy" component={Buy} />
              <Route exact strict path="/find" component={PoolFinder} />
              <Route exact strict path="/pool" component={Pool} />
              <Route exact strict path="/lending" component={Lending} />
              <Route exact strict path="/png/:version" component={Earn} />
              <Route exact strict path="/stake/:version" component={Stake} />
              <Route exact strict path="/zap" component={Vote} />
              <Route exact strict path="/ido" component={IDO} />
              <Route exact strict path="/airdrop" component={Airdrop} />
              <Route exact strict path="/create" component={RedirectToAddLiquidity} />
              <Route exact path="/add" component={AddLiquidity} />
              <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
              <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
              <Route exact path="/create" component={AddLiquidity} />
              <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
              <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
              <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
              <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
              <Route exact strict path="/png/:currencyIdA/:currencyIdB/:version" component={ManageEarn} />
              <Route exact strict path="/stake/:version/:rewardCurrencyId" component={ManageStake} />
              <Route exact strict path="/vote/:id" component={VotePage} />
              <Route
                exact
                path="/migrate/:currencyIdFromA/:currencyIdFromB/:versionFrom/:currencyIdToA/:currencyIdToB/:versionTo/"
                component={Migrate}
              />
              {/* <Route component={RedirectPathToSwapOnly} /> */}
            </Switch>
          </Web3ReactManager>
          <Marginer />
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </BodyWrapper>
      </AppWrapper>
    </Suspense>
  )
}