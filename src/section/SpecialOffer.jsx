import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className=" flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className=" object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize max lg:max-w-lg font-bold">
          <span className="text-coral-red inline-block mt-3"> Spacial </span>
          <span className="text-coral-red inline-block mt-3"></span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innwvation for
          your active life.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innwvation for
          your active life.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
