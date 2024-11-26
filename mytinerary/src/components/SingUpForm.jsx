import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/actions/actionAuth';
import { NavLink } from 'react-router-dom';
import { fetchCities } from '../store/actions/actionFetchCities';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userPhoto: '',
    country: '',
  });

  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state) => state.authStore);

  useEffect(() => {
    dispatch(fetchCities("")); // Obtiene las ciudades cuando el componente se monta
  }, [dispatch]);

  const { cities } = useSelector((state) => state.cities);

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:8080/api/auth/signIn/google";
  };

  const uniqueCities = [
    ...new Map(cities.map((city) => [city.country, city])).values(),
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)); // Despachar la acción de registro
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/1f/60/0d/1f600d97edc4709539787f7402758c46.jpg')`,
      }}
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat from-teal-500 via-blue-600 to-purple-700 p-4"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mt-24 p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="userPhoto"
              value={formData.userPhoto}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="" disabled>
                Select your country...
              </option>
              {uniqueCities.map((city, index) => (
                <option key={index} value={city.country}>
                  {city.country}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        
        {loading && <p className="mt-4 text-center text-blue-500">Registering...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        {successMessage && <p className="mt-4 text-center text-green-500">{successMessage}</p>}

        <button
          type="button"
          onClick={loginWithGoogle}
          className="w-full mt-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300"
        >
          Sign Up with Google
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <NavLink to="/signin" className="text-teal-600 font-semibold hover:underline">
            Log In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
