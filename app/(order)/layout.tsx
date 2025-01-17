import BottomNavigation from "@/components/bottom-navigation";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <BottomNavigation />
    </div>
  );
}
