import { Trash, Trash2, Undo2 } from 'lucide-react'
import React from 'react'
import { StylesButton } from './Button.styled'

function Button() {
  return (
    <StylesButton><span><Trash2/></span>Esvaziar Carrinho</StylesButton>
  )
}

export default Button