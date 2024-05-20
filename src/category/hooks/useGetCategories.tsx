import { useEffect, useState } from "react"
import { getCategories } from "../services/getCategories"
import { error } from "console";

export interface Categories {
  cat_id?: number;
  cat_name: string;
  cat_type?: string;
  cat_editable?: boolean;
  per_id?: number | null;
  created_at?: string;
  is_delete?: boolean;
  cat_icon: string;
}

export const useGetCategories = () => {

  const [income, setIncome] = useState<Categories[] | undefined>();
  const [expenses, setExpenses] = useState<Categories[] | undefined>();
  const [isLoading, setLoading] = useState(true)

  const fetchCategories = () => {
    getCategories()
      .then(response => response.json())
      .then((data: any) => {
        setIncome(data?.filter((type: any) => type.cat_type === "I" && !type.is_delete))
        setExpenses(data?.filter((type: any) => type.cat_type === "E" && !type.is_delete))
      })
      .catch(error => console.error("Error fetching categories:", error))
  }

  useEffect(() => {
    income && expenses ? setLoading(false) : setLoading(true)
  }, [income, expenses])

  useEffect(() => {
    fetchCategories()
  }, [])

  return {
    expenses,
    income,
    isLoading,
    fetchCategories
  }
}