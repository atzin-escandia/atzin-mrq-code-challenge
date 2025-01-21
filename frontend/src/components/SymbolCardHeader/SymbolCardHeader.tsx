import up from '@/assets/up.png';
import down from '@/assets/down.png';
import './SymbolCardHeader.css';

interface SymbolCardHeaderProps {
  id: string | null;
  trend: 'UP' | 'DOWN' | null;
}

const SymbolCardHeader = ({ id, trend }: SymbolCardHeaderProps) => {
  return (
    <div className="symbolCardHeader">
      <h3 className="symbolCardHeader__id">{id}</h3>
      {trend === 'UP' && <img className="symbolCardHeader__icon" src={up} alt="Trend Up Icon" />}
      {trend === 'DOWN' && (
        <img className="symbolCardHeader__icon" src={down} alt="Trend Down Icon" />
      )}
    </div>
  );
};

export default SymbolCardHeader;
