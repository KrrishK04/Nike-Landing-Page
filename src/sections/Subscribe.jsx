import Button from "../components/button";
import {useState} from "react";
const Subscribe = () => {
  const [borderColor, setBorderColor] = useState(false);
  return (
    <section className="max-container md:h-[350px] flex max-lg:flex-col gap-10 items-center justify-between">
      <h3 className="text-4xl font-semibold text-center max-lg:text-3xl font-poppins w-full">
        Sign up for our 
        <span className="text-coral-red"> newsletter</span> to get the latest <span className="text-coral-red">updates</span>
      </h3>
      <div className="flex flex-row w-4/5 justify-between h-16  items-center border-2 rounded-full hover:border-coral-red border-gray-300">
        <input
          type="text"
          placeholder="Enter your email"
          className="mx-2 input"
          onClick={() => setBorderColor(true)}
          onBlur={() => setBorderColor(false)}
        />
        <div className="mx-2 mb-5"> <Button label="Sign up"/></div>
      </div>
    </section>
  )
}

export default Subscribe
