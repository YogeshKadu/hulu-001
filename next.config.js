/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      "picsum.photos",
      "links.papareact.com",
      "cdn.pixabay.com",
      "pixabay.com"
    ]
  }
}

module.exports = nextConfig
