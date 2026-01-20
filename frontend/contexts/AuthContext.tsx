'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/axios';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    name: string;
    email: string;
    avatar_url?: string;
    timezone?: string;
    email_verified_at?: string;
    created_at?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, password_confirmation: string) => Promise<void>;
    logout: () => Promise<void>;
    fetchUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchUser = async () => {
        try {
            const response = await api.get('/api/user');
            setUser(response.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = async (email: string, password: string) => {
        // Get CSRF cookie first
        await api.get('/sanctum/csrf-cookie');

        // Login - Sanctum will set httpOnly cookie automatically
        const response = await api.post('/api/login', { email, password });

        // Set user state from response
        setUser(response.data.user);

        // Redirect to dashboard
        router.push('/dashboard');
    };

    const register = async (name: string, email: string, password: string, password_confirmation: string) => {
        // Get CSRF cookie first
        await api.get('/sanctum/csrf-cookie');

        // Register - Sanctum will set httpOnly cookie automatically
        const response = await api.post('/api/register', {
            name,
            email,
            password,
            password_confirmation
        });

        // Set user state from response
        setUser(response.data.user);

        // Redirect to dashboard
        router.push('/dashboard');
    };

    const logout = async () => {
        try {
            // Call logout endpoint - this will invalidate the session cookie
            await api.post('/api/logout');
        } catch (error: any) {
            console.error('Logout error:', error);
        } finally {
            // Clear user state
            setUser(null);

            // Redirect to login
            router.push('/login');
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
