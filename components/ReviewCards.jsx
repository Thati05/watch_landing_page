import { star } from "../assets/icons"

const ReviewCards = ({ imgURL, review }) => {
  return (
    <div className=' flex flex-1 flex-col justify-center items-center'>
      <img src={imgURL}
        width={100}

      />
      <div className=" flex flex-1 flex-row justify-center">

        <img
          width={15}
          src={star} />
        <p className=" font-poppins my-[8px]">4.5</p>
      </div>
      <p className=" font-poppins font-light text-[14p] text-center w-[400px] ">"{review}"</p>

    </div>
  )
}

export default ReviewCards