import { headerLogo } from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks} from "../constants"
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
          <img src={headerLogo} alt="HeaderLogo" />
          </a> 
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map( (item) => {
              return (
                <li key={item.label}> 
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray" > {item.label}</a>
                </li>
              )
            })}
          </ul>
          <img src={hamburger} alt="hamburger" className="hidden max-lg:block" width={25} height={25} />
        </nav>
    </header>
  )
}

export default Nav
