'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { TbBasketSearch } from 'react-icons/tb';

import { ContainerProducts } from '@components/ContainerProducts';
import { SearchProducts } from '@components/SearchProducts';
import { useProducts } from '@hooks/useProducts';

import { ProductProps } from '@shared-types/product';

export default function SearchPage() {
  const params = useParams<{ search: string }>();
  const { products } = useProducts();

  const [searchedProducts, setSearchedProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (params.search.length === 0)
        return product.name
          .toLocaleLowerCase()
          .includes(params.search.toLocaleLowerCase());
      return product.name
        .toLocaleLowerCase()
        .includes(params.search.toLocaleLowerCase());
    });

    setSearchedProducts(filteredProducts);
  }, [params.search, products]);

  return (
    <div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full ml-10 transition-all hover:bg-black/20 max-sm:ml-4">
        <Link href={'/'} title="Back home page">
          <IoArrowBackOutline size={28} />
        </Link>
      </div>

      <SearchProducts />

      {searchedProducts.length === 0 ? (
        <div>
          <p className="text-center">Not found products</p>
          <TbBasketSearch size={180} className="m-auto stroke-1" />
        </div>
      ) : (
        <>
          {params.search.length === 0 ? (
            <p className="text-center text-xl">
              Results for{' '}
              <span className="font-semibold">{`"${params.search}"`}</span>
            </p>
          ) : (
            <p className="text-center text-xl">
              Results for{' '}
              <span className="font-semibold">{`"${params.search}"`}</span>
            </p>
          )}
          <ContainerProducts products={searchedProducts} />
        </>
      )}
    </div>
  );
}
