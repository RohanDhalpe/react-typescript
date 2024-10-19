import { axiosInstance } from "./axios";
import { ApiRoute } from "./constants";

export interface getDoctorResponseData {
  id: string;
  full_name: string;
  profile_url: string;
}

export async function getDoctors() {
  const response = await axiosInstance.get<getDoctorResponseData[]>(
    ApiRoute.Doctors
  );
  return response.data;
}

export interface postDoctorsVariables {
  id: number;
  profile_url: string;
  full_name: string;
}

export interface postDoctorResponseData {
  id: string;
  full_name: string;
  profile_url: string;
}

export async function postDoctors(variables: postDoctorsVariables) {
  const { id, profile_url, full_name } = variables;

  const response = await axiosInstance.post<postDoctorResponseData[]>(
    ApiRoute.Doctors,
    { id, profile_url, full_name }
  );
  return response.data;
}
