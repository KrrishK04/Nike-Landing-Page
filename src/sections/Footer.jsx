import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-row justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
          <a href="/"> <img src={footerLogo} alt="" width={150} height={46} /></a>
          <p className="font-montserrat mt-6 text-white-400 sm:max-w-sm w-3/5">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-4">
            {socialMedia.map((item) => {
              return(
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white opacity-50 hover:opacity-100 cursor-pointer" 
                key={item.id}>
                  <img src={item.src} alt={item.alt} />
                </div>
              )
            })}
          </div>
        </div>
        
          <div className="flex flex-1 flex-row justify-betweem lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((item) => {
              return(
                <div className="flex flex-col items-start gap-5" key={item.id}>
                  <h3 className="font-montserrat text-white font-semibold text-lg">{item.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {item.links.map((link) => {
                      return(
                        <li key={link.id}><a href="/" className="text-white opacity-50 hover:opacity-100">{link.name}</a></li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
      </div>
      <div className="flex justify-between items-center mt-10 text-white-400">
          <div className="flex flex-1 justify-start items-center 
            gap-2 font-montserrat cursor-pointer">
              <img src={copyrightSign} alt=""
              width={20} height={20}
              className="rounded-full m-0" />
              <p>Copyright. All rights reserved</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
