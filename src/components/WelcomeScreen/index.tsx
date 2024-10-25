import React from "react";

const WelcomeScreen = () => {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6D83F2, #9BC4F5)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const contentStyles: React.CSSProperties = {
    textAlign: "center",
  };

  const headingStyles: React.CSSProperties = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const paragraphStyles: React.CSSProperties = {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  };

  const buttonContainerStyles: React.CSSProperties = {
    display: "flex",
    gap: "20px",
  };

  const buttonStyles: React.CSSProperties = {
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const doctorButtonStyles: React.CSSProperties = {
    ...buttonStyles,
    backgroundColor: "#28A745",
  };

  const patientButtonStyles: React.CSSProperties = {
    ...buttonStyles,
    backgroundColor: "#FFC107",
  };

  const staffButtonStyles: React.CSSProperties = {
    ...buttonStyles,
    backgroundColor: "#17A2B8",
  };

  return (
    <div style={styles}>
      <div style={contentStyles}>
        <h1 style={headingStyles}>
          Welcome to the Healthcare Management System
        </h1>
        <p style={paragraphStyles}>
          Manage your operations seamlessly whether you are a doctor, patient,
          or staff member.
        </p>
        <div style={buttonContainerStyles}>
          <button
            style={doctorButtonStyles}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#218838")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#28A745")
            }
          >
            Create Doctor
          </button>
          <button
            style={patientButtonStyles}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#E0A800")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#FFC107")
            }
          >
            Patient Portal
          </button>
          <button
            style={staffButtonStyles}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#138496")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#17A2B8")
            }
          >
            Staff Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
