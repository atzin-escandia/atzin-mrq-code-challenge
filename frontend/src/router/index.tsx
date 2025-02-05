import SymbolsView from '@/components/SymbolsView';
import { Route, Routes, Navigate } from 'react-router-dom';
import StatementsView from "@/components/StatementsView";
import ProfileView from "@/components/ProfileView";
import Loading from '@/components/Loading';
import { Suspense } from 'react';

const Router = () => {
  return (
    <Suspense fallback={<Loading className="loading__full__h" />}>
      <Routes>
        <Route index element={<SymbolsView />} />
        <Route index path="profile" element={<ProfileView />} />
        <Route index path="statements" element={<StatementsView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
