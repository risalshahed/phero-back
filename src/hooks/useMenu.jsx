import { useEffect, useState } from "react";

export default function useMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMenu = async () => {
    const res = await fetch('menu.json');
    const data = await res.json();
    setMenu(data);
    setLoading(false);
  }

  // console.log(menu);

  useEffect(() => {
    getMenu();
  }, []);

  return [menu, loading];
}