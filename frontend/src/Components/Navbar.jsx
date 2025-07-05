import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-700 text-white shadow">
      <div className="text-xl font-bold">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 hover:text-blue-200 transition"
        >
          <span role="img" aria-label="logo">📝</span> TodoApp
        </Link>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-100 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
