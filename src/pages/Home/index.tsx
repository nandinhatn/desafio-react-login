import React from 'react'
import {Container, ContainerInner, Title} from './style'
import { Button } from '../../components/Button'
import { InputTxt } from '../../components/Input'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {defaultValues, IFormLogin} from './types'
  
const schema = yup.object({
  nome: yup.string().email(' o email invalido').required('campo obrigatório'),
  senha: yup.string().min(6, 'no minimo 6 caracteres').required('campo obrigatório'),
}).required();


const Home =() => {
  const { control, handleSubmit, watch, formState: { errors , isValid} } = useForm(
    {resolver: yupResolver(schema),
    mode :'onBlur',
    defaultValues,
    reValidateMode: 'onChange'}
  );

  
    console.log('isvalid', isValid)
  return (<>
  
<Container>
<ContainerInner><Title> Login</Title>
<form>
<InputTxt name='nome' placeholder="Email" control ={control} errorMessage={errors.nome?.message}></InputTxt>
<InputTxt  name='senha' placeholder='Senha' control={control}  errorMessage={errors.senha?.message}></InputTxt>
<Button title='Entrar'  />
</form>
</ContainerInner>
</Container>
  </>
   
  )
}
export {Home}
