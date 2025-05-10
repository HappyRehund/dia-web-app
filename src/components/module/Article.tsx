import CarouselArticle from '@/components/CarouselArticle'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import { ARTICLE } from '@/lib/helpers/article'
import React from 'react'

function Article() {
  return (
    <Container>
        <Heading className='font-semibold mx-2'>Daily Article</Heading>
        <CarouselArticle article={ARTICLE} />
    </Container>
  )
}

export default Article