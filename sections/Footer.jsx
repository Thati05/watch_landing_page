import { copyrightSign } from "../assets/icons"
import { socialMedia } from "../constants"
import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container pt-[50px]">
      <div className=" flex justify-between items-center
 gap-20 flex-wrap max-lg:flex-col
" >

        <div className=" flex flex-col 
 item-start  ">
          <a href='/'>
            <h1 alt='Logo' className=" font-Libre_Calson_Display text-4xl text-white" >Ke nako</h1>
          </a>
          <p className=" font-poppins  text-white text-base  font-light mt-6 leading-7 text-wrap  ">Timeless elegance meets unbeatable value. Shop <br /> now and elevate your look with Nako Watches.</p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div className=" justify-center items-center cursor-pointer" >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={30}
                  height={30} />
              </div>))}
          </div>

        </div>
        <div className=" flex flex-1 justify-between
        lg:gap-10 gap-20 flex-wrap">

          {footerLinks.map((section) => (

            <div key={section}>
              <h4 className=" text-white font-medium text-[18px] font-poppins leading-normal mb-2 ">{section.title} </h4>
              <ul>
                {section.links.map((link) => (
                  <li className=" text-white font-light font-poppins text-[12px] mb-2 leading-normal hover:text-gray-400 cursor-pointer " key={link.name}>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

          ))}

        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className=" flex flex-1 justify-start items-center gap-2 font-poppins cursor-pointer" >
          <img src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer