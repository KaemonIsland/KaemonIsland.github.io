import React from 'react'
import styled from 'styled-components'

const CharNameHeader = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`

const TheLogicWarlock = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.light};
  clip-path: polygon(0% 0%, 10% 100%, 89% 100%, 100% 0%);
  min-width: 18rem;
  margin: 1rem 0 1.5rem 0;
  & h5 {
    font-weight: 500;
    font-size: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  & p {
    font-size: 0.8rem;
    font-weight: normal;
    text-transform: uppercase;
  }
`

const InfoContainer = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(0.5rem, 1fr);
  grid-template-rows: repeat(6, minmax(2rem, 1fr));
  align-items: center;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    font-size: 1rem;
    font-weight: normal;
    display: inline-block;
  }
  & span {
    font-size: 0.8rem;
    font-weight: 300;
    text-transform: uppercase;
  }
`

const infoItems = [
  { text: 'Kaemon Lovendahl', title: 'Player Name' },
  { text: 'Warlock - 25', title: 'Class & Level' },
  { text: '2 years', title: 'Experience' },
  { text: 'Student', title: 'Background' },
  { text: 'Human', title: 'Race' },
  { text: 'Lawful Good', title: 'Alignment' },
]

export const Name = () => (
  <CharNameHeader>
    <TheLogicWarlock>
      <h5>Logic Warlock</h5>
      <p>Character Name</p>
    </TheLogicWarlock>
    <InfoContainer>
      {infoItems.map(({ text, title }, i) => (
        <InfoItem key={i}>
          <span>{title}</span>
          <p>{text}</p>
        </InfoItem>
      ))}
    </InfoContainer>
  </CharNameHeader>
)
