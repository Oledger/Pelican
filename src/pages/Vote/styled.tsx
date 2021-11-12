import styled from 'styled-components'

const handleColorType = (status?: any, theme?: any) => {
  switch (status) {
    case 'pending':
      return theme.blue1
    case 'active':
      return theme.blue1
    case 'succeeded':
      return theme.green1
    case 'defeated':
      return theme.red1
    case 'queued':
      return theme.text3
    case 'executed':
      return theme.green1
    case 'canceled':
      return theme.text3
    case 'expired':
      return theme.text3
    default:
      return theme.text3
  }
}

export const ProposalStatus = styled.span<{ status: string }>`
  font-size: 0.825rem;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${({ status, theme }) => handleColorType(status, theme)};
  border: 1px solid ${({ status, theme }) => handleColorType(status, theme)};
  width: fit-content;
  justify-self: flex-end;
  text-transform: uppercase;
`

export const ZapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  ${({ theme }) => theme.mediaWidth.upToMedium`
flex-direction: column;
width: 80%;
`}
  ${({ theme }) => theme.mediaWidth.upToSmall`
width: 100%;
`}
`
export const ZapTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 45%;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  margin-bottom: 1rem;
  `}
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
width: 100%;
`}
`
export const ZapMainHead = styled.h1`
  margin: 0;
  font-weight: 500;
  margin-bottom: 2rem;
  font-size: 3rem;
`
export const ZapOrangeHead = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.primary1};
  margin-bottom: 1rem;
  font-weight: 500;
`
export const ZapTextTag = styled.h4`
  margin: 0;
  font-weight: 500;
`
