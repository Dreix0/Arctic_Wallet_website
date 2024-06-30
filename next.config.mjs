/** @type {import('next').NextConfig} */
import pkg from "next-intl/plugin"

const  withNextIntl = pkg();

const nextConfig = {};

export default withNextIntl(nextConfig);
