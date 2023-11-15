import Star from './icons/Star';

interface IProduct {
  id: number;
  name: string;
  rating: number;
  image: string;
  product_weight: string;
  product_price: number;
  discount_rate: number;
}

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  function getActualPrice() {
    let discountDecimal = product.discount_rate / 100;
    let mrp = product.product_price / (1 - discountDecimal);
    return mrp.toFixed(2);
  }

  return (
    <div className="min-w-[15rem] w-60 h-fit relative overflow-hidden rounded-xl bg-white">
      {/* image container */}
      <div className="w-full h-40 relative z-0 overflow-hidden">
        <img
          alt={product.name}
          src={product.image}
          className="w-full h-full absolute inset-0 -z-10 object-cover object-center select-none"
        />
        <div className="w-full h-full relative z-0" />
      </div>

      {/* content container */}
      <div className="w-full h-fit p-4 space-y-2.5">
        <div className="text-ellipsis line-clamp-1">
          <h4 className="text-lg text-neutral-900 font-semibold">
            {product.name}, {product.product_weight}
          </h4>
        </div>

        <div className="flex items-center gap-x-1">
          <div className="px-2.5 py-1 flex items-center gap-x-1 rounded bg-green-600">
            <Star />
            <p className="text-sm text-white font-semibold">{product.rating}</p>
          </div>
          <div className="px-2.5 py-1 rounded bg-green-100">
            <p className="text-sm text-neutral-900 font-semibold uppercase">
              {product.product_weight}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2.5">
            <p className="text-xl text-neutral-900 font-semibold">${product.product_price}</p>
            <p className="text-base text-neutral-500 font-semibold line-through">
              ${getActualPrice()}
            </p>
          </div>
          <button className="px-6 py-2 transition-all duration-200 rounded-md bg-orange-500 hover:bg-orange-600">
            <span className="text-base text-white font-semibold">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
