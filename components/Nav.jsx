import { hamburger } from '../assets/icons'; // Use ..(only 2 dots)
import { navLinks } from '../constants';


const Nav = () => {
  return (
    <header className="padding-x py-8 
     absolute z-10 w-full">
      <nav className="flex justify-between  items-center
      max-container">
        <a href='/'>
          <h1 alt='Logo' className=" font-Libre_Calson_Display text-3xl" >Ke nako</h1>
        </a>

        <ul className='flex-1 flex justify-center ml-[70px] items-center gap-16   max-lg:hidden '>

          {navLinks.map((item) => (
            <li key={item.label} >
              <a
                href={item.href}
                className="font-poppins leading-normal text-lg font-light"
              >
                {item.label}
              </a>
            </li>
          ))}

        </ul>
        <a
          href='#sign-in/log-in'
          className="font-poppins leading-normal justify-end text-lg font-medium max-lg:hidden "
        >
          Sign up/Explore now
        </a>

        {/* How to make the hamburger icon visible on small devices and hidden on larger devices */}

        <div className="hidden max-lg:block cursor-pointer">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
          /></div>



      </nav>
    </header> //Always use semantic HTML
  )
}

export default Nav