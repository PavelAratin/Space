import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = ({mobileMenuToggle}) => {
  const {pathname} = useRouter();
  const burgerClickHandler =()=>{
    mobileMenuToggle()
    console.log('click');
  }
  return (
    <header className="header">
      <div className="header__container">
        <Image src='/logo.svg' width={48} height={48} alt='logo'></Image>
        <nav className="desctop-menu">
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link className={pathname === '/' ? 'nav-list__link active-animation active':'nav-list__link active-animation'} href="/">
                <span className="nav-list__number-page">00</span>
                Home
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className={pathname === '/destination' ? 'nav-list__link active-animation active':'nav-list__link active-animation'} href="/destination">
                <span className="nav-list__number-page">01</span>
                Destination
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className={pathname === '/crew' ? 'nav-list__link active-animation active':'nav-list__link active-animation'} href="/crew">
                <span className="nav-list__number-page">02</span>
                Crew
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className={pathname === '/technology' ? 'nav-list__link active-animation active':'nav-list__link active-animation'} href="/technology">
                <span className="nav-list__number-page">03</span>
                Technology
              </Link>
            </li>
          </ul>
        </nav>
        <button
        onClick={burgerClickHandler}
        className="burger">
          <span className="burger__line burger__line--top"></span>
          <span className="burger__line burger__line--middle"></span>
          <span className="burger__line burger__line--bottom"></span>
        </button>
      </div>
    </header>
  )
}


export default Header;