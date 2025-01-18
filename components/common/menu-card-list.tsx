import MenuCard from "./menu-card";

export default function MenuCardList() {
  return (
    <div className="bg-white w-7/8 shadow-md shadow-slate-400 rounded-sm flex flex-col gap-y-3 p-2">
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </div>
  );
}
