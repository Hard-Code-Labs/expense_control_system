import { useQuery } from "@tanstack/react-query"
import { getCountries } from "../services/getCountries"
import { useSnack } from "@/src/shared/hooks/useSnack";
import { useEffect } from "react";

export const useCountry = () => {
  const { enqueueSnack } = useSnack();

  const { data: countries, error, status } = useQuery({
    queryKey: ['country'],
    queryFn: getCountries,
    refetchOnWindowFocus: false,
    retry: false,
  })

  useEffect(() => {
    if (status === 'error' && error) {
      enqueueSnack("Error al cargar los países", "error");
    };
  }, [status, error]);

  return {
    countries
  }
}