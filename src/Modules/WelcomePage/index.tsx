import React from 'react'
import styled from 'styled-components'
import { MainContentContainer } from '../../Styles/Containers/containers'
import { StepButton } from '../../Styles/Buttons/buttons'

const DescriptionContainer = styled.div``

export const WelcomePage = () => {
  return (
    <div>
      <MainContentContainer>
        <h1>Добро пожаловать</h1>
        <DescriptionContainer>
          <p>
            Данное приложение предназначено для создания <b>маскот-аватара</b>.
            А теперь давай познакомимся
          </p>
          <StepButton>Поехали!</StepButton>
        </DescriptionContainer>
      </MainContentContainer>
    </div>
  )
}
