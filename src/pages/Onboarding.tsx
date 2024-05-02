import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Carousel from '@/components/UI/Carousel/CarouselContainer'
import Slide from '@/components/UI/Carousel/Slide'
import OnboardingImg1 from '@/assets/images/onboarding1.png'
import OnboardingImg2 from '@/assets/images/onboarding2.png'
import OnboardingImg3 from '@/assets/images/onboarding3.png'

export type SlideType = {
  id: number
  image: any
  title: string
  subtitle: string
}

const slides: Array<SlideType> = [
  {
    id: 1,
    image: OnboardingImg1,
    title: 'Simplifying your Invoicing Process Today!',
    subtitle:
      'Effortlessly create professional invoices with our easy-to-use app!',
  },
  {
    id: 2,
    image: OnboardingImg2,
    title: 'Get started and Streamline your Invoicing Process',
    subtitle: 'Effortlessly Make Requests, Track Progress, and Stay Updated',
  },
  {
    id: 3,
    image: OnboardingImg3,
    title: 'Sign up now and start Creating Invoices in Minutes',
    subtitle:
      'Effortlessly create professional invoices with our easy-to-use app!',
  },
]

const Onboarding: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideRows = slides.map((slide: any, index: number) => {
    return (
      <Slide
        key={index}
        slide={slide}
        index={index}
        currentSlide={currentSlide}
      />
    )
  })

  return (
    <>
      <Carousel
        slides={slideRows}
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
      />
      <div className="mt-4">
        <Link
          to={`/register`}
          className="bg-primary-0 text-white text-center rounded-[100px] h-[56px] w-full block py-[15px]"
        >
          Create account
        </Link>
        <Link
          to={`/login`}
          className="bg-white text-primary-0 border-primary-0 border-solid border text-center rounded-[100px] h-[56px] w-full block py-[15px] mt-2"
        >
          Already have account
        </Link>
      </div>
    </>
  )
}

export default Onboarding
