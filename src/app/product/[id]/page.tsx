import { StyleSuggestor } from '@components/StyleSuggestor';

import { Product } from '../components/Product/Product';
import { WrapperComments } from '../components/WrapperComments';

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="px-8 space-y-6">
      <Product productId={params.id} />
      <WrapperComments />
      <StyleSuggestor id={params.id} />
    </div>
  );
}
