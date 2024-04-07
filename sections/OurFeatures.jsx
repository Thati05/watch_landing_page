import { rightFeature, leftFeature } from "../constants"
import { features_watch } from "../assets/images"
import FeatureRight from "../components/FeatureRight"
import FeatureLeft from "../components/FeatureLeft"

const OurFeatures = () => {
  return (
    <section
      className=" max-container max-xl: mt-1  ">
      <div className=" flex-1 flex flex-col justify-center items-center" >

        <div className=" flex flex-col justify-center items-center " >
          <h1 className=" font-poppins text-4xl font-medium mb-3 max-md:text-center" >Our Latest <span className=" text-text-blue">Features</span> </h1>
          <p className="  justify-center items-center text-center   ">Explore our most sought-after timepieces, handpicked for their <br className=" max-md: hidden " /> exceptional design and craftsmanship. </p>
        </div>

        <div className="flex flex-1 flex-row mt-[50px] ">

          <div className=" flex-1 flex  mt-16 grid-cols-3 items-center justify-center max-xl:flex-wrap  ">

            <div className="  grid-rows-3 grid-cols-1 pr-[50px]   ">
              {rightFeature.map((right) => (
                <FeatureRight key={right.title} {...right} />
              ))}
            </div>

            <div >
              <img
                className=" w-[400px] h-[560px] mb-[50px] object-contain "
                src={features_watch} />
            </div>

            <div className="  grid-rows-3 grid-cols-1 pl-[50px] ">
              {leftFeature.map((left) => (
                <FeatureLeft key={left.title} {...left} />
              ))}
            </div>


          </div>




        </div>



      </div>

    </section>
  )
}

export default OurFeatures