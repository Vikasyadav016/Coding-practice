import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css"; // Import the CSS file

const Breadcrumb = () => {
  const location = useLocation();

  // Split path into segments and capitalize each word
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .map((segment) =>
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );

    console.log("pathnames",pathnames)

  return (
    <nav className="breadcrumb">
      <div className="breadcrumb-container">
        {pathnames.map((name, index) => {
          const routeTo = `${location.pathname
            .split("/")
            .slice(1, index + 2)
            .join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <span key={routeTo} className="breadcrumb-item">
              {/* <span className="breadcrumb-separator"></span> */}
              {isLast ? (
                <span className="breadcrumb-current">{name}</span>
              ) : (
                <Link to={routeTo} className="breadcrumb-link">
                  {name}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
