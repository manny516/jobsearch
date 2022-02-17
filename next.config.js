/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
        return [
          {
            source: '/api/jobsearch',
            destination: 'http://localhost:4000/api/jobsearch',
          },
        ]
      },
}
