import Buttons from "../components/Buttons"
import { watch_video } from "../assets/images"


const OurStory = () => {
  return (
    <section id="about-us" className=" mt-8  ">
      <div className=" flex flex-1 flex-row gap-10 items-center justify-center max-xl:flex-wrap" >
        <div className=" flex-col w-[600px] leading-6 max-xl:flex max-xl:justify-center max-xl:items-center max-xl:text-center ">
          <h2 className="font-poppins text-4xl font-semibold mb-[30px] ">Our <span className=" text-text-blue">Story</span></h2>
          <p className=" font-poppins text-[14px] mb-[30px]">Our story began with a passion for creating watches that not only keep time but also make a statement. Each Nako watch is a testament to our commitment to quality, innovation, and style.</p>
          <p className="font-poppins text-[14px]">Inspired by the latest trends and timeless classics, our watches are meticulously designed to elevate your look and complement your lifestyle. Whether you're dressing up for a special occasion or adding a touch of sophistication to your everyday attire, Nako Watches has the perfect timepiece for you.</p>
          <Buttons label="View More" />

        </div>

        <div className=" w-[500px]">
          <video src={watch_video} autoPlay loop muted />
        </div>
      </div>
    </section>
  )
}

export default OurStory