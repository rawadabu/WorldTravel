import { Link } from "react-router-dom";
import PageNav from "../components/pages/PageNav";
import AppNav from "../components/pages/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">World Travel</h1>

      <Link to="layout">Go to the app layout</Link>
    </div>
  );
}

export default Homepage;
