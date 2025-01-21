import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import './SymbolCard.css';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector((state) => state.stocks.entities[id]);
  const marketCapString = marketCap.toString();
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div onClick={handleOnClick} className="symbolCard">
      <div className="symbolCard__header">
        {id} - {trend}
      </div>
      <div className="symbolCard__content">
        <div className="symbolCard__price">
          <div>Price:</div>
          <div>{price || '--'} </div>
        </div>
        <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
        <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
        <ListItem Icon={<MarketCapIcon />} label={marketCapString} spacing="space-between" />
      </div>
    </div>
  );
};
export default SymbolCard;
