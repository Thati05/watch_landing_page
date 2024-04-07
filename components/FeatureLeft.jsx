

const FeatureLeft = ({ imgURL, title, description }) => {
  return (
    <div className="mb-[80px]" >
      <div className="flex flex-1 flex-col justify-start items-start w-[380px]" >

        <img
          src={imgURL} alt={title}
          className=" w-[40px] h-[40px] object-contain"
        />

        <h4 className=" text-[16px] mt-1 font-poppins font-semibold">
          {title}
        </h4>
        <p className=" font-poppins text-[14px] font-light  whitespace-normal">{description}</p>

      </div>



    </div>
  )
}

export default FeatureLeft