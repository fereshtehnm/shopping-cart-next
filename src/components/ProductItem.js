import React from "react";
import ProductRate from "./ProductRate";
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        {/* show product name  */}
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>

        {/* show product ratings */}
        <ProductRate rate={product.rating} count={product.numReviews} />

        {/* show product brand */}
        <p className="mb-2">{product.brand}</p>

        {/* show product price */}
        <p>${product.price}</p>

        <button>Add to cart</button>
      </div>
    </div>
  );
}
