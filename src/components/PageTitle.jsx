import { Link } from 'react-router-dom';
import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';

// The cream bar under the menu on inner pages: page name on the left, breadcrumb on the right.
function PageTitle({ title }) {
  return (
    <div className="page-title">
      <div className="container">
        <h1>{title}</h1>
        <p className="breadcrumb">
          <Link to="/" aria-label="Home"><FaHome /></Link>
          <FaAngleDoubleRight />
          <span>{title}</span>
        </p>
      </div>
    </div>
  );
}

export default PageTitle;
