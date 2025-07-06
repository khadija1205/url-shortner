import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const AppLayout = () => {
  return (
      <div>
          <main className="min-h-screen container my-5">
              {/*Header */}
              <Header />

              {/*body */}
              
              <Outlet />
          </main>

          <div>
              {/*footer*/}
              <div className="p-10 text-center bg-gray-800 text-white">Made By Khadija</div>
          </div>
      </div>
  );
}

export default AppLayout