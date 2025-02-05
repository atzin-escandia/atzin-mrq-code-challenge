import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import ListItem from '@/components/ListItem';
import { memo } from 'react';

type SymbolCardProps = {
  companyName: string;
  industry: string;
  marketCapFormatted: string;
};

const SymbolCardInfo = ({ companyName, industry, marketCapFormatted }: SymbolCardProps) => {
  return (
    <>
      <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
      <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
      <ListItem
        Icon={<MarketCapIcon />}
        label={`$${marketCapFormatted}`}
        spacing="space-between"
      />
    </>
  );
};
export default memo(SymbolCardInfo);
