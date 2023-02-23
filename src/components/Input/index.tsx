import React from 'react'
import {InputText,parError, Container} from "./styles"
import {IIInputProps,} from "./types"
import {Controller} from 'react-hook-form'


const InputTxt = ({control, errorMessage, name,...rest}:IIInputProps) => {
  console.log('tem erro' , errorMessage)
  return (<>
  <Container>
  <Controller
  control={control}
  name={name}
  render={({field: {onChange, onBlur, value,ref}})=> <InputText {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref}/>}
   />

 

  <>  {errorMessage? <p> {errorMessage}</p>:null}</>
  </Container>
 </>
  )
}
export {InputTxt}
