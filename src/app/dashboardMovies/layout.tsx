import { ReactNode } from 'react';
import { Header } from '../components/shared/Header';
import { AuthProvider } from '../context/AuthContext';

export default function DashboardLayout({ children }: { children: ReactNode }) {

    return (
        <div>
            <AuthProvider>
                <Header />
                <main>{children}</main>
            </AuthProvider>
        </div>
    );
}