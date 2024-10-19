import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDoctors, postDoctors, postDoctorsVariables } from "./api";

export function useGetDoctors() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors,
  });

  return {
    isError,
    isLoading,
    data,
  };
}
export function useCreateDoctors() {
  const queryClient = useQueryClient();

  const { mutate, data, isError } = useMutation({
    mutationFn: postDoctors,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
    },
  });
  const createDoctor = (variables: postDoctorsVariables) => {
    mutate(variables);
  };

  return {
    data,
    isError,
    createDoctor,
  };
}
