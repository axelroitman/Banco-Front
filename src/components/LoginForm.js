import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { withRouter } from 'react-router-dom'
import ErrorMsg from './ErrorMsg'
import { userService } from '../services/userService'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 100%;

`

const SubmitButton = styled.input`
background-color: #1877f2;
border: none;
border-radius: 6px;
font-size: 20px;
color: #fff;
line-height: 48px;
padding: 0 16px;
width: 80%;
margin-top: 10px;

`

const LoginForm = props => {
  const { register, handleSubmit, errors } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setIsLoading(true)
    userService.login(data)
      .then(
        response => {
          const { from } = props.location.state || { from: { pathname: response } }
          props.history.push(from)
        }
      )
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input name='username' type='text' placeholder='Usuario' ref={register({ required: true, minLength: 3, pattern: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/ })} />
      {errors.username && <ErrorMsg> Usuario invalido </ErrorMsg>}
      <Input name='password' type='password' placeholder='Contraseña' ref={register({ required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })} />
      {errors.password && <ErrorMsg> Contraseña invalida </ErrorMsg>}
      <SubmitButton
        type='submit'
        value='Ingresar'
        disabled={isLoading}
      />
    </Form>
  )
}
export default withRouter(LoginForm)
