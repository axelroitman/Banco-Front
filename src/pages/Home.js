import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import GlobalContainer from '../components/GlobalContainer'
import Header from '../components/Header'
import AccountTable from '../components/AccountTable'
import Text from '../components/Text'
import DebitCard from '../components/DebitCard'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const PayButton = styled.button`
  
  margin-top: 10px;
  margin-left: 20%;
  margin-right: auto;
  background-color: #000;
  border: none;
  border-radius: 2px;
  font-size: 20px;
  color: #fff;
  width: auto;
  line-height: 48px;
  :active, :hover
  {
    background: #646464;
  }

`

const OtherButtons = styled.button`
  
  margin-top: 10px;
  margin-left: 20px;
  margin-right: auto;
  background-color: #000;
  border: none;
  border-radius: 2px;
  font-size: 20px;
  color: #fff;
  width: auto;
  line-height: 48px;
  :active, :hover
  {
    background: #646464;
  }

`

const ButtonsContainer = styled.div`
  height: 70px;
`

const Home = () => {
  const history = useHistory()
  const navigateToServicePay = () => history.push('/servicePay')
  const navigateToTransfer = () => history.push('/transfer')
  const createService = () => history.push('/createService')

  return (
    <GlobalContainer id='globalContainer'>
      <Header id='header' />
      <Content id='content' url="background.png" direction='column'>
        <Text> Acciones </Text>
        <ButtonsContainer>
        <PayButton onClick={navigateToServicePay} type="button"> Pagar servicios </PayButton> 
        <OtherButtons onClick={navigateToTransfer} type="button"> Realizar transferencia </OtherButtons>
        {sessionStorage.getItem('userType') === 'LEGAL' && <OtherButtons onClick={createService} type="button"> Crear servicio </OtherButtons>}
        </ButtonsContainer>
        <Text> Mis Cuentas </Text>
        <AccountTable accountType={'SAVINGS'} />
        <AccountTable accountType={'CHECKING'} />
        {(sessionStorage.getItem('userType') === 'PHYSICAL') &&
          <React.Fragment>
            <Text> Tarjeta de débito </Text>
            <DebitCard/>
          </React.Fragment>
        }
      </Content>
      <Footer id='footer' />
    </GlobalContainer>
  )
}

export default Home
