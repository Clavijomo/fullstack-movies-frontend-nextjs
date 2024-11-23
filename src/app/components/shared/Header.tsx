'use client'

import { useAuth } from '@/app/context/AuthContext';
import { Person } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import LogoHeader from '../../resources/Logo.png';
import '../../styles/header.css';

export const Header = () => {
    const { decodedToken } = useAuth();

    return (
        <header className='header'>
            <div className='container-header'>
                <div className='section-options'>
                    <Image
                        src={LogoHeader}
                        alt='logo'
                        className='logo'
                        width={100}
                        height={100}
                    />
                    <ul>
                        <li>Popular</li>
                        <li>Favorites</li>
                    </ul>
                </div>
                <div className='user-login'>
                    {decodedToken?.email ? (
                        <Avatar
                            sx={{ backgroundColor: '#F0B90B', color: 'black' }}
                        >
                            {decodedToken?.email.charAt(0).toUpperCase()}</Avatar>
                    ) : (
                        <Person />
                    )}
                    <p>{decodedToken?.email || 'Guest'}</p>
                </div>
            </div>
        </header>
    )
}
