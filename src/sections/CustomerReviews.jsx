import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-semibold font-poppins text-4xl text-center">
        What Our <span className="text-coral-red">Customers </span> Say
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-col xl:flex-row justify-evenly items-center gap-12 py-12">
        {reviews.map( (review, index) => {
          return(
            <ReviewCard
              key={index}
              {...review}
            />
          )
        })}
      </div>
    </section >
  )
}

export default CustomerReviews
