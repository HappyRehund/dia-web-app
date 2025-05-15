import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import CarouselDoctor from '../CarouselDoctor'
import { DOCTOR } from '@/lib/helpers/doctor'

function Doctors() {
  return (
    <Container className='py-24'>
        <Heading className='font-semibold mx-2'>Our Experienced Medical Professional</Heading>
        <CarouselDoctor doctor={DOCTOR} />
    </Container>
  )
}

export default Doctors