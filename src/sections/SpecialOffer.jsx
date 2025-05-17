import Button from "../components/button"
import {arrowRight}  from "../assets/icons"
import { offer } from "../assets/images"
const SpecialOffer = () => {
  return (
    <section className="flex flex-col xl:flex-row-reverse justify-center items-center max-md:mt-[-70px]
      ">
      <div className="flex flex-col justify-center items-start flex-1 ">
        <h3 className="font-poppins text-4xl font-semibold mt-10"> 
          <span className="text-coral-red">Special</span> Offer
        </h3>
        <p className="font-poppins text-slate-500 mt-4">
          <span className="mb-5 ">Looking to step up your shoe game? Treat yourself to our latest range of premium footwear, crafted from high-quality materials for unbeatable comfort and durability. 
            From trendsetting sneakers to polished boots and elegant heels, our collection has a style for every occasion.</span>
          <br />
          <span className="">Take advantage of this exclusive offer before it's gone. The sale ends Sunday at midnight, and to make your shopping experience even better, we’re offering free shipping on all orders over $75.
            Don't miss out on the opportunity to refresh your wardrobe with the season's must-have styles. Hurry—they won't stay in stock forever!</span>
        </p>
        <div className="flex flex-1 mt-10 gap-10">
          <Button
            label="Shop Now"
            iconURL={arrowRight}
          />
          <button className="font-poppins border-2 border-slate-300 px-5 py-4 rounded-full mt-5 z-10 bg-white
              hover:scale-110 transition-all duration-300 filter hover:brightness-200 hover:contrast-200 
              hover:border-slate-900">Learn More</button>
        </div>
      </div>

      <div className="z-50flex flex-1 justify-center items-center mt-10">
          <img src={offer} alt="" width={773} height={687}
          className="object-contain w-full" />
      </div>
      
    </section>
  )
}

export default SpecialOffer
