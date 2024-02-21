'use client';

import { useEffect, useState } from 'react';

import { AddWishlist } from '@components/AddWishlist';
import { Button } from '@components/UI/Button';
import { Price } from '@components/UI/Price';
import { Rating } from '@mui/material';

import { ProductProps } from '@shared-types/product';

import { getProduct } from '@utils/getProduct';

import products from '../../../contents/all-products.json';
import comments from '../../../contents/comments.json';
import { Colors } from '../components/Colors';
import { ProductImageDisplay } from '../components/ProductImageDisplay';
import { Sizes } from '../components/Sizes';
import { WrapperComments } from '../components/WrapperComments';

export default function Product({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<ProductProps | undefined>();

  useEffect(() => {
    setProduct(getProduct(products, params.id));
  }, [params.id]);

  return (
    <div className="px-8">
      {product && (
        <section>
          <div className="flex justify-center gap-5 max-[762px]:flex-wrap">
            <ProductImageDisplay
              images={product.img}
              description={product.name}
            />
            <div className="space-y-3">
              <h2 className="text-4xl font-bold">{product.name}</h2>
              <div className="flex items-center gap-1">
                <Rating name="read-only" value={4.5} precision={0.5} />
                <span className="text-zinc-600">({product.rate})</span>
              </div>
              <Price
                price={product.price}
                discount={product.discount}
                size="large"
              />
              <p className="border-t-2 border-zinc-400 pt-3">
                {product.details}
              </p>
              <p className="text-4xl font-bold">Size:</p>
              <div>
                <Sizes sizes={product.sizes} />
              </div>
              <Colors colors={product.colors} />
              <div className="flex items-center gap-4">
                <Button text="Add to cart" className="uppercase shadow-md" />
                <AddWishlist product={product} background="white" />
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="mt-16">
        <h2 className="text-4xl font-bold border-b-2 border-zinc-400 pb-2.5">
          Comments
        </h2>
        <WrapperComments comments={comments} />
      </section>
    </div>
  );
}
