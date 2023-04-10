/* 
    EXEMPLO DE CUSTOM HOOK  
===> NÃO ESTA SENDO USADO <=== 
*/

import { useEffect, useState } from "react";
import { api } from "../services/api";

export const useQuery = (path: String) => {
  const [isLoading, setIsLoanding] = useState(true);
  const [error, setError] = useState();
  const [result, setResult] = useState<any>();

  useEffect(() => {
    api.get(`${path}`)
      .then((response) => {
        setResult(response);
        setIsLoanding(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoanding(false);
      });
  }, []);

  return {
    isLoading,
    error,
    result,
  };
};
