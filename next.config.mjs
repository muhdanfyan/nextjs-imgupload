/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname : "7xrhfqht7f9lvw6d.public.blob.vercel-storage.com"
            }
        ]
    }
};

export default nextConfig;
