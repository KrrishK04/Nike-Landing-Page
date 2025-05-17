import Button from "../components/button.jsx"
import {arrowRight} from "../assets/icons"
import {shoe8} from "../assets/images"
const SuperQuality = () => {
  return (
    <section className="flex flex-row justify-between items-center 
        gap-10 max-lg:flex-col w-full max-container">
          <div className="flex flex-col xl:w-2/5 w-full">
            <h1 className="font-poppins xl:text-[75px] lg:text-[65px] text-[55px] font-semibold z-10 break-words bg-white">
              <span className="whitespace-normal xl:whitespace-nowrap">We Provide You <span className="text-coral-red bg-white rounded-3xl">Super </span></span>
              <br />
              <span className="text-coral-red">Qualtiy </span>
              <span>Shoes </span>
            </h1>
            <p className="font-montserrat text-slate-500 mt-4 lg:max-w-xl">Step into a world where quality meets comfort in perfect harmony. Our premium footwear collection represents the pinnacle of shoe craftsmanship, featuring hand-selected materials, expert construction, and timeless designs that elevate any outfit. Unlike mass-produced alternatives, each pair is meticulously created with reinforced stitching, cushioned support, and durable soles that won't let you down. We're passionate about delivering shoes that not only look exceptional but provide all-day comfort and lasting value. From breathable, moisture-wicking interiors to slip-resistant outsoles, every detail is thoughtfully engineered for your satisfaction.</p>
            <p className="font-montserrat text-slate-500 lg:max-w-xl mt-7">Discover the difference that superior quality makes—your feet will thank you for years to come. Shop our collection today and experience footwear excellence that truly stands apart.</p>
            
            <div className="mt-7"><Button label="View Details"/></div>
            
          </div>
          {/* <div className="bg-card bg-cover rounded-[100px] w-[450px] h-[450px] relative">
            <img src={shoe8} alt="" className="absolute w-[120%] h-auto" />
          </div> */}
          <div className="relative w-full aspect-square max-w-xl max-md:my-[-70px] ">
            {/* Background div - smaller than the image */}
            <div className="absolute inset-[10%] bg-card bg-cover rounded-[100px] z-0"></div>
            
            {/* Image positioned to extend beyond background */}
            <img 
              src={shoe8} 
              alt="shoe img" 
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
        </div>
    </section>
  )
}

export default SuperQuality;
