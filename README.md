# FixMyStreet

A community-driven platform that helps people report and track local issues in their area.

## Features

- Report local issues like potholes, broken streetlights, graffiti, and more
- Upload photos of the problems
- Track the status of your reports
- Get notified when issues are fixed
- View reports in your area

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma (PostgreSQL)
- NextAuth.js
- Cloudinary (for image uploads)
- Google Maps API (for geocoding)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fixmystreet.git
cd fixmystreet
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/fixmystreet"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Google Maps API (for geocoding)
GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
```

4. Set up the database:
```bash
npx prisma migrate dev
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utility functions and shared logic
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
└── styles/          # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
