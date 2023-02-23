import React from 'react'
import {ButtonContainer} from './styles'
import {IButtonProps} from './types'
const Button = ({title, onClick }:IButtonProps)=> {
  return (
 
 <ButtonContainer disabled  onClick={onClick}>{title}</ButtonContainer>  )
}
export {Button}
