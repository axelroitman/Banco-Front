import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import GlobalContainer from '../components/GlobalContainer'
import Header from '../components/Header'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 20vw;
  height: auto;
  padding: 10px;
  background-color: #3da1e794;
  
`
const Text = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 20vw;
  height: auto;
  padding: 10px;
  background-color: black;
  color: white;  
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`

const AdminHome = () => {
  const history = useHistory()
  const registerClient = () => history.push('/registerClient')
  const searchClient = () => history.push('/searchClient')
  const createService = () => history.push('/createService')

  return (
    <GlobalContainer id='globalContainer'>
      <Header id='header' />
      <Content id='content' url="background.png" direction='column'>
        <Wrapper>
          <ButtonBox onClick={registerClient}>
            <img src='https://www.flaticon.com/svg/static/icons/svg/554/554795.svg' alt='Employees' height='128' width='128' />
            <Text> Registrar Cliente </Text>
          </ButtonBox>
          <ButtonBox onClick={searchClient}>
            <img src='https://www.flaticon.es/svg/static/icons/svg/1935/1935840.svg' alt='Magnifying glass' height='128' width='128' />
            <Text> Buscar Cliente </Text>
          </ButtonBox>
          <ButtonBox onClick={createService}>
            <img src='https://www.flaticon.es/svg/static/icons/svg/1935/1935353.svg' alt='Services' height='128' width='128' />
            <Text> Crear Servicio </Text>
          </ButtonBox>
        </Wrapper>
      </Content>
      <Footer id='footer' />
    </GlobalContainer>
  )
}

export default AdminHome
