"use client";

import http from '@/utils/axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const login = async () => {
        try {
            const csrfResponse = await http.get('/sanctum/csrf-cookie');

            const loginResponse = await http.post('/api/login', { email, password });

            if (loginResponse.status === 200) {
                router.push('/');
            }
            
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 m-3 max-w-sm'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input
                type="password"
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 m-3 max-w-sm'
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <div>
                <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded m-3"
                    onClick={login}
                >
                    送信
                </button>
            </div>
        </div>
    );
};

export default Page;
