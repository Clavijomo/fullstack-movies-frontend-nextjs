import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        domains: [
            'hips.hearstapps.com',
            'www.findelahistoria.com',
            'www.google.com',
            'cloudfront-eu-central-1.images.arcpublishing.com',
            'st1.uvnimg.com',
            'img.freepik.com',
            'www.lavanguardia.com',
            'i.pinimg.com',
            'www.laguiadelvaron.com'
        ]
    }
};

export default nextConfig;
