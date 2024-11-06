import { axiosInstance } from "./axios";
import { ApiRoute } from "./components/constants/apiroute";

export interface getDoctorListResponseData {
  success: boolean;
  message: string;
  data: {
    id: string;
    full_name: string;
    email: string;
    country: string;
    mobile_number: string;
  }[];
}

export async function getDoctorsList() {
  const response = await axiosInstance.get<getDoctorListResponseData>(
    ApiRoute.Doctors,
  );
  return response.data;
}

export interface postDoctorsVariables {
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

export async function getDoctorDetals(id: number) {
  const response = await axiosInstance.get<getDoctorListResponseData[]>(
    ApiRoute.Doctors + `${id}`,
  );

  return response.data;
}
