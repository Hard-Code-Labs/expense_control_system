import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query"
import { useSnack } from "@/src/shared/hooks/useSnack";
import { getCategories } from "../services/getCategories";

interface Props {
  offset: number;
  limit: number;
}

export const useGetCategories = ({ offset, limit }: Props) => {
  const { enqueueSnack } = useSnack();

  const { data: categories, error, status, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories({ userMail: "freddyltacuri@gmail.com", offset, limit }),
  })

  useEffect(() => {
    if (status === 'error' && error) {
      enqueueSnack("Error al cargar las categorías", "error");
      console.error(error);
    };
  }, [status, error]);

  const expenses = categories?.categories?.filter((type: any) => type.catType === "E" && !type.isDelete)
  const income = categories?.categories?.filter((type: any) => type.catType === "I" && !type.isDelete)

  //Esta porción de codigo esta puesta hasta corregir el error cuando se pide el id
  expenses?.map((item, index) => {
    return {
      ...item,
      catId: index + 1,
    }
  })
  income?.map((item, index) => {
    return {
      ...item,
      catId: index + 1,
    }
  })

  const hasNextPage = categories?.hasNextPage
  const totalPages = categories?.totalPages

  return {
    expenses,
    income,
    isLoading,
    hasNextPage,
    totalPages,
  }
}
