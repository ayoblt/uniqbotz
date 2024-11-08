import type {Metadata} from "next";
import {Karla} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/navbar";
import {Sidebar} from "@/components/sidebar";
import {ToggleProvider} from "@/providers/toggle-provider";
import React from "react";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const karla = Karla({subsets: ["latin"], display: "swap"});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ToggleProvider>

            <body
                className={`${karla.className} antialiased flex flex-col min-h-screen overflow-x-hidden relative`}
            >
            <Navbar/>
            <Sidebar/>
            <main className="flex-1 flex-grow">

                {children}
            </main>
            </body>
        </ToggleProvider>
        </html>
    );
}
