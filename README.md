# Daily News - Modern News Website

A comprehensive news website built with Next.js 15, featuring user authentication, categorized articles, search functionality, and a responsive design. "All voices matter" - bringing you news from around the world.

## 🚀 Features

- **User Authentication**: Sign in with Google using NextAuth
- **Categorized News**: World, Science, Culture, Politics, and more
- **Breaking News**: Real-time breaking news section
- **Search Functionality**: Search articles by keywords
- **User Dashboard**: Personalized dashboard for authenticated users
- **Dark/Light Theme**: Toggle between themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Video Content**: Support for video articles and hot videos section
- **Newsletter Subscription**: Email subscription feature
- **Admin Features**: Article management through API
- **SEO Optimized**: Server-side rendering with Next.js

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library

### Backend & Database
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **NextAuth.js** - Authentication library

### Additional Libraries
- **React Hook Form** - Form handling
- **Date-fns** - Date utilities
- **Cloudinary** - Image hosting
- **Joi** - Data validation
- **Recharts** - Data visualization

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **pnpm**
- **MongoDB** (local or cloud instance)
- **Git**

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/news-site.git
   cd news-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/news-site

   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here

   # Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # Cloudinary (optional)
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

## 🚀 Running the Application

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

3. **Seed the database (optional):**
   ```bash
   npm run seed
   ```

## 📊 Database Seeding

The project includes a seeding script to populate the database with sample data:

```bash
npm run seed
```

This will create sample categories and articles for development purposes.

## 🏗 Project Structure

```
news-site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── articles/      # Article CRUD operations
│   │   │   ├── auth/          # Authentication
│   │   │   ├── categories/    # Category management
│   │   │   └── posts/         # Post management
│   │   ├── dashboard/         # User dashboard
│   │   ├── profile/           # User profile
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components (Radix)
│   │   ├── ArticleCard.tsx   # Article display component
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Site footer
│   │   └── ...
│   ├── lib/                  # Utility functions
│   │   ├── api.ts            # API client functions
│   │   ├── mongodb.ts        # Database connection
│   │   └── utils.ts          # Helper functions
│   ├── models/               # Mongoose models
│   │   ├── Article.ts        # Article schema
│   │   ├── Category.ts       # Category schema
│   │   └── userModel.js      # User schema
│   └── types/                # TypeScript types
├── public/                   # Static assets
├── scripts/                  # Utility scripts
│   └── seed.ts              # Database seeding
└── package.json
```

## 🔌 API Endpoints

### Articles
- `GET /api/articles` - Fetch all articles (with optional category filter)
- `POST /api/articles` - Create new article
- `GET /api/articles/[id]` - Fetch single article
- `PUT /api/articles/[id]` - Update article
- `DELETE /api/articles/[id]` - Delete article

### Categories
- `GET /api/categories` - Fetch all categories
- `POST /api/categories` - Create new category
- `GET /api/categories/[id]` - Fetch single category
- `PUT /api/categories/[id]` - Update category
- `DELETE /api/categories/[id]` - Delete category

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth.js routes

### Posts
- `GET /api/post` - Fetch posts
- `POST /api/post` - Create post
- `GET /api/post/[id]` - Fetch single post
- `PUT /api/post/[id]` - Update post
- `DELETE /api/post/[id]` - Delete post

## 🎨 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with sample data

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
The app can be deployed to any platform supporting Node.js:
- Netlify
- AWS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Daily News** - Bringing you the latest news from around the world, one story at a time.

