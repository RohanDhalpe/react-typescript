import { useGetDoctors } from "../hooks";

interface Doctor {
  id: string;
  full_name: string;
  profile_url: string;
  email: string;
  password: string;
  country: string;
  mobile_number: string;
  city: string;
}

const DoctorsRQ = () => {
  const { data, isLoading, isError } = useGetDoctors();

  if (isLoading) return <p>Loading..............</p>;
  if (isError) return <p>Error..............</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Doctor Profiles</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {data?.map((doctor: Doctor) => (
          <div
            key={doctor.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ fontWeight: "bold", color: "#007BFF" }}>
              {doctor.full_name}
            </p>
            <p>{doctor.email}</p>
            <a
              href={doctor.profile_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsRQ;
