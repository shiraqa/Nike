import { products } from "../constants";
import PopulerProductCard from "../components/PopulerProductCard";
const PopulerProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our
          <span className="text-coral-red"> Populer </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          The New Arrivel Popluler Preduct is now available The New Arrivel
          Popluler Preduct is now available
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopulerProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopulerProduct;
