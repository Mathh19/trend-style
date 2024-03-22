import { Metadata } from 'next';

import { Cart } from './components/Cart/Cart';

export const metadata: Metadata = {
  title: 'Trend Styles - Cart',
  description: 'Cart items'
};

export default function CartPage() {
  return (
    <div className="w-full px-6">
      <Cart />
    </div>
  );
}
