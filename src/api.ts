import { axiosInstance } from "./axios";
import { ApiRoute } from "./constants";

export interface getDoctorResponseData {
  id: string;
  full_name: string;
  profile_url: string;
  email: string;
  password: string;
  country: string;
  mobile_number: string;
  city: string;
}

export async function getDoctors() {
  const response = await axiosInstance.get<getDoctorResponseData[]>(
    ApiRoute.Doctors,
  );
  return response.data;
}

export interface postDoctorsVariables {
  id: number;
  full_name: string;
  profile_url: string;
  email: string;
  password: string;
  country: string;
  mobile_number: string;
  city: string;
}

export interface postDoctorResponseData {
  id: number;
  full_name: string;
  profile_url: string;
  email: string;
  password: string;
  country: string;
  mobile_number: number;
  city: string;
}

export async function postDoctors(variables: postDoctorsVariables) {
  const {
    id,
    full_name,
    profile_url,
    email,
    password,
    country,
    mobile_number,
    city,
  } = variables;

  const response = await axiosInstance.post<postDoctorResponseData[]>(
    ApiRoute.Doctors,
    {
      id,
      profile_url,
      full_name,
      email,
      password,
      country,
      mobile_number,
      city,
    },
  );
  return response.data;
}
