This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


README ini mencakup deskripsi aplikasi, instruksi instalasi, penggunaan, serta informasi teknis lainnya.

```markdown
# Next.js Image Upload Application

This is a simple image upload application built with Next.js, Prisma, and Vercel Blob Storage. Users can upload images with a title, and these images will be stored in a PostgreSQL database and displayed on the homepage.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- Upload images with a title.
- Images are stored in PostgreSQL database using Prisma ORM.
- Images are uploaded to Vercel Blob Storage and served publicly.
- View the latest images on the homepage.

## Tech Stack

- **Next.js** - React framework for building server-rendered applications.
- **Prisma** - ORM (Object-Relational Mapping) tool for managing the PostgreSQL database.
- **Vercel Blob Storage** - Storage service for handling file uploads.
- **Tailwind CSS** - Utility-first CSS framework for styling.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (v14.x or later)
- PostgreSQL database instance (you can use Neon.tech or any PostgreSQL provider)
- Vercel account (for deploying and managing the application, optional)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nextjs-imgupload.git
   cd nextjs-imgupload
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Set up Prisma:**

   Initialize Prisma by running the following command:

   ```bash
   npx prisma init
   ```

   Then, modify the `prisma/schema.prisma` file to match your database schema. 

4. **Create the PostgreSQL database schema:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Seed the database (optional):**

   If you have a seed script, you can run:

   ```bash
   npx prisma db seed
   ```

## Running the Application

1. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

2. **Build for production:**

   ```bash
   npm run build
   npm start
   ```

## Project Structure

```plaintext
├── app
│   ├── create
│   │   └── page.tsx              # Page for uploading new images
│   ├── edit
│   │   └── [id]
│   │       └── page.tsx          # Page for editing images (placeholder)
│   ├── components
│   │   ├── button.tsx            # Submit button component
│   │   └── create-form.tsx       # Form component for creating new uploads
│   ├── globals.css               # Global CSS file
│   ├── layout.tsx                # Main layout file
│   └── page.tsx                  # Home page showing the list of images
├── lib
│   ├── prisma.ts                 # Prisma client configuration
│   ├── data.ts                   # Data fetching methods
│   └── action.ts                 # Server-side actions, including image upload
├── prisma
│   └── schema.prisma             # Prisma schema definition
├── public                        # Static files (images, etc.)
├── node_modules                  # Node.js dependencies
├── .env                          # Environment variables
├── package.json                  # Node.js dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## Environment Variables

Create a `.env` file in the root directory and configure the following environment variables:

```plaintext
# Database connection URL for Prisma (with connection pooling)
POSTGRES_PRISMA_URL="your-prisma-db-url"

# Direct PostgreSQL connection URL (without connection pooling)
POSTGRES_URL_NON_POOLING="your-direct-db-url"

# Vercel Blob Storage credentials (replace with your actual keys)
VERCEL_BLOB_TOKEN="your-vercel-blob-token"
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
```

### Penjelasan Tambahan:

- **Installation Section:** Menjelaskan cara menginstal aplikasi secara lokal.
- **Running the Application:** Menguraikan cara menjalankan aplikasi di lingkungan pengembangan dan cara build untuk produksi.
- **Environment Variables:** Memberikan panduan tentang variabel lingkungan yang diperlukan untuk menjalankan aplikasi.

README ini dirancang untuk membantu pengembang lain memahami aplikasi Anda dan memulai pengembangan dengan cepat. Sesuaikan README sesuai dengan detail spesifik proyek Anda.