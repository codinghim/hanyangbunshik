import styles from './about.module.css'

export default function About () {
  const {about_section, about_header, story_container, about_text, about_text_english, } = styles
  return (
    <section id="About" className={about_section}>
      <h1 className={about_header}>Our Story</h1>
            <div className={story_container}>
                <div className={`${[about_text, about_text_english].join(' ')}`}>
                    <p>
                    For 22 years strong, <strong className="font-hanyang-blue">Hanyang Bunshik</strong> has successfully labeled itself
                    as the go-to place for authentic Korean Cuisine Street Food.
                    We take pride in our <strong className="font-hanyang-blue">24 hour</strong> availability to provide our customers with
                    an inexpensive, yet satisfying food experience. Whether it's to
                    sate those late night cravings or conveniently grab some food for to-go,
                    our wide variety of food items won't disappoint!
                    </p>
                </div>

                <div className={about_text}>
                    <p>
                    22년 전통을 이어온 <strong className="font-hanyang-green">한양분식</strong>이 새롭게 단장 했습니다!
                    1년 365일 연중무휴, 푸짐한 양과 깊이있는 맛을 정성으로 꾹꾹 담아 부담없는 가격에 전해드립니다.
                    아침, 점심, 저녁, 야식, 간식, <strong className="font-hanyang-green">24시</strong> 어느 시간때든 알맞은 음식이 준비되어 있으니
                    가볍고 편하게 오셔서 든든한 발걸음으로 돌아가세요!
                    </p>
                </div>
            </div>
    </section>
  )
}
