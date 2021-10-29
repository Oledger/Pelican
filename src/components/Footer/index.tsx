import React from 'react'
import styled from 'styled-components'
import TelegramIcon from '../../assets/Logo_Exports/footer-icons/telegram.png'
import DiscordIcon from '../../assets/Logo_Exports/footer-icons/discord.png'
import TwitterIcon from '../../assets/Logo_Exports/footer-icons/twitter-logo.png'
import GithubIcon from '../../assets/Logo_Exports/footer-icons/github.png'
import RedditIcon from '../../assets/Logo_Exports/footer-icons/reddit.png'

const FooterHolder = styled.div`
  color: rgba(245, 161, 39, 1);
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const FooterImageHanlder = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`

const FooterImage = styled.img`
  height: 3rem;
  background-color: rgba(245, 161, 39, 1);
  padding: 0.5rem;
  border-radius: 50%;
`

const FooterText = styled.div``

const index = () => {
  return (
    <FooterHolder>
      <FooterImageHanlder>
        <FooterImage src={TelegramIcon}></FooterImage>
        <FooterImage src={DiscordIcon}></FooterImage>
        <FooterImage src={TwitterIcon}></FooterImage>
        <FooterImage src={GithubIcon}></FooterImage>
        <FooterImage src={RedditIcon}></FooterImage>
      </FooterImageHanlder>
      <FooterText>
        <h4 style={{ fontWeight: 'bold' }}>Docs</h4>
      </FooterText>
    </FooterHolder>
  )
}

export default index
