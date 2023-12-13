import React from 'react'
import { Container, ContainerLogin, H1, H2, Label, Input, LoginButton, P } from './styles'
import ImgMusculacao from '../../assets/musculacao.jpg'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

function Register(){
    const navigate = useNavigate()

    const schema = yup.object({
    email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 digitos'),
    confirmPassword: yup.string()
      .required('A senha é obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  }).required()
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <ContainerLogin>
                <div>
                    <H1>Crie sua conta agora</H1>
                    <H2>Bem vindo, você está na página de Registro</H2>

                    <form noValidate onSubmit={handleSubmit(onSubmit)} style={{marginLeft: 60}}>
                        <Label>Email</Label>
                        <Input type='email' {...register("email")} />
                        <p style={{marginTop: 5, color: '#EA454C'}}>{errors.email?.message}</p>

                        <Label style={{marginTop: 10}}>Senha</Label>
                        <Input type='password' {...register("password")} />
                        <p style={{marginTop: 5, color: '#EA454C'}}>{errors.password?.message}</p>

                        <Label style={{marginTop: 10}}>Confirmar senha</Label>
                        <Input type='password' {...register("confirmPassword")} />
                        <p style={{marginTop: 5, color: '#EA454C'}}>{errors.confirmPassword?.message}</p>

                        <LoginButton type="submit">Entrar</LoginButton>
                    </form>
                    <P>Já tem conta? <button onClick={() => navigate('/login')}>Logar-se aqui</button></P>
                </div>
            </ContainerLogin>

            <img alt='imagem-musculação' src={ImgMusculacao}/>
        </Container>
    )
        
}

export default Register