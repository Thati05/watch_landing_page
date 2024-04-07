import { reviews } from "../constants"
import ReviewCards from "../components/ReviewCards"


const CustomerReview = () => {
  return (
    <section className="max-container ">

      <div className=" flex flex-1  flex-col justify-center items-center max-md:justify-end max-md:items-start ">
        <h3 className=" font-poppins text-4xl font-semibold">What Our <span className=" text-text-blue">Customers</span> Say?</h3>
        <p className=" flex  font-poppins font-light text-[16px] text-center w-[400px] mt-[10px] max-md:text-start  ">Discover why our customers love Nako Watches. Read their testimonials.</p>
      </div>

      <div className=" flex flex-1 flex-row gap-16 items-center justify-center mt-[50px] max-md:flex-wrap">
        {reviews.map((review) => (
          <ReviewCards key={review.imgURL}{...review} />
        ))}


      </div>




    </section>
  )
}

export default CustomerReview