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

```bash
.card-3d-hover {
  transition: all 0.3s ease;
}

.card-3d-hover:hover {
  box-shadow:
      /* Outer elevation shadow */
    0px 12px 24px rgba(0, 0, 0, 0.25),
    /* Inner highlight (top-left light source) */ inset 4px 4px 10px
      rgba(0, 0, 0, 0.15); /* Inner depth (bottom-right shadow) */
  /* inset -4px -4px 10px
      rgba(255, 255, 255, 0.2); */

  transform: translateY(-4px);
}

@layer components{
.neo-icon-btn {
    @apply relative flex items-center justify-center
           w-14 h-14 rounded-xl
           transition-all duration-300 ease-in-out;

    background: #f3f4f6; /* light gray base */

    box-shadow:
      6px 6px 12px rgba(0, 0, 0, 0.08),
      -6px -6px 12px rgba(255, 255, 255, 0.9),
      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
      inset -4px -4px 8px rgba(255, 255, 255, 0.9);
  }

  .neo-icon-btn:hover {
    transform: translateY(-4px);

    box-shadow:
      10px 10px 20px rgba(0, 0, 0, 0.12),
      -10px -10px 20px rgba(255, 255, 255, 1);
  }

  .neo-icon-btn:active {
    transform: translateY(0);

    box-shadow:
      inset 4px 4px 8px rgba(0, 0, 0, 0.9),
      inset -4px -4px 8px rgba(255, 255, 255, 0.7);
  }
}
# html code
<div className="flex gap-4">
        <button className="neo-icon-btn">
          <Facebook className="w-5 h-5 text-gray-700" />
        </button>

        <button className="neo-icon-btn">
          <Instagram className="w-5 h-5 text-gray-700" />
        </button>

        <button className="neo-icon-btn">
          <Linkedin className="w-5 h-5 text-gray-700" />
        </button>
      </div>
```
