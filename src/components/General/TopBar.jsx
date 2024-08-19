'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { montserrat } from '@/app/fonts';

const TopBar = () => {
  return (
    <div
      className={`${montserrat.className} sticky top-0 z-10 flex flex-row items-center justify-between py-2 px-6 text-white bg-slate-200 mb-6`}
    >
      <div className="flex flex-row gap-4 items-center justify-end">
        <Link href={'/create-user'}>
          <FaPlusCircle
            size={30}
            className=" text-blueMain hover:text-yellowMain transitions duration-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
