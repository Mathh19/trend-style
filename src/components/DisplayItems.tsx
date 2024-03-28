import { CartItemsProps } from '@shared-types/cart-items';
import { ProductProps } from '@shared-types/product';

type DisplayItemsProps = {
  items: CartItemsProps[] | ProductProps[];
};

export const DisplayItems = ({ items }: DisplayItemsProps) => {
  return (
    <div className="flex flex-row-reverse space-x-reverse -space-x-8">
      {items.slice(0, 5).map((item) => (
        <img
          key={item.id}
          src={item.img[0]}
          alt={item?.name}
          className="w-12 max-h-12 rounded-md object-right object-cover border-x-2 border-black"
        />
      ))}
    </div>
  );
};
