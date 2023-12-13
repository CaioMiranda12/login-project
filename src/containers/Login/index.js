import React from 'react'
import { Container, ContainerLogin, H1, H2, Label, Input, LoginButton, P } from './styles'
import ImgMusculacao from '../../assets/musculacao.jpg'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

function Login(){
    const navigate = useNavigate()

    const schema = yup.object({
        email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
        password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 digitos')
      }).required()

      const {
        register,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })


    return (
        <Container>
            <ContainerLogin>
                <div>
                    <H1>Seja bem vindo</H1>
                    <H2>Bem vindo, você está na página de Login</H2>

                    <Label>Email</Label>
                        <Input type='email' {...register("email")} />
                        <p style={{marginTop: 5, color: '#EA454C'}}>{errors.email?.message}</p>

                        <Label style={{marginTop: 10}}>Senha</Label>
                        <Input type='password' {...register("password")} />
                        <p style={{marginTop: 5, color: '#EA454C'}}>{errors.password?.message}</p>

                    <LoginButton type="submit">Entrar</LoginButton>
                    <P>Não tem conta? <button onClick={() => navigate('/register')} >Cadastre-se aqui</button></P>
                </div>
            </ContainerLogin>

            <img alt='imagem-musculação' src={ImgMusculacao}/>
        </Container>
    )
        
}

export default Login