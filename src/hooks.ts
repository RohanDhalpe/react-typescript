import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getDoctorsList,
  postDoctors,
  postDoctorsVariables,
  postLogin,
  PostLoginVariables,
} from "./api";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "./modules/doctor/components/lib/route";

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

export function useLogin() {
  const navigate = useNavigate();

  const {
    mutate,
    data,
    isError,
    isPending: isLoginPending,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: postLogin,
    onSuccess: () => {
      navigate(RoutePath.Dashboard);
    },
  });

  const sendLoginRequest = (variables: PostLoginVariables) => {
    mutate(variables);
  };

  return {
    data,
    isError,
    sendLoginRequest,
    isLoginPending,
  };
}
