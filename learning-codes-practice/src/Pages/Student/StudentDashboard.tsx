import React, { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";


interface HeatmapData {
  date: string;
  count: number;
}

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
}

const StudentDashboard: React.FC = () => {
  // ---------------- STATES ----------------
  const [heatmapData, setHeatmapData] = useState<HeatmapData[]>([]);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);

  const localizer = momentLocalizer(moment);

  // ---------------- SIMULATE DATA ----------------
  useEffect(() => {
    // Heatmap sample data (past 30 days)
    const today = new Date();
    const past30Days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      return {
        date: date.toISOString().split("T")[0],
        count: Math.floor(Math.random() * 5), // random activity count
      };
    });
    setHeatmapData(past30Days.reverse());

    // Calendar sample events
    setCalendarEvents([
      { title: "React Bootcamp Class", start: new Date(), end: new Date(new Date().getTime() + 60 * 60 * 1000) },
      { title: "Data Science Workshop", start: new Date(new Date().setDate(new Date().getDate() + 1)), end: new Date(new Date().setDate(new Date().getDate() + 1)) },
    ]);

    // Live notifications simulation
    const interval = setInterval(() => {
      const messages = [
        "New student enrolled in React Bootcamp",
        "Assignment submitted for Data Science Masterclass",
        "Instructor request pending approval",
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      toast.info(randomMsg);
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginLeft: "250px", padding: "80px", minHeight: "100vh" }}>
      <ToastContainer position="top-right" autoClose={4000} />

      <h3 className="mb-3">Student Activity Heatmap (Last 30 days)</h3>
      <CalendarHeatmap
        startDate={new Date(new Date().setDate(new Date().getDate() - 29))}
        endDate={new Date()}
        values={heatmapData}
        classForValue={(value:any) => {
          if (!value) return "color-empty";
          if (value.count >= 4) return "color-scale-4";
          if (value.count >= 3) return "color-scale-3";
          if (value.count >= 2) return "color-scale-2";
          if (value.count >= 1) return "color-scale-1";
          return "color-empty";
        }}
        // tooltipDataAttrs={(value:any) => ({
        //   "data-tip": value ? `${value.date}: ${value.count} activity` : "No activity",
        // })}
      />

      <h3 className="mt-5 mb-3">Schedule Calendar</h3>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
      />
    </div>
  );
};

export default StudentDashboard;
