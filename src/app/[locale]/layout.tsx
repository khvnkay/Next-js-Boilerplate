
"use client"
import '@/styles/global.css';
import React, { useState } from "react";

import { notFound } from 'next/navigation';
import { AppConfig } from '@/utils/AppConfig';
import Sidebar from "@/components/Sidebar.js"
import MenuBar from "@/components/MenuBar.js"
// export const metadata: Metadata = {
//   icons: [
//     {
//       rel: 'apple-touch-icon',
//       url: '/apple-touch-icon.png',
//     },
//     {
//       rel: 'icon',
//       type: 'image/png',
//       sizes: '32x32',
//       url: '/favicon-32x32.png',
//     },
//     {
//       rel: 'icon',
//       type: 'image/png',
//       sizes: '16x16',
//       url: '/favicon-16x16.png',
//     },
//     {
//       rel: 'icon',
//       url: '/favicon.ico',
//     },
//   ],
// };

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(props.params.locale)) notFound();
  const [showSidebar, setShowSidebar] = useState(true);

  // Using internationalization in Client Components

  return (
    <html lang={props.params.locale}>
      <body>
        <div className="min-h-screen">
          <div className="flex">
            <MenuBar setter={setShowSidebar} />

            {/* <div> */}

            <Sidebar show={showSidebar} setter={setShowSidebar} />
            {/* </div> */}
            <div className="flex flex-col flex-grow w-screen  min-h-screen">
              {props.children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
