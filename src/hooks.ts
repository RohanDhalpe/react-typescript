import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDoctorsList, postDoctors, postDoctorsVariables } from "./api";

export function useGetDoctorsList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: getDoctorsList,
  });

  return {
    isError,
    isLoading,
    data: data?.data || [],
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
