import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Quote Generator",
    description: "Inspirational Quote Generator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Permanent+Marker&family=Source+Code+Pro&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
