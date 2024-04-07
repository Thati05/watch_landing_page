

const FeatureRight = ({ imgURL, title, description }) => {
  return (
    <div className="mb-[80px]" >
      <div className="flex flex-1 flex-col justify-end items-end w-[380px]" >

        <img
          src={imgURL} alt={title}
          className=" w-[40px] h-[40px] object-contain"
        />

        <h4 className=" mt-1 text-[16px] font-poppins font-semibold">
          {title}
        </h4>

        <p className=" font-poppins text-[14px] font-light whitespace-normal text-right ">{description}</p>

      </div>



    </div>
  )
}

export default FeatureRight