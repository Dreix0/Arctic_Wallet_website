/** @type {import('next').NextConfig} */
import pkg from "next-intl/plugin"

const  withNextIntl = pkg();

const nextConfig = {
    images: {
      domains: ['arctic-wallet-website.vercel.app'],
    }
};

export default withNextIntl(nextConfig);
