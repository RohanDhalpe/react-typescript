import { CSSProperties } from "react";
import { UserPlus, LogOut } from "lucide-react";

function DoctorDashboard() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Dashboard Menu</h2>
        <ul style={styles.menuList}>
          <li style={styles.menuItem}>View All Doctors</li>
          <li style={styles.menuItem}>Doctor Analytics</li>
        </ul>
        <div style={styles.bottomIcons}>
          <div style={styles.iconWrapper}>
            <UserPlus style={styles.sidebarIcon} />
            <span style={styles.iconText}>User</span>
          </div>
          <div style={styles.iconWrapper} onClick={handleLogout}>
            <LogOut style={styles.sidebarIcon} />
            <span style={styles.iconText}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const handleLogout = () => {
  console.log("Logging out...");
};

const styles: { [key: string]: CSSProperties } = {
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
  },
  sidebarTitle: {
    fontSize: "1.5rem",
    color: "#fff",
    marginBottom: "1.5rem",
  },
  menuList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  menuItem: {
    padding: "10px 0",
    cursor: "pointer",
    fontSize: "1rem",
    borderBottom: "1px solid #444",
  },
  bottomIcons: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 0",
    cursor: "pointer",
  },
  sidebarIcon: {
    marginRight: "0.5rem",
    color: "#fff",
  },
  iconText: {
    color: "#fff",
    fontSize: "0.875rem",
  },
  mainContent: {
    flex: 1,
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    overflowY: "auto",
  },
  title: {
    display: "flex",
    alignItems: "center",
    fontSize: "2rem",
    color: "#333",
  },
  icon: {
    marginRight: "0.5rem",
  },
  description: {
    color: "#666",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default DoctorDashboard;
