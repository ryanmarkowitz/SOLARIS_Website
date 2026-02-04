This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# SOLARIS Website - Developer Guide

## Quick Setup

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation
1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd solaris_website
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development
Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build & Deploy
```bash
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linting
```

## Tech Stack
- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.18
- **Icons**: React Icons
- **UI**: React 19.2.3

## Project Structure
```
app/
├── components/
│   ├── Home/
│   │   ├── Progress/          # Progress section components
│   │   └── ...
│   └── PDFuploads/           # PDF upload components
├── constants/
│   └── constants.tsx         # Navigation and other constants
├── [page-routes]/           # Next.js app router pages
└── globals.css              # Global styles
```

## How to Update Content

### 1. Adding Progress Items to Home Page

**File**: `app/components/Home/Progress/Progress.tsx`

**Location**: Line 12-40 (progressImages array)

**Steps**:
1. Add new images to the `public/` folder
2. Update the `progressImages` array:
   ```tsx
   const progressImages = [
     // ... existing items
     {
       src: "/your-new-image.png",
       title: "Your Progress Title",
       description: "Description of this progress milestone"
     }
   ];
   ```

**Image Requirements**:
- Place images in the `public/` folder
- Use common formats (PNG, JPG, SVG)
- Recommended size: 300x200px or similar aspect ratio

### 2. Adding PDF Reports

**File**: `app/components/PDFuploads/pdfuploadsLogic.tsx`

**Location**: Line 14-21 (pdfList array)

**Steps**:
1. Add PDF files to the `public/` folder
2. Update the `pdfList` array:
   ```tsx
   const pdfList: PDFItem[] = [
     // ... existing PDFs
     {
       id: 'unique-id',
       title: 'Your PDF Title',
       filename: 'your-pdf-file.pdf',
       description: 'Brief description of the PDF content'
     }
   ];
   ```

**PDF Requirements**:
- Place PDF files in the `public/` folder
- Use descriptive filenames
- Ensure PDFs are web-optimized for faster loading

### 3. Navigation Updates

**File**: `app/constants/constants.tsx`

To add/modify navigation links, update the `navLinks` array:
```tsx
export const navLinks = [
  {
    id: 6,
    label: "New Section",
    url: "/new-section",
  }
]
```

## Development Tips

### CSS Variables
The project uses CSS custom properties for theming:
- `--bg`: Background color
- `--text`: Primary text color
- `--accent`: Accent color
- `--surface`: Surface/card background
- `--border`: Border color
- `--muted`: Muted text color

### Adding New Pages
1. Create a new folder in `app/` with the route name
2. Add a `page.tsx` file in that folder
3. Update navigation in `constants.tsx` if needed

### Component Guidelines
- Use TypeScript for all components
- Follow the existing naming conventions
- Use Tailwind CSS for styling
- Implement responsive design (mobile-first)

## Common Tasks

### Adding Images
1. Place in `public/` folder
2. Reference with `/image-name.ext`
3. Use Next.js `Image` component for optimization

### Styling Updates
- Modify `globals.css` for global styles
- Use Tailwind classes for component styling
- Maintain dark/light theme compatibility

### Performance
- Images are automatically optimized by Next.js
- Use `next/image` component
- Lazy loading is enabled by default

## Troubleshooting

### Common Issues
- **Build errors**: Check TypeScript types and imports
- **Styling issues**: Verify Tailwind class names
- **Image not loading**: Check file path and public folder
- **PDF not displaying**: Ensure PDF is in public folder and filename matches

### Development Server Issues
```bash
# Clear Next.js cache
rm -rf .next
npm run dev

# Clear node_modules if needed
rm -rf node_modules
npm install
```

## File Locations Quick Reference

| Task | File | Line/Section |
|------|------|--------------|
| Add progress items | `app/components/Home/Progress/Progress.tsx` | Line 12-40 |
| Add PDF reports | `app/components/PDFuploads/pdfuploadsLogic.tsx` | Line 14-21 |
| Update navigation | `app/constants/constants.tsx` | navLinks array |
| Global styles | `app/globals.css` | Entire file |
| Add new pages | `app/[route-name]/page.tsx` | New file |

## Deployment
The project is configured for Vercel deployment. Push to main branch for automatic deployment.
