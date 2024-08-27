import SideBar from "@/components/SideBar";
import "./globals.css";

export const metadata = {
  title: "Next.js Admin Dashboard",
  description:
    "A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full bg-gray-100">
        <div>
          <SideBar />
        </div>
        {children}
      </body>
    </html>
  );
}
