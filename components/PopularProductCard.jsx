

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col   justify-center w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px] cursor-pointer' />

      <h3 className='mt-2 text-2xl leading-normal font-medium font-poppins cursor-pointer'>
        {name}
      </h3>
      <p className='mt-2 font-medium  font-poppins text-text-blue text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;