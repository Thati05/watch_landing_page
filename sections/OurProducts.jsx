//Array of the images,price ant their names
import { products } from "../constants";
import PopularProductCard from '../components/PopularProductCard';

const OurProducts = () => {
  return (
    <section id="products"
      className=" max-container max-xl:mt-[100px]">
      <div className=" mt-[20px] flex-1 flex flex-col justify-start gap-5">
        <div >
          <h1 className=" text-4xl font-poppins font-medium mb-3" >Our <span className=" text-text-blue">Popular</span> Products</h1>
          <p className="text-[18px] font-light font-poppins leading-8" >Explore our most sought-after timepieces, handpicked for their exceptional <br className=" max-xl:hidden" />
            design and craftsmanship. </p>
        </div>

        <div className=' items-center justify-center mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-[50px] gap-[70px]'>
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>



    </section>
  )
}

export default OurProducts