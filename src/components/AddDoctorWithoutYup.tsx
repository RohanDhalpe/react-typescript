// import { useState } from "react";
// import { useCreateDoctors } from "../hooks";

// const AddDoctorWithoutYup = () => {
//   const [fullname, setFullName] = useState("");
//   const [profileUrl, setProfileUrl] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [country, setCountry] = useState("");
//   const [mobileNumber, setMobileNumber] = useState(0);
//   const [city, setCity] = useState("");

//   const { createDoctor } = useCreateDoctors();

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     createDoctor({
//       full_name: fullname,
//       profile_url: profileUrl,
//       email: email,
//       password: password,
//       country: country,
//       mobile_number: mobileNumber,
//       city: city,
//       id: 10,
//     });

//     setFullName("");
//     setProfileUrl("");
//     setEmail("");
//     setPassword("");
//     setCountry("");
//     setMobileNumber(0);
//     setCity("");
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "0 auto",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Doctor</h2>
//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", flexDirection: "column", gap: "10px" }}
//       >
//         <input
//           type="text"
//           value={fullname}
//           onChange={(e) => setFullName(e.target.value)}
//           placeholder="Enter doctor full name"
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={profileUrl}
//           onChange={(e) => setProfileUrl(e.target.value)}
//           placeholder="Enter profile URL"
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter email"
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter password"
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//           placeholder="Enter country"
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={mobileNumber}
//           onChange={(e) => setMobileNumber(e.target.value)}
//           placeholder="Enter mobile number"
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city"
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "none",
//             backgroundColor: "#007BFF",
//             color: "white",
//             cursor: "pointer",
//           }}
//         >
//           Add Doctor
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddDoctorWithoutYup;

export {};
