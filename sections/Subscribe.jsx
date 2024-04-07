


const Subscribe = () => {

  const enterKey = (event) => {
    if (event.key === 'Enter') {
      userInput();
    }
  };

  const userInput = () => {
    const userEmail = document.querySelector('.js-input');

    let email = userEmail.value.trim();// the function trim remove any whitespace the user creates

    // Regual expression for email validation 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      alert(`Submitted: ${email}
Thank You!
    `);
    } else {
      alert("Invalid email address. Please enter a valid email.")
    }


  };

  return (
    <section className=" max-container flex justify-between items-center
    max-lg:flex-col gap-10
    " id="contact-us">

      <h3 className=" text-4xl font-bold leading-[64px] font-poppins
     
      "

      >SignUp for <span className=" text-text-blue">Updates</span> & Newsletters</h3>

      <div className=" min-w-[600px] mt-[40px] p-[20px] pr-[34px] flex gap-[10px] border-solid border  border-gray-300 rounded-[46px] items-center ">

        <input onKeyDown={enterKey} placeholder="Enter your email" className=" js-input bg-transparent border-none outline-none opacity-50 flex-1" />

        <button onClick={userInput} className="  items-center justify-center font-poppins font-bold bg-text-blue text-white 
    px-10 py-3 text-[14px] rounded-full  border-text-blue">
          Sign Up
        </button>
      </div>







    </section >
  )
}

export default Subscribe

