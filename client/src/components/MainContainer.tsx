import { useQuery } from 'react-query';
import axios from 'axios';

import Carousel from './Carousel';
import Product from './Product';
import SkeletonLoading from './SkeletonLoading';

import companyLogo from '../assets/logo.png';
import glowEffect from '../assets/glow.svg';

interface IProduct {
  id: number;
  name: string;
  rating: number;
  image: string;
  product_weight: string;
  product_price: number;
  discount_rate: number;
}

// fetching products
async function fetchProducts() {
  return await axios.get(`https://api-framer-carousel.vercel.app/api/products`);
}

export default function MainContainer() {
  // using useQuery hook to handle data
  const { data, isLoading } = useQuery('products', fetchProducts);

  return (
    <main className="w-full min-h-screen px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-20 font-montserrat antialiased relative z-0 overflow-x-hidden flex flex-col justify-center gap-10 bg-neutral-900">
      {/* header */}
      <header className="space-y-2.5">
        <h1 className="text-4xl text-white font-semibold">4700 BC</h1>
        <p className="text-xl text-orange-200 font-semibold uppercase tracking-wider opacity-80">
          Gourmet Food
        </p>
      </header>

      {/* displaying products inside a carousel */}
      <Carousel>
        {isLoading ? (
          <SkeletonLoading />
        ) : (
          <>
            {data?.data.map((product: IProduct) => (
              <Product key={product.id} product={product} />
            ))}
          </>
        )}
      </Carousel>

      {/* footer */}
      <footer className="w-full flex items-center justify-between">
        <button className="px-6 py-2.5 transition-all duration-200 rounded-md bg-orange-500 hover:bg-orange-600">
          <span className="text-base text-white font-semibold uppercase tracking-wider">
            View All
          </span>
        </button>
        <div className="flex flex-col gap-2 items-end">
          <p className="text-sm text-neutral-400 font-medium uppercase">Powered By</p>
          <img src={companyLogo} alt="Company Logo" className="w-32" />
        </div>
      </footer>

      {/* glow effect */}
      <img
        src={glowEffect}
        alt="Glow Effect"
        className="absolute -z-10 -top-2/4 right-0 translate-x-2/4"
      />
    </main>
  );
}
