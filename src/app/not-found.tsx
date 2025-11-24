'use client'
import React from 'react'
import { NotFoundContainer } from './not-found.styled'
import Link from 'next/link'

function notFound() {
  return (
    <NotFoundContainer>
        <h1>Página não encontrada!</h1>
        <Link href='/'><button>Voltar</button></Link>
    </NotFoundContainer>
  )
}

export default notFound