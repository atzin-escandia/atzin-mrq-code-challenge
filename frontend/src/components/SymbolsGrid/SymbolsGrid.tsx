import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import './SymbolsGrid.css';

type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
  symbolId: string | null;
};

const SymbolsGrid = ({ onSymbolClick, symbolId }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  return (
    <div className="symbolsGrid__container">
      {stockSymbols.map((id, i) => (
        <SymbolCard price={prices[id]} onClick={onSymbolClick} key={i} id={id} symbolId={symbolId} />
      ))}
    </div>
  );
};

export default SymbolsGrid;
