const ShoeCard = ({ imgURL, chingeBigShoeImage, bigShoeImg }) => {
  const handelClickMethod = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      chingeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
    ${
      bigShoeImg === imgURL.bigShoe
        ? "border-coral-red focus:ring focus:ring-coral-red"
        : "border-transparent"
    } cursor-pointer max-sm:flex-1
    `}
      onClick={handelClickMethod}
    >
      <div className="flex flex-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-lg max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe Collections"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;



