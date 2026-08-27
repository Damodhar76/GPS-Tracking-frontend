import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPS Vehicle & Fleet Tracking | Lambodra Group",
  description:
    "Track vehicles in real time, monitor routes, speed, alerts and fleet performance with Lambodra Group's GPS tracking solution.",
  keywords: ["GPS tracking Ghana", "fleet management", "vehicle tracking Accra", "Lambodra Group"],
  openGraph: {
    title: "GPS Vehicle & Fleet Tracking | Lambodra Group",
    description: "See and manage your fleet in real time.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
