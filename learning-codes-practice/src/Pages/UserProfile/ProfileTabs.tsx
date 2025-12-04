import React from "react";

const tabs = [
  "overview",
  "personal",
  "contact",
  "bio",
  "education",
  "experience",
  "preferences",
  "security",
  "activity",
];

const ProfileTabs = ({ current, onChange }: any) => {
  return (
    <div style={styles.tabContainer}>
      {tabs.map((t) => (
        <span
          key={t}
          style={{
            ...styles.tab,
            ...(current === t ? styles.activeTab : {}),
          }}
          onClick={() => onChange(t)}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </span>
      ))}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  tabContainer: {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    paddingBottom: "10px",
  },
  tab: {
    padding: "8px 16px",
    cursor: "pointer",
    borderRadius: "8px",
    background: "#f2f2f2",
    transition: "0.2s",
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  activeTab: {
    background: "#007bff",
    color: "white",
    fontWeight: 600,
  },
};

export default ProfileTabs;
