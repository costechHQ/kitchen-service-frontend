import { useEffect, useState } from "react";
import { getMenu } from "@/lib/api";
import type { MenuResponse } from "@/types/menu";
import MenuCard from "@/components/menu/MenuCard";

export default function Home() {
  const [menu, setMenu] = useState<MenuResponse>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenu() {
      const data = await getMenu();

      setMenu(data);
      setLoading(false);
    }

    loadMenu();
  }, []);

  if (loading) {
    return <p>Loading menu...</p>;
  }

  const branches = Object.values(menu);

  return (
    <div>
      {branches.map((branch) => (
        <div key={branch.branch_name}>
          <h2>{branch.branch_name}</h2>

          {branch.menu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
