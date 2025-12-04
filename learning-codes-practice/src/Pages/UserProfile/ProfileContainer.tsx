import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfilePersonal from "./ProfilePersonal";
import ProfileContact from "./ProfileContact";
import ProfileBio from "./ProfileBio";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfilePreferences from "./ProfilePreferences";
import ProfileSecurity from "./ProfileSecurity";
import ProfileActivity from "./ProfileActivity";


const dummyData = {
  avatar: "https://i.pravatar.cc/200?img=12",
  banner: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  name: "Amit Kumar",
  role: "Tutor",
  email: "amit@example.com",
  phone: "+91 9876543210",
  gender: "Male",
  dob: "1994-05-15",
  address: "Mumbai, India",
  city: "Mumbai",
  state: "Maharashtra",
  country: "India",
  joinedOn: "Jan 12, 2022",
  bio: "Dedicated tutor with 5+ years of experience...",
  website: "https://amitkumar.com",
  linkedin: "https://linkedin.com/in/amit",
  twitter: "https://twitter.com/amit_tutor",
  youtube: "https://youtube.com/amitTutor",
  education: [
    { degree: "B.Sc. Physics", institute: "Delhi University", year: 2015 },
    { degree: "M.Sc. Physics", institute: "IIT Mumbai", year: 2018 },
  ],
  experience: [
    { title: "Senior Tutor", org: "Topper Institute", years: "2018–2021" },
    { title: "Freelance Tutor", org: "Self-employed", years: "2021–Present" },
  ],
  preferences: {
    theme: "light",
    language: "English",
    emailNotifications: true,
    smsNotifications: false,
  },
  security: {
    twoFactorEnabled: true,
    lastPasswordChange: "2024-02-10",
  },
  activity: {
    courses: 12,
    students: 480,
    reviews: 130,
  },
};

const ProfileContainer: React.FC = () => {
  const [tab, setTab] = useState("overview");
  const [user, setUser] = useState(dummyData);
  const [loading, setLoading] = useState(true);

  // Simulate API call (later replace with real API)
  useEffect(() => {
    setTimeout(() => {
      setUser(dummyData);
      setLoading(false);
    }, 700);
  }, []);

  if (loading) return <div style={styles.loader}>Loading...</div>;

  return (
    <div style={styles.wrapper}>
      <ProfileHeader user={user} />

      <ProfileTabs current={tab} onChange={setTab} />

      <div style={styles.card}>
        {/* {tab === "overview" && <ProfileOverview user={user} />} */}
        {tab === "personal" && <ProfilePersonal user={user} />}
        {tab === "contact" && <ProfileContact user={user} />}
        {tab === "bio" && <ProfileBio user={user} />}
        {tab === "education" && <ProfileEducation user={user} />}
        {tab === "experience" && <ProfileExperience user={user} />}
        {tab === "preferences" && <ProfilePreferences user={user} />}
        {tab === "security" && <ProfileSecurity user={user} />}
        {tab === "activity" && <ProfileActivity user={user} />}
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    maxWidth: "900px",
    margin: "auto",
    paddingBottom: "40px",
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    marginTop: "20px",
    animation: "fadeIn 0.3s ease",
  },
  loader: {
    textAlign: "center",
    padding: "50px",
    fontSize: "22px",
    fontWeight: 600,
  },
};

export default ProfileContainer;
