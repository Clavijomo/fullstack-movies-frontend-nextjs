import { ReactNode } from 'react';
import { Header } from './components/shared/Header';
import { AuthProvider } from './context/AuthContext';
import './globals.css'

export default function DashboardLayout({ children }: { children: ReactNode }) {

    return (
        <html lang='en'>
            <body>
                <AuthProvider>
                    <Header />
                    <main>{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}