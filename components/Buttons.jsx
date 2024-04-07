//creating a component that can be reused throughout the code

const Buttons = ({ label }) => {
  return (
    <button className=" mt-10 font-poppins font-bold bg-btn-blue text-white 
    px-7 py-2 text-[14px] rounded-[15px] items-center border-btn-blue">
      {label}
    </button>
  )
};

export default Buttons