import Link from "next/link";
import { useRouter } from "next/router";
const Mobilemenu = ({ mobileMenuActive,mobileMenuToggle }) => {
  const { pathname } = useRouter();
  const closeMobileMenuHandler =()=>{
    mobileMenuToggle()
    console.log('closeMobileMenuHandler');
  }
  return (
    <nav className={`mobile-menu ${mobileMenuActive ? 'active' : ''}`}>
      <button
        onClick={closeMobileMenuHandler}
        className="close">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group">
            <rect id="Rectangle Copy" x="2.5752" y="0.954102" width="24" height="3" transform="rotate(45 2.5752 0.954102)" fill="#D0D6F9" />
            <rect id="Rectangle Copy 3" x="0.454102" y="17.9246" width="24" height="3" transform="rotate(-45 0.454102 17.9246)" fill="#D0D6F9" />
          </g>
        </svg>
      </button>
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link className={pathname === '/' ? 'nav-list__link active-animation active' : 'nav-list__link active-animation'} href="/">
            <span className="nav-list__number-page">00</span>
            Home
          </Link>
        </li>
        <li className="nav-list__item">
          <Link className={pathname === '/destination' ? 'nav-list__link active-animation active' : 'nav-list__link active-animation'} href="/destination">
            <span className="nav-list__number-page">01</span>
            Destination
          </Link>
        </li>
        <li className="nav-list__item">
          <Link className={pathname === '/crew' ? 'nav-list__link active-animation active' : 'nav-list__link active-animation'} href="/crew">
            <span className="nav-list__number-page">02</span>
            Crew
          </Link>
        </li>
        <li className="nav-list__item">
          <Link className={pathname === '/technology' ? 'nav-list__link active-animation active' : 'nav-list__link active-animation'} href="/technology">
            <span className="nav-list__number-page">03</span>
            Technology
          </Link>
        </li>
      </ul>
    </nav>
  )
}


export default Mobilemenu;