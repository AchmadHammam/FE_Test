import { SideBar } from "@/components/sideBar";
import { TopBar } from "@/components/topBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <TopBar />
      <div className=" flex flex-row bg-gray-300">
        <SideBar />
        <div className="w-full min-h-max bg-gray-300 my-5 ml-5">
          <div className="bg-white m-5  min-h-screen p-5">{children}</div>
        </div>
      </div>
    </body>
  );
}
