import React from 'react'
import type { SlideType } from '@/pages/Onboarding'

export type SlideProps = {
  slide: SlideType
  index: number
  currentSlide: number
}

const Slide: React.FC<SlideProps> = ({
  slide,
  currentSlide,
  index,
}: SlideProps) => {
  return (
    <div
      className={`slide ${
        currentSlide === index ? 'active' : 'inactive'
      } flex flex-col justify-center items-center pb-6 mt-16`}
    >
      <img className="" src={slide.image} />
      <h3 className="mt-10 text-black text-[22px] leading-8 font-extrabold text-center">
        {slide.title}
      </h3>
      <p className="mt-5 text-gray-25 text-base leading-5 text-center">
        {slide.subtitle}
      </p>
    </div>
  )
}

export default Slide
