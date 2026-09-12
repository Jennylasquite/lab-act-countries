import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <h1>Countries of the World</h1>

      <Link to="/countries" className="btn btn-primary">
        Browse Countries
      </Link>
    </div>
  );
};

export default HomePage;