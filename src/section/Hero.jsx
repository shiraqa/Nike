import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:rounded-lg xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrivel{" "}
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat pt-8 text-slate-gray text-lg mb-14 leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innwvation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((state) => (
            <div key={state.label}>
              <p className="text-4xl font-palanquin font-bold">{state.value}</p>
              <p className="leading-8 font-montserrat text-slate-gray">
                {state.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative justify-center flex flex-1 items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover">
        <img
          src={bigShoeImg}
          alt="Shoe Collections"
          width={610}
          height={500}
          className="z-10 object-contain relative"
        />
        <div className="flex sm:gap-2 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                chingeBigShoeImage={(shoe) => {
                  setbigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
