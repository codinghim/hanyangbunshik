import {useEffect, useState} from 'react'
import styles from './carousel.module.css'
import {SLIDES} from '../../Content.js'

export default function Carousel() {
  const {carouselImg, activeSlide, carouselContainer, slide, hiddenSlide} = styles
  const [slideIndex, setslideIndex] = useState(0)

    useEffect(() => {
        let i = slideIndex
        const slideInterval = setInterval(() => {
            if(i === (SLIDES.length-1)) {
                setslideIndex(0)
                i = 0
            }
            else {
                setslideIndex(slideIndex => slideIndex + 1)
            }
            i++
        }, 5000)

        return function cleanUp() {
            clearInterval(slideInterval)
        }
    },[slideIndex])

    // Whenever slide Index is changed show slide Index
    useEffect(() => {
        showSlide(slideIndex)
    },[slideIndex])

    const showSlide = (index) =>{
        //make visible slide to invisible
        const activeslides = document.getElementsByClassName(activeSlide)
        if(activeslides.length !== 0){
            let oldVisibleSlide = document.getElementsByClassName(activeSlide)[0]
            oldVisibleSlide.classList.remove(activeSlide)
            oldVisibleSlide.classList.add(hiddenSlide)
        }
        //show slide of an given index
        let newVisibleSlide = document.getElementsByClassName(`slide-${index}`)[0]

          newVisibleSlide.classList.remove(hiddenSlide)
          newVisibleSlide.classList.add(activeSlide)

        // console.log(`slide index: ${slideIndex}`)
    }

    return(
        <section className={carouselContainer}>
            {SLIDES.map((item, index) => {
                return (
                    <div key={index} className={`${[slide, hiddenSlide].join(' ')} slide-${index}`}>
                        <img className={carouselImg} src={item} alt="Carousel Image"/>
                    </div>
                )
            })}
        </section>
    )
}
