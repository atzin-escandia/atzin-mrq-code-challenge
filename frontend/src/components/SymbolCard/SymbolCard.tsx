
import { useAppSelector } from '@/hooks/redux';
import './SymbolCard.css';
import SymbolPriceFormatter from '../SymbolPriceFormatter';
import { priceFormatter } from '@/lib';
import SymbolCardHeader from '../SymbolCardHeader';
import { usePriceVariation } from '@/hooks/usePriceVariation';
import { useGlowClass } from '@/hooks/useGlowEffect';
import SymbolCardInfo from '../SymbolCardInfo/SymbolCardInfo';

type SymbolCardProps = {
  id: string;
  symbolId: string | null;
  onClick: (symbolId: string) => void;
  price: number;
  showCardInfo: boolean;
};

const SymbolCard = ({ id, onClick, price, symbolId, showCardInfo }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const marketCapFormatted = priceFormatter.format(marketCap);
  const isSelected = symbolId === id;
  const isUnselected = symbolId && symbolId !== id;
  const { hasBigVariation } = usePriceVariation(price);
  const glowClass = useGlowClass(price);

  const handleOnClick = () => {
    onClick(id);
  };

  const classesSymbolCard = `
        ${glowClass}
        ${isSelected ? 'symbolCard_selected' : ''} 
        ${isUnselected ? 'symbolCard_unselected' : ''}
        ${hasBigVariation ? 'symbolCard__shake' : ''}`;

  return (
    <div onClick={handleOnClick} className={`symbolCard ${classesSymbolCard}`}>
      <SymbolCardHeader trend={trend} id={id} />
      <div className="symbolCard__content">
        <SymbolPriceFormatter price={price} />
        {showCardInfo &&
          <SymbolCardInfo
            companyName={companyName}
            marketCapFormatted={marketCapFormatted}
            industry={industry}
          />}
      </div>
    </div>
  );
};
export default SymbolCard;
