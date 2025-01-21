import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import './SymbolCard.css';
import SymbolPriceFormatter from '../SymbolPriceFormatter';
import { priceFormatter } from '@/lib';
import SymbolCardHeader from '../SymbolCardHeader';
import { usePriceVariation } from '@/hooks/usePriceVariation';
import { useGlowClass } from '@/hooks/useGlowEffect';

type SymbolCardProps = {
  id: string;
  symbolId: string | null;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price, symbolId }: SymbolCardProps) => {
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
        ${hasBigVariation ? 'symbolCard__shake' : ''}`

  return (
    <div
      onClick={handleOnClick}
      className={`symbolCard ${classesSymbolCard}`}
    >
      <SymbolCardHeader trend={trend} id={id} />
      <div className="symbolCard__content">
        <SymbolPriceFormatter price={price} />
        <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
        <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
        <ListItem
          Icon={<MarketCapIcon />}
          label={`$${marketCapFormatted}`}
          spacing="space-between"
        />
      </div>
    </div>
  );
};
export default SymbolCard;
