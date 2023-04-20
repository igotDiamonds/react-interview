import { useEffect, useState } from "react"
import { showAlert } from "../utils"
import { TrashIcon } from "@heroicons/react/24/outline"

export function ListComponent() {
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchList = async () => {
      try {
        const resp = await fetch("https://dummyjson.com/products")
        const data = await resp.json()

        setList(data.products)
      } catch {
        showAlert({ text: "Something went wrong!" })
      }
    }

    fetchList()
  }, [])

  const handleDeleteItem = (id: number) => {
    return () => {
      try {
        fetch(`https://dummyjson.com/products/${id}`, {
          method: "DELETE",
        })
        setList(prev => prev.filter((x: { id: number }) => x.id !== id))
      } catch {
        showAlert({ text: "Something went wrong!" })
      }
    }
  }

  return (
    <div className="list-component">
      {list.map(({ id, name }: { id: number; name: string }) => (
        <div key={id} className="list-component__item>">
          {name.slice(0, 30) + (name.length > 30 ? "..." : "")}

          <div onClick={handleDeleteItem(id)} className="list-component__icon">
            <TrashIcon className="h-6 w-6" />
          </div>
        </div>
      ))}
    </div>
  )
}
