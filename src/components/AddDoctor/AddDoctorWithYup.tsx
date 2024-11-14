import { useCreateDoctors } from "../../hooks";
import { useFormik } from "formik";
import { DoctorFormData, DoctorSchema } from "./schema";

function AddDoctorWithYupComponent() {
  const { createDoctor } = useCreateDoctors();

  const handleSubmit = async (values: DoctorFormData) => {
    const doctorVariables = {
      full_name: values.fullName,
      profile_url: values.profileUrl,
      email: values.email,
      password: values.password,
      country: values.country,
      mobile_number: values.mobileNumber,
    };

    try {
      createDoctor(doctorVariables);
      formik.resetForm();
    } catch (error) {
      console.error("Failed to add doctor:", error);
    }
  };

  const formik = useFormik<DoctorFormData>({
    initialValues: {
      fullName: "",
      profileUrl: "",
      email: "",
      password: "",
      country: "",
      mobileNumber: "",
    },
    validationSchema: DoctorSchema,
    onSubmit: handleSubmit,
  });

  const { values, errors, handleChange, handleBlur, touched } = formik;

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Doctor</h2>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          name="fullName"
          placeholder="Enter doctor full name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.fullName}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        {touched.fullName && errors.fullName ? (
          <div style={{ color: "red" }}>{errors.fullName}</div>
        ) : null}

        <input
          name="profileUrl"
          placeholder="Enter profile URL"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.profileUrl}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        {touched.profileUrl && errors.profileUrl ? (
          <div style={{ color: "red" }}>{errors.profileUrl}</div>
        ) : null}

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        {touched.email && errors.email ? (
          <div style={{ color: "red" }}>{errors.email}</div>
        ) : null}

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        {touched.password && errors.password ? (
          <div style={{ color: "red" }}>{errors.password}</div>
        ) : null}

        <input
          name="country"
          placeholder="Enter country"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.country}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        {touched.country && errors.country ? (
          <div style={{ color: "red" }}>{errors.country}</div>
        ) : null}

        <input
          name="mobileNumber"
          placeholder="Enter mobile number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.mobileNumber || ""}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        {touched.mobileNumber && errors.mobileNumber ? (
          <div style={{ color: "red" }}>{errors.mobileNumber}</div>
        ) : null}

        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
}

export default AddDoctorWithYupComponent;
