import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import './SymbolCard.css';
import SymbolPriceFormatter from '../SymbolPriceFormatter';
import { priceFormatter } from '@/lib';
import SymbolCardHeader from '../SymbolCardHeader';
import { usePriceVariation } from '@/hooks/usePriceVariation';
import { useGlowClass } from '@/hooks/useGlowEffect';
import SymbolCardInfo from '../SymbolCardInfo/SymbolCardInfo';
import {
  selectActiveSymbol,
  selectShowCardInfo,
  updateActiveSymbol
} from '@/store/dashboardOptionsSlice';

type SymbolCardProps = {
  id: string;
};

const SymbolCard = ({ id }: SymbolCardProps) => {
  const dispatch = useAppDispatch();
  const showCardInfo = useAppSelector(selectShowCardInfo);
  const activeSymbol = useAppSelector(selectActiveSymbol);
  const prices = useAppSelector((state) => state.prices);

  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const marketCapFormatted = priceFormatter.format(marketCap);
  const price = prices[id];
  const isSelected = activeSymbol === id;
  const isUnselected = activeSymbol && activeSymbol !== id;
  const { hasBigVariation } = usePriceVariation(price);
  const glowClass = useGlowClass(price);

  const handleSelectSymbol = () => {
    dispatch(updateActiveSymbol({ activeSymbol: id }));
  };

  const classesSymbolCard = `
        ${glowClass}
        ${isSelected ? 'symbolCard_selected' : ''} 
        ${isUnselected ? 'symbolCard_unselected' : ''}
        ${hasBigVariation ? 'symbolCard__shake' : ''}`;

  return (
    <div onClick={handleSelectSymbol} className={`symbolCard ${classesSymbolCard}`}>
      <SymbolCardHeader trend={trend} id={id} />
      <div className="symbolCard__content">
        <SymbolPriceFormatter price={price} />
        {showCardInfo && (
          <SymbolCardInfo
            companyName={companyName}
            marketCapFormatted={marketCapFormatted}
            industry={industry}
          />
        )}
      </div>
    </div>
  );
};
export default SymbolCard;
