import { useGetDoctorsList } from "../../hooks";

function DoctorList() {
  const { isError, isLoading, data: doctors } = useGetDoctorsList();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>There was an error fetching the doctor list.</p>;
  }

  return (
    <div>
      <h2>Doctor List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {doctors?.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.full_name}</td>
              <td>{doctor.email}</td>
              <td>{doctor.country}</td>
              <td>{doctor.mobile_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;
