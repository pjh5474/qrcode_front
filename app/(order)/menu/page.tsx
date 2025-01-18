import MenuCardList from "@/components/common/menu-card-list";
import QuickMenuSearchBar from "@/components/common/quick-menu-search-bar";

export default function Menu() {
  return (
    <div className="p-10 flex justify-center items-start overflow-y-auto">
      <QuickMenuSearchBar />
      <MenuCardList />
    </div>
  );
}
