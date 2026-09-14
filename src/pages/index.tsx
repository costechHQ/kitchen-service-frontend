import { useEffect, useState } from "react";
import { getMenu } from "@/lib/api";
import type { MenuResponse } from "@/types/menu";

export default function Home() {
  const [menu, setMenu] = useState<MenuResponse>({});

  useEffect(() => {
    async function loadMenu() {
      const data = await getMenu();

      setMenu(data);
    }

    loadMenu();
  }, []);

  const branches = Object.values(menu);

  return (
    <div>
      {branches.map((branch) => (
        <div key={branch.branch_name}>
          <h2>{branch.branch_name}</h2>

          {branch.menu.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
