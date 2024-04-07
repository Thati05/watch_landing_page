

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" flex-1 sm:w-[350px] 
    sm:min-w-[350px] w-full shadow-3xl px-10 
    py-16 mx-[10px] max-xl:mb-[20px]  ">

      <div className=" w-11 h-11 justify-center items-center
      " >
        <img src={imgURL} alt={label}
          width={24} height={24}
        />
      </div>
      <div>
        <h3 className=" text-text-blue font-poppins font-bold text-[25px]">{label}</h3>
        <p className="text-[12px] font-poppins font-light">{subtext}</p>
      </div>



    </div>
  )
}

export default ServiceCard