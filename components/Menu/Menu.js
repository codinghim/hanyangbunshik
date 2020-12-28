import styles from './menu.module.css'

export default function Menu() {
  const {menu_section, menu_container, menu_category, menu_category_main, menu_category_side, availability_container, availability_header, availability_text, availability_text_hours} = styles
  return(
    <section id="Menu" className={menu_section}>
         <div className={menu_container}>
            <a className={`${[menu_category, menu_category_main].join(' ')}`} target="_blank" href="/menu/menu1.pdf">Main Menu</a>
            <a className={`${[menu_category, menu_category_side].join(' ')}`} target="_blank" href="/menu/menu2.pdf">Side Menu</a>
        </div>
        <div className={availability_container}>
            <h2 className={availability_header}>Open Hours</h2>
            <p className={`${[availability_text, availability_text_hours].join(' ')}`}><strong className="font-hanyang-green">24</strong> / <strong className="font-hanyang-blue">7</strong></p>
            <h2 className={availability_header}>Availability</h2>
            <p className={availability_text}>Dine-In, Take-out</p>
            <p className={availability_text}>Parking</p>
        </div>
    </section>
)
}
