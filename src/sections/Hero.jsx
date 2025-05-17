import Button from "../components/button"
import {arrowRight} from "../assets/icons"
import {statistics, shoes} from "../constants"
import {bigShoe1, thumbnailBackground} from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import {useState} from "react"

const Hero = () => {
  const [cBigShoe, update] = useState(bigShoe1)
  function changeShoe(event){
    update(event)
  }

  return (
    <section id="home" className="w-full flex flex-1 flex-col  lg:flex-row justify-center items-center min-h-screen max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start
      w-full max-xl:padding-x pt-28"> 
        <p className="font-popins text-lg font-light text-coral-red ">Our Summer Collection</p>
        <h1 className="tracking-wider pt-5 font-poppins z-10 font-semibold md:text-[65px]
        lg:text-[70px] xl:text-[80px] text-[65px] lg:leading-[1.1] leading-[1] ">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap whitespace-normal xl:bg-white">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block whitespace-nowrap relative pr-10 ">Nike</span> Shoes
        </h1>
        <div className="text-slate-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          <p>Discover stylish nike arrivals,</p>
          <p>quality, comfort and innovation for your active life</p>
        </div>
        <Button label="Show now" iconURL={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full py-5  gap-16">
          {statistics.map( (stat, index) => {
            return(
              <div key={stat.label} className="font-palanquin">
                <p className="font-bold text-[40px]">{stat.value}</p>
                <p className="font-light text-slate-500 text-[20px] leading-7">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex flex-col gap-10 flex-1 justify-center items-center xl:min-h-screen bg-primary bg-hero bg-cover" >
        <div className="w-[300px] mt-6 sm:w-[500px] md:w-[610px] h-[250px] sm:h-[400px] md:h-[500px] flex justify-center items-center z-10">
          <img src={cBigShoe} alt="shoe"
            width={500}
            height={400}
            className="object-contain relative z-10"
          />
        </div>
        
        <div className="left-[10%]">
          <div className="flex flex-1 flex-row w-full md:gap-10 gap-6  items-stretch justify-center">
            {shoes.map( (shoe) => {
              return(
                  <ShoeCard 
                  key={shoe.bigShoe}
                   imgURL={shoe.bigShoe} thumbnail={shoe.thumbnail}
                  changeBigShoeImg={changeShoe}
                  bigShoeImg={cBigShoe}
                  />
              
                
              )
            })}
          </div>
        </div>
      </div>
    </section>
  
  )
}

export default Hero;
