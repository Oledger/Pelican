import React from 'react'
import styled from 'styled-components'
import NightIcon from '../../assets/images/moon.png'
import SunIcon from '../../assets/images/sun.png'

const ToggleElement = styled.span<{ isActive?: boolean; isOnSwitch?: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: 14px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.text4) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  font-size: 1rem;
  font-weight: 400;

  padding: 0.35rem 0.6rem;
  border-radius: 12px;
  background: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.primary1 : theme.text4) : 'none')};
  color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text2)};
  font-size: 1rem;
  font-weight: ${({ isOnSwitch }) => (isOnSwitch ? '500' : '400')};
  :hover {
    user-select: ${({ isOnSwitch }) => (isOnSwitch ? 'none' : 'initial')};
    background: ${({ theme, isActive, isOnSwitch }) =>
      isActive ? (isOnSwitch ? theme.primary1 : theme.text3) : 'none'};
    color: ${({ theme, isActive, isOnSwitch }) => (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3)};
  }
`

const StyledToggle = styled.button<{ isActive?: boolean; activeElement?: boolean }>`
  border-radius: 12px;
  border: none;
  /* border: 1px solid ${({ theme, isActive }) => (isActive ? theme.primary5 : theme.text4)}; */
  background: ${({ theme }) => theme.bg3};
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0;
  /* background-color: transparent; */
`

const DarkmodeIconHolder = styled.div`
  height: 1.5rem;
  width: 1.5rem;
`
const DarkmodeIcon = styled.img`
  height: 100%;
  width: 100%;
`

export interface ToggleProps {
  id?: string
  isActive: boolean
  toggle: () => void
}

const ToggleNight = ({ id, isActive, toggle }: ToggleProps) => {
  return (
    <StyledToggle id={id} isActive={isActive} onClick={toggle}>
      <ToggleElement isActive={isActive} isOnSwitch={true}>
        <DarkmodeIconHolder>
          <DarkmodeIcon src={NightIcon} alt="" />
        </DarkmodeIconHolder>
      </ToggleElement>
      <ToggleElement isActive={!isActive} isOnSwitch={false}>
        <DarkmodeIconHolder>
          <DarkmodeIcon src={SunIcon} alt="" />
        </DarkmodeIconHolder>
      </ToggleElement>
    </StyledToggle>
  )
}

export default ToggleNight
