import BottomNavigation from "@/components/common/bottom-navigation";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">{children}</div>
      <div className="h-24">
        <BottomNavigation />
      </div>
    </div>
  );
}
