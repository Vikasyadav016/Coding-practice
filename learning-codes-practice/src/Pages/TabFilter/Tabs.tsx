import { useEffect, useRef } from "react";
import "./Tabs.css";

const Tabs = ({ tabs, activeTab, onTabChange }:any) => {
  const indicatorRef = useRef<any>('');

  useEffect(() => {
    const activeButton:any = document.querySelector(".tab-btn.active");
    if (activeButton && indicatorRef.current) {
      indicatorRef.current.style.width = activeButton.offsetWidth + "px";
      indicatorRef.current.style.left = activeButton.offsetLeft + "px";
    }
  }, [activeTab]);

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        {tabs.map((tab:any) => (
          <button
            key={tab.label}
            className={`tab-btn ${activeTab === tab.label ? "active" : ""}`}
            onClick={() => onTabChange(tab.label)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
        <span className="tab-indicator" ref={indicatorRef}></span>
      </div>
    </div>
  );
};

export default Tabs;
