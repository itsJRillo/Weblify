/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://gjxxajyohlbgxlnxqdxn.supabase.co",
    ANON_PUBLIC_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqeHhhanlvaGxiZ3hsbnhxZHhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4MDQxMjYsImV4cCI6MjAxODM4MDEyNn0.EpxKeHUjJOgt40zJWDqAg3FZ0sOshb397iR2bVpsZj0"
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.google.com'
          },
        ],
      },
}

module.exports = nextConfig
