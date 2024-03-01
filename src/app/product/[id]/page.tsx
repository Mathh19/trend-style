import { Product } from '../components/Product/Product';
import { WrapperComments } from '../components/WrapperComments';

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="px-8">
      <Product productId={params.id} />
      <WrapperComments />
    </div>
  );
}
