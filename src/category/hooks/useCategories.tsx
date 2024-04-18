import { useEffect, useState } from "react"
import { getCategories } from "../services/getCategories"
import { error } from "console";

interface Categories {
  cat_id: string;
  cat_name: string;
  cat_type: string;
  cat_editable: boolean;
  per_id: number | null;
  created_at: string;
  is_delete: boolean;
  cat_icon: string;
}

export const useCategories = () => {

  const [categories, setCategories] = useState<Categories[] | undefined>();

  const fetchCategories = () => {
    getCategories()
      .then(response => response.json())
      .then((data: any) => {
        setCategories(data)
      })
      .catch(error => console.error("Error fetching categories:", error))
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const income = categories?.filter((type: any) => type.cat_type === "I")
  const expenses = categories?.filter((type: any) => type.cat_type === "E")

  return {
    expenses,
    income,
    fetchCategories
  }
}