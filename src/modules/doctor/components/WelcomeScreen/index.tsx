import React from "react";
import {
  Users,
  Activity,
  Calendar,
  Clock,
  Award,
  Building,
  LogIn,
} from "lucide-react";
import { RoutePath } from "../lib/route";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const stats = [
    { icon: Users, label: "Active Patients", value: "10,000+" },
    { icon: Building, label: "Healthcare Centers", value: "50+" },
    { icon: Activity, label: "Daily Appointments", value: "500+" },
  ];

  const features = [
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book and manage appointments with just a few clicks",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Access your medical records and services anytime, anywhere",
    },
    {
      icon: Award,
      title: "Quality Care",
      description: "Connect with certified healthcare professionals",
    },
  ];

  const containerStyles: React.CSSProperties = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #3B82F6, #93C5FD)",
    color: "white",
    padding: "4rem 1rem",
  };

  const contentStyles: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headerContainerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3rem",
    padding: "0 1rem",
  };

  const loginButtonStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "9999px",
    fontWeight: "600",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const titleContainerStyles: React.CSSProperties = {
    marginBottom: "3rem",
  };

  const mainTitleStyles: React.CSSProperties = {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const subtitleStyles: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "500",
    marginBottom: "0.5rem",
    color: "rgba(255, 255, 255, 0.9)",
  };

  const subheadingStyles: React.CSSProperties = {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    color: "rgba(255, 255, 255, 0.8)",
  };

  const buttonContainerStyles: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginBottom: "4rem",
  };

  const primaryButtonStyles: React.CSSProperties = {
    backgroundColor: "white",
    color: "#3B82F6",
    padding: "0.75rem 2rem",
    borderRadius: "9999px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const secondaryButtonStyles: React.CSSProperties = {
    backgroundColor: "transparent",
    border: "2px solid white",
    color: "white",
    padding: "0.75rem 2rem",
    borderRadius: "9999px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const statsContainerStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginBottom: "4rem",
  };

  const statCardStyles: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    backdropFilter: "blur(10px)",
  };

  const statValueStyles: React.CSSProperties = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const featuresContainerStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  };

  const featureCardStyles: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    backdropFilter: "blur(10px)",
  };

  const featureTitleStyles: React.CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  };

  const footerStyles: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "1rem",
    marginTop: "4rem",
    textAlign: "center",
  };

  const iconContainerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  };
  const handleLogin = () => {
    navigate(RoutePath.LoginRoute);
  };
  return (
    <div style={containerStyles}>
      <div style={headerContainerStyles}>
        <h2 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>HMS</h2>
        <button style={loginButtonStyles} onClick={() => handleLogin()}>
          <LogIn size={20} />
          Login
        </button>
      </div>

      <div style={contentStyles}>
        <div style={titleContainerStyles}>
          <h1 style={mainTitleStyles}>Healthcare Management System</h1>
          <h2 style={subtitleStyles}>
            Enter a New Era of Healthcare Management
          </h2>
          <p style={subheadingStyles}>
            Manage your operations seamlessly whether you are a doctor, patient,
            or staff member.
          </p>
        </div>

        <div style={buttonContainerStyles}>
          <button
            style={primaryButtonStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get Started
          </button>
          <button
            style={secondaryButtonStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Learn More
          </button>
        </div>

        <div style={statsContainerStyles}>
          {stats.map((stat, index) => (
            <div key={index} style={statCardStyles}>
              <div style={iconContainerStyles}>
                <stat.icon size={24} />
              </div>
              <div style={statValueStyles}>{stat.value}</div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div style={featuresContainerStyles}>
          {features.map((feature, index) => (
            <div key={index} style={featureCardStyles}>
              <div style={iconContainerStyles}>
                <feature.icon size={24} />
              </div>
              <h3 style={featureTitleStyles}>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={footerStyles}>
        <p>© 2024 Healthcare Management System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
