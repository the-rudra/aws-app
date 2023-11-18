import type { Metadata } from "next";
import "./globals.css";
import { Amplify } from "aws-amplify";
import amplifyconfig from "../src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

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
            <body>{children}</body>
        </html>
    );
}
