import { memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import './SymbolsGrid.css';

const SymbolsGrid = () => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  return (
    <div className="symbolsGrid__container">
      {stockSymbols.map((id) => (
        <SymbolCard key={id} id={id} />
      ))}
    </div>
  );
};

export default memo(SymbolsGrid);
