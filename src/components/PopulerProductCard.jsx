import star from "../assets/icons/star.svg";

const PopulerProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]"
      />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="reading" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 leading-normal font-semibold font-montserrat text-coral-red text-2xl">
        {price}
      </p>
    </div>
  );
};

export default PopulerProductCard;
