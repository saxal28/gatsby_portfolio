// import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from "gatsby";
import React, { useState, useRef, useEffect } from "react"
import Swiper from "react-id-swiper"
import Next from "../../svg/next.svg";
import Previous from "../../svg/previous.svg";

const projects = [
  {
    title: "KC HALL",
    subtitle: "Business Website",
    imgUrl: "/wedding.jpg",
    url: "/projects/kchall",
  },
  {
    title: "Recipax",
    subtitle: "Web Application",
    imgUrl: "/recipax.jpg",
    url: "/projects/recipax",
  },
  {
    title: "Perfect Blend",
    subtitle: "React Native / Ipad Application",
    imgUrl: "/coffee_shop.png",
    url: "/projects/perfect-blend",
  },
  {
    title: "Saxa Pokedex",
    subtitle: "Android Application",
    imgUrl: "/saxa_pokedex.png",
    url: "/projects/saxa-pokedex",
  },
  {
    title: "Your next project?",
    subtitle: "Freelance Work",
    imgUrl: "/sparkler.jpeg",
    url: "#",
  },
]

export const ProjectSlider = props => {
  const [swiper, setSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const ref = useRef(null)

  useEffect(() => {
    setSwiper(ref.current.swiper)
  }, [])

  const params = {
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 300,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1441: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        noSwiping: false
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        noSwiping: false
      },
    },
    ref
  }

  const goNext = () => {
    if (swiper !== null) {
      if (activeIndex === projects.length - 1) {
        return
      }
      swiper.slideNext()
      setActiveIndex(activeIndex + 1)
    }
  }

  const goPrev = () => {
    if (swiper !== null) {
      if (activeIndex === 0) {
        return
      }
      swiper.slidePrev()
      setActiveIndex(activeIndex - 1)
    }
  }

  const activeClass = index =>
    index == activeIndex ? "project-card__active" : ""

    const disabledPreviousClass = activeIndex === 0 ? "disabled" : ""
    const disabledNextClass = activeIndex === projects.length - 1 ? "disabled" : ""


  return (
    <div className="project-slider">
      <Swiper {...params}>
        {projects.map(({ title, subtitle, imgUrl, url }, index) => (
          <Link key={url} className="no-style" href={url}>
            <div
              className={`project-card ${activeClass(index)}`}
              style={{ background: `url(${imgUrl})` }}
            >
              <div className="project-card__container">
                <div className="line-break" />
                <div className="project-card__subtitle">{subtitle}</div>
                <div className="project-card__title">{title}</div>
              </div>
            </div>
          </Link>
        ))}
      </Swiper>
      <div className="project-slider__navigation">
        <div className={`project-slider__navigation-button ${disabledPreviousClass}`} onClick={goPrev}>
            <Previous/>
        </div>
        <div className="project-slider__navigation-spacer"/>
        <div className={`project-slider__navigation-button ${disabledNextClass}`} onClick={goNext}>
            <Next/>
        </div>
      </div>
    </div>
  )
}
