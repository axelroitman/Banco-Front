import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import GlobalContainer from '../components/GlobalContainer'
import Header from '../components/Header'
import Text from '../components/Text'
import Details from '../components/Details'

const CBU = (data) => {
  console.log(data.history.location.state.account) //Para agarrar el número de la cuenta
  return (
    <GlobalContainer id='globalContainer'>
      <Header id='header' />
      <Content id='content' direction='column'>
        <Text> Cuentas {'>>'} CBU </Text>
        <Details>
          <h4> Tipo de cuenta: {data.accountNumber} </h4>
          <h4> Número de cuenta: {data.accountNumber} </h4>
          <h4> CBU: {data.cbu} </h4>
          <h4> Titular: {data.name}</h4>
          <h4> Documento: {data.dni} </h4>
          <h4> CUIT/CUIL/CDI: {data.cuitCuilCdi} </h4>
        </Details>
      </Content>
      <Footer id='footer' />
    </GlobalContainer>
  )
}

export default CBU
