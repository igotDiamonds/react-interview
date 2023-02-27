// 1. Что делает этот компонент?
// 2. Как можно улучшить читаемость?
// 3. Как его отрефакторить?

import { useEffect, useState } from "react";
import { showAlert } from "../utils";

export function ListComponent() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json();

        setList(data);
      } catch {
        showAlert({ text: "Something went wrong!" });
      }
    };

    fetchList();
  }, []);

  const handleDeleteItem = (id: number) => {
    return () => {
      try {
        fetch(`https://dummyjson.com/products/${id}`, {
          method: "DELETE",
        });
        setList((prev) => prev.filter((x: { id: number }) => x.id !== id));
      } catch {
        showAlert({ text: "Something went wrong!" });
      }
    };
  };

  return (
    <div className="list-component">
      {list.map(({ id, name }: { id: number; name: string }) => (
        <div key={id} className="list-component__item>">
          {name.slice(0, 30) + (name.length > 30 ? "..." : "")}

          <div onClick={handleDeleteItem(id)} className="list-component__icon">
            X
          </div>
        </div>
      ))}
    </div>
  );
}
