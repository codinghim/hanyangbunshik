import {useEffect, useState} from 'react'
import styles from './carousel.module.css'
import Image from 'next/image'

const slides = [
    "/images/hanyang_outside.JPG",
    "/images/interior1.JPG",
    "/images/food1.JPG",
    "/images/interior2.JPG",
    "/images/hanyang_inside.JPG",
    "/images/food2.JPG",
  ]

// export async function getStaticProps() {
//     // Get external data from the file system, API, DB, etc.
//     const slides = [
//         "/images/hanyang_outside.JPG",
//         "/images/interior1.JPG",
//         "/images/food1.JPG",
//         "/images/interior2.JPG",
//         "/images/hanyang_inside.JPG",
//         "/images/food2.JPG",
//       ]

//     return {
//       props: slides
//     }
//   }

export default function Carousel() {
  const {carouselImg, activeSlide, carouselContainer, slide, hiddenSlide} = styles
  const [slideIndex, setslideIndex] = useState(0)

    useEffect(() => {
        console.log(window.innerHeight)
        let i = slideIndex
        const slideInterval = setInterval(() => {
            if(i === (slides.length-1)) {
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
            {slides.map((item, index) => {
                return (
                    <div key={index} className={`${[slide, hiddenSlide].join(' ')} slide-${index}`}>
                        <img className={carouselImg} src={item} alt="Carousel Image"/>
                    </div>
                )
            })}
        </section>
    )
}
