'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ContainerSearch, ResultsSearch } from './page.styled'
import Cards from '@/components/Cards/Cards'
import { SkeletonCard } from '@/components/SkeletonCard/SkeletonCard'
import { Product } from '@/types/product'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchResults() {
      setLoading(true)
      try {
        const res = await fetch(`http://localhost:4000/products?q=${query}`)
        const data: Product[] = await res.json()
        const filtered = data.filter(
          (p) => (p.name?.toLowerCase() ?? '').includes(query.toLowerCase())
        )
        setProducts(filtered)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (query) fetchResults()
  }, [query])


  const skeletonCount = 6

  return (
    <ContainerSearch>
      <h1>Resultados para: "{query}"</h1>
      <ResultsSearch>
        {loading ? (
          
          Array.from({ length: skeletonCount }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))
        ) : products.length > 0 ? (
          <Cards products={products} />
        ) : (
          <p className='loading'>Nenhum produto encontrado! 😕</p>
        )}
      </ResultsSearch>
    </ContainerSearch>
  )
}
