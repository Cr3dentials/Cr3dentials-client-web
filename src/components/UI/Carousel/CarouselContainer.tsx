import React, { ReactNode } from 'react'
import Carousel from 'react-material-ui-carousel'
import './CarouselContainer.css'

export type CarouselContainerProps = {
  slides: Array<ReactNode>
  setCurrentSlide: any
  currentSlide: number
}

const CarouselContainer: React.FC<CarouselContainerProps> = (
  props: CarouselContainerProps,
) => {
  const { slides, setCurrentSlide } = props
  return (
    <Carousel
      className="carousel"
      navButtonsAlwaysInvisible={false}
      // IndicatorIcon={<Home />} // Previous Example
      indicatorIconButtonProps={{
        style: {
          margin: '0px 2px', // 1
          color: '#A8AEBF', // 3
          height: '10px',
          width: '10px',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: '#4B56E3', // 2
          width: '26px',
          color: '#4B56E3',
          height: '10px',
          borderRadius: '10px',
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: '50px', // 5
          textAlign: 'center', // 4
        },
      }}
      interval={5000}
      onChange={() => setCurrentSlide}
    >
      {slides}
    </Carousel>
  )
}

export default CarouselContainer
