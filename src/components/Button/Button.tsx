import {Trash2} from 'lucide-react'
import React from 'react'
import { StylesButton } from './Button.styled'
import { useCart } from '@/context/context'

function Button() {
  const {removeAll} = useCart();
  return (
    <StylesButton><span><Trash2 onClick={removeAll}/></span>Esvaziar Carrinho</StylesButton>
  )
}

export default Button