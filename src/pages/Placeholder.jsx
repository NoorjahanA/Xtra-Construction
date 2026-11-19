import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

// Used for menu links whose pages are not part of this assignment (Blog, Shop, Cart...).
// The link still works and shows a friendly page instead of an error.
function Placeholder({ title }) {
  return (
    <>
      <PageTitle title={title} />
      <section className="placeholder-page">
        <div className="container">
          <h2>{title}</h2>
          <p>This page is not built yet. The assignment only covers the home page.</p>
          <Link to="/" className="btn btn-yellow">Back to Home</Link>
        </div>
      </section>
    </>
  );
}

export default Placeholder;
