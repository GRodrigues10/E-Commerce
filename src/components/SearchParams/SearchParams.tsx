'use client'
import React, { useEffect, useState } from 'react'
import Cards from '@/components/Cards/Cards'
import { Product } from '@/types/product'
import { ContainerSearch, ResultsSearch, SkeletonCardStyled } from '@/app/search/page.styled'


export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false) // começa como false

  const fetchProducts = (q: string) => {
    if (!q) return
    setLoading(true) // Skeleton aparece imediatamente
    fetch(`https://e-commerce-api-2u04.onrender.com/products?q=${q}`)
      .then(res => res.json())
      .then((data: Product[]) => {
        const filtered = data.filter(
          p => (p.name?.toLowerCase() ?? '').includes(q.toLowerCase())
        )
        setProducts(filtered)
      })
      .catch(console.error)
      .finally(() => setLoading(false)) // Skeleton some quando termina
  }

  // Detecta query na URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const q = urlParams.get('q') || ''
    if (q) {
      setQuery(q)
      fetchProducts(q)
    }
  }, [window.location.search])

  const skeletonCount = 6

  return (
    <ContainerSearch>
      <h1>Resultados para: &quot;{query}&quot;</h1>
      <ResultsSearch>
        {loading
          ? Array.from({ length: skeletonCount }).map((_, idx) => (
              <SkeletonCardStyled key={idx}>
                <div className="image" />
                <div className="text" />
                <div className="text-short" />
              </SkeletonCardStyled>
            ))
          : products.length > 0
          ? <Cards products={products} />
          : <p className='loading'>Nenhum produto encontrado! 😕</p>}
      </ResultsSearch>
    </ContainerSearch>
  )
}
