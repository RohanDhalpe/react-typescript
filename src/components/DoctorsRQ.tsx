// import { useQuery } from "@tanstack/react-query";
// import { getDoctors } from "../api";
import { useGetDoctors } from "../hooks";

interface Doctor {
  id: string;
  full_name: string;
  profile_url: string;
}

const DoctorsRQ = () => {
  const { data, isLoading, isError } = useGetDoctors();

  if (isLoading) return <p>Loading..............</p>;
  if (isError) return <p>Error..............</p>;

  return (
    <div>
      <div>
        {data?.map((doctor: Doctor) => (
          <div key={doctor.id}>
            <p>{doctor.profile_url}</p>
            <p>{doctor.full_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsRQ;
