import styles from './popup.module.css'
import {useEffect} from 'react'

export default function Popup () {
  const {popup_background, popup_hidden, popup_container, popup_title, popup_description, popup_close} = styles

  useEffect(() => {
    const openPopup = () => {
      document.getElementById("popup").classList = popup_background
    }
    //remove the line below to disable popup on homepage
    openPopup()
  },[])
  const closePopup = () => {
        //close popup
        const popup = document.getElementById('popup')
        popup.classList.add(popup_hidden)
    }

    return(
        <div className={`${[popup_background, popup_hidden].join(' ')}`} id="popup">
            <div className={popup_container}>
                <p className={popup_title}>
                    **COVID-19 UPDATE**
                </p>
                <p className={popup_description}>
                    <strong>Dear Loyal Customers,</strong>
                    <br/>
                    Due to the pandemic, our current hours are from 8:00AM - 11:30PM everyday of the week. We apologize for the inconvenience.
                    <br/>
                    <br/>
                    코로나19의 심각성으로 인해, 당분간 영업시간을 매일 8:00AM - 11:30PM 으로 변경합니다. 불편을 끼쳐드려 죄송합니다.
                </p>
                <span className={popup_close} onClick={closePopup}>&times;</span>
            </div>
        </div>
    )
}
