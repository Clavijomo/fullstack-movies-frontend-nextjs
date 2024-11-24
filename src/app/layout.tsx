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
                    <title>Aplicación de películas</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <main>{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}