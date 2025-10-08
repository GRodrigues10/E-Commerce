'use client'
import React, { useEffect, useState } from 'react'
import Cards from '@/components/Cards/Cards'
import { SkeletonCard } from '@/components/SkeletonCard/SkeletonCard'
import { Product } from '@/types/product'
import { ContainerSearch, ResultsSearch } from '@/app/search/page.styled'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = (q: string) => {
    if (!q) return
    setLoading(true)
    fetch(`http://localhost:4000/products?q=${q}`)
      .then(res => res.json())
      .then((data: Product[]) => {
        const filtered = data.filter(
          p => (p.name?.toLowerCase() ?? '').includes(q.toLowerCase())
        )
        setProducts(filtered)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
   
    const interval = setInterval(() => {
      const urlParams = new URLSearchParams(window.location.search)
      const q = urlParams.get('q') || ''
      if (q !== query) {
        setQuery(q)
        fetchProducts(q)
      }
    }, 100) 

    return () => clearInterval(interval)
  }, [query])

  const skeletonCount = 6

  return (
    <ContainerSearch>
      <h1>Resultados para: &quot;{query}&quot;</h1>
      <ResultsSearch>
        {loading
          ? Array.from({ length: skeletonCount }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          : products.length > 0
          ? <Cards products={products} />
          : <p className='loading'>Nenhum produto encontrado! 😕</p>}
      </ResultsSearch>
    </ContainerSearch>
  )
}
