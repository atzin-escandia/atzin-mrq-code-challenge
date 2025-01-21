import { priceFormatter } from '@/lib';
import './SymbolPriceFormatter.css';

interface SymbolPriceFormatterProps {
  price: number;
}

export default function SymbolPriceFormatter({ price }: SymbolPriceFormatterProps) {
  const priceFormatted = priceFormatter.format(price);

  return (
    <div className="symbolPriceFormatter">
      <div className="symbolPriceFormatter__title">Price:</div>
      <div className="symbolPriceFormatter__price">{price ? `$${priceFormatted}` : '--'}</div>
    </div>
  );
}