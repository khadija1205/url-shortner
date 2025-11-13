import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const AppLayout = () => {
    return (
        <div>
            <main className="min-h-screen container my-5">
                <Header />

                <Outlet />
            </main>

            {/*footer*/}


            <footer className="p-10 text-center bg-gray-800 text-white mt-auto">
                <p>@ 2025 Khadija Chichkar. All rights reserved</p>
            </footer>
        </div>
    );
};

export default AppLayout;
