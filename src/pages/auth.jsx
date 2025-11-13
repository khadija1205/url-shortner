import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Login from '../components/login';
import Signup from '../components/signup';
import { UrlState } from '@/context';

const Auth = () => {
    let [searchParams] = useSearchParams();
    const longLink = searchParams.get('createNew');
    const navigate = useNavigate();

    const { isAuthenticated, loading } = UrlState();

    useEffect(() => {
        if (isAuthenticated && !loading) {
            navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ''}`);
        }
    }, [isAuthenticated, loading, navigate]);

    return (
        <div className="flex flex-col items-center justify-center gap-10 px-4">
            <h1 className="text-5xl font-extrabold sm:text-4xl md:text-5xl text-center">
                {searchParams.get('createNew') ? "Hold up! Let's login first..." : 'Login / Signup'}
            </h1>
            <Tabs defaultValue="login" className="w-full max-w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Login />
                </TabsContent>
                <TabsContent value="signup">
                    <Signup />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Auth;
