import Sidebar from "../ui/sidenav/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="ml-64 p-8 w-full font-[Rhymes]">{children}</main>
      </body>
    </html>
  );
}
