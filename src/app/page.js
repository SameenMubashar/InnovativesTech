import { montserrat } from './fonts';
import React, { Suspense } from 'react';
import { FaSpinner } from 'react-icons/fa';
import TopBar from '@/components/General/TopBar';

const UserDetails = React.lazy(() =>
  import('@/components/Dashboard/UserDetails')
);

const DashboardPage = () => {
  return (
    <div>
      <TopBar />
      <h2
        className={`${montserrat.className} mt-4 text-4xl text-blueMain font-bold text-center mb-4`}
      >
        Dashboard
      </h2>
      <div className="px-[5%]">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-full py-4">
              <FaSpinner className="animate-spin text-4xl" />
            </div>
          }
        >
          <UserDetails />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardPage;
