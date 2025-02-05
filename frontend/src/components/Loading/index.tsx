import './loading.css';
import { memo } from 'react';
const Loading = ({ className }: { className?: string }) => {
  return (
    <div className={`loading ${className} `}>
      <div className="loading__pulse"></div>
    </div>
  );
};

export default memo(Loading);
