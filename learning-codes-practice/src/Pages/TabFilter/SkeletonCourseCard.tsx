import "./Skeleton.css";

const SkeletonCourseCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img shimmer"></div>
      <div className="skeleton-text shimmer"></div>
      <div className="skeleton-text short shimmer"></div>
    </div>
  );
};

export default SkeletonCourseCard;
