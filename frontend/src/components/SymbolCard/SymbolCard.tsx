import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import './SymbolCard.css';
import SymbolPriceFormatter from '../SymbolPriceFormatter';
import { priceFormatter } from '@/lib';
import SymbolCardHeader from '../SymbolCardHeader';
import { usePriceVariation } from '@/hooks/usePriceVariation';
import { useGlowClass } from '@/hooks/useGlowEffect';
import SymbolCardInfo from '../SymbolCardInfo/SymbolCardInfo';
import { useShakeEffect } from '@/hooks/useShakeEffect';
import { memo } from 'react';
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
  const price = useAppSelector((state) => state.prices[id]);
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );

  const marketCapFormatted = priceFormatter.format(marketCap);
  const isSelected = activeSymbol === id;
  const isUnselected = activeSymbol && activeSymbol !== id;
  const { hasBigVariation } = usePriceVariation(price);
  const glowClass = useGlowClass(price);
  const shake = useShakeEffect(hasBigVariation);

  const handleSelectSymbol = () => {
    dispatch(updateActiveSymbol({ activeSymbol: id }));
  };

  const classesSymbolCard = `symbolCard
  ${glowClass}
  ${isSelected ? 'symbolCard__selected' : ''} 
  ${isUnselected ? 'symbolCard__unselected' : ''}
  ${shake ? 'symbolCard__shake' : ''}
`;

  return (
    <div onClick={handleSelectSymbol} className={classesSymbolCard}>
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

export default memo(SymbolCard);
