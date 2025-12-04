import { Row, Col, Card } from "react-bootstrap";
import { getCoursePopularity, getHeatmapData, getMonthlyEnrollments, getTutorStats, getWeeklyEngagement } from "../../Services/analyticsService";
import KPIStats from "./KPIStats";
import EnrollmentBarChart from "./EnrollmentBarChart";
import EngagementLineChart from "./EngagementLineChart";
import CoursePieChart from "./CoursePieChart";
import StudentHeatmap from "./StudentHeatmap";
import TutorDashboard from "./TutorDashboard";
import NotificationBell from "../../Notification/NotificationBell";

const AnalyticsDashboard = () => {
    const stats = getTutorStats();
    const heatmapData = getHeatmapData();
    const monthly = getMonthlyEnrollments();
    const weekly = getWeeklyEngagement();
    const popularity = getCoursePopularity();

    return (
        <div className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">👨‍🏫 Tutor Analytics Dashboard</h2>
                <button className="btn btn-primary shadow-sm">
                    <i className="bi bi-plus-circle"></i> Add New Course
                </button>
            </div>

            <KPIStats stats={stats} />

            <Row>
                <Col lg={8} className="mb-3">
                    <Card className="p-3 mb-3">
                        <EnrollmentBarChart data={monthly} />
                    </Card>

                    <Card className="p-3 mb-3" >
                        <EngagementLineChart data={weekly} />
                    </Card>

                    <Card className="p-3" style={{ height: "250px", width: '35rem' }}>
                        <StudentHeatmap data={heatmapData} />
                    </Card>
                </Col>

                <Col lg={4} className="mb-3">

                     <Card className="p-3 mb-3" style={{ height: "400px" }}>
                         <NotificationBell />
                    </Card>

                    <Card className="p-3 mb-3" style={{ height: "400px" }}>
                        <CoursePieChart data={popularity} />
                    </Card>
                </Col>
            </Row>
            <TutorDashboard />
        </div>
    );
};

export default AnalyticsDashboard;
