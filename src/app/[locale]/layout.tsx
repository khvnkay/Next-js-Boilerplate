
"use client"
import '@/styles/global.css';
import React, { useState } from "react";

import { notFound } from 'next/navigation';
import { AppConfig } from '@/utils/AppConfig';
import Sidebar from "@/components/Sidebar.js"
import MenuBar from "@/components/MenuBar.js"
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';


export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(props.params.locale)) notFound();
  const [showSidebar, setShowSidebar] = useState(true);

  // Using internationalization in Client Components

  return (
    <ReduxProvider store={store}>

      <html lang={props.params.locale}>
        <header>
        </header>
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
    </ReduxProvider>

  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
