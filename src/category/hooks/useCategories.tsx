import { useEffect, useState } from "react"
import { getCategories } from "../services/getCategories"

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

  const [expenses, setExpenses] = useState<Categories[] | undefined>();
  const [income, setIncome] = useState<Categories[] | undefined>();

  useEffect(() => {
    getCategories()
      .then(response => response.json())
      .then((data: any) => {
        setIncome(data.filter((type: any) => type.cat_type === "I"))
        setExpenses(data.filter((type: any) => type.cat_type === "E"))
      })
  }, [])

  return {
    expenses,
    income
  }
}