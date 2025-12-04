import React, { useState } from "react";
import { Bell } from "react-bootstrap-icons";

const NotificationBell: React.FC = () => {
  const [notifications, setNotifications] = useState<
    { id: number; text: string; read: boolean }[]
  >([
    { id: 1, text: "New student enrolled!", read: false },
    { id: 2, text: "Your course received a new review.", read: false },
  ]);

  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleOpen = () => {
    const nextOpen = !open;
    setOpen(nextOpen);

    // Mark all as read when opening
    if (!open) {
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, read: true }))
      );
    }
  };

  // Adds a notification dynamically (you can call this anywhere)
  const addNotification = (text: string) => {
    setNotifications((prev) => [
      { id: Date.now(), text, read: false },
      ...prev,
    ]);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* BELL ICON */}
      <div onClick={toggleOpen} style={styles.bellContainer}>
        <Bell size={26} />

        {unreadCount > 0 && <span style={styles.badge}>{unreadCount}</span>}
      </div>

      {/* DROPDOWN LIST */}
      {open && (
        <div style={styles.dropdown}>
          <h6 style={{ marginBottom: "10px", fontWeight: 600 }}>Notifications</h6>

          {notifications.length === 0 ? (
            <p style={{ color: "#666", fontSize: "14px" }}>No notifications</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                style={{
                  ...styles.item,
                  backgroundColor: n.read ? "#f8f9fa" : "#e7f1ff",
                }}
              >
                {n.text}
              </div>
            ))
          )}
        </div>
      )}

      {/* EXAMPLE BUTTON TO TRIGGER NEW NOTIFICATION */}
      <button
        onClick={() => addNotification("New message received!")}
        style={{ marginTop: "20px" }}
      >
        Add Notification
      </button>
    </div>
  );
};

/* -------------------------------- */
/* STYLES (Fully Typed)             */
/* -------------------------------- */

const bellContainer: React.CSSProperties = {
  cursor: "pointer",
  position: "relative",
};

const badge: React.CSSProperties = {
  position: "absolute",
  top: "-5px",
  right: "-5px",
  background: "red",
  color: "white",
  padding: "2px 6px",
  borderRadius: "50%",
  fontSize: "12px",
  fontWeight: "bold",
};

const dropdown: React.CSSProperties = {
  position: "absolute",
  right: 0,
  top: "35px",
  width: "260px",
  background: "white",
  borderRadius: "6px",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.15)",
  padding: "12px",
  zIndex: 20,
};

const item: React.CSSProperties = {
  padding: "10px",
  borderRadius: "4px",
  marginBottom: "6px",
  cursor: "default",
  fontSize: "14px",
};

const styles = {
  bellContainer,
  badge,
  dropdown,
  item,
};

export default NotificationBell;
