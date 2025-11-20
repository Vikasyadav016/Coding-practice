import React from "react";

const PopupMessage = ({
  message = "This is a message",
  type = "info", // 'success', 'error', 'warning', 'info'
  visible = false,
  width = "250px",
  height = "auto",
  backgroundColor,
  color = "#fff",
  borderRadius = "6px",
  position = "top-right", // 'top-left','top-right','bottom-left','bottom-right','center'
  onClose,
  duration = 3000, // auto close timeout
}:any) => {
  if (!visible) return null;

  // Default colors based on type
  const typeColors:any = {
    success: "#2ecc71",
    error: "#e74c3c",
    warning: "#f1c40f",
    info: "#3498db",
  };

  const popupBg = backgroundColor || typeColors[type] || "#3498db";

  // Position logic
  const positions:any = {
    "top-right": { top: "20px", right: "20px" },
    "top-left": { top: "20px", left: "20px" },
    "bottom-right": { bottom: "20px", right: "20px" },
    "bottom-left": { bottom: "20px", left: "20px" },
    center: {
      top: "50%", left: "50%",
      transform: "translate(-50%, -50%)"
    },
  };

  // Auto close
  React.useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => onClose && onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div
      style={{
        position: "fixed",
        padding: "12px 16px",
        width,
        height,
        color,
        backgroundColor: popupBg,
        borderRadius,
        zIndex: 9999,
        fontSize: "14px",
        boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ...positions[position],
      }}
    >
      <span>{message}</span>
      {onClose && (
        <span
          onClick={onClose}
          style={{ marginLeft: "10px", cursor: "pointer", fontWeight: "bold" }}
        >
          ×
        </span>
      )}
    </div>
  );
};

export default PopupMessage;
