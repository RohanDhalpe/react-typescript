import axios from "axios";
import { useState, useEffect } from "react";

interface Doctor {
  id: string;
  profile_url: string;
  full_name: string;
}

function DoctorTraditional() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErrror, setIsError] = useState(false);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:4000/doctors");
      setDoctors(response.data);
    } catch (err) {
      console.log("error", err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  if (isLoading) return <p>Loading..............</p>;
  if (isErrror) return <p>Error..............</p>;

  return (
    <div>
      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <div>{doctor.full_name}</div>
        </div>
      ))}
    </div>
  );
}

export default DoctorTraditional;
