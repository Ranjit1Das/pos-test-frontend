'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
// import { loginSuccess } from "../store/slices/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  // const dispatch = useDispatch();
  const router = useRouter();
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   // Ensure code only runs on client-side
  //   setIsClient(true);
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:10001/api/auth/login',
        formData
      );
      // const { user, token } = response.data;
      console.log('print the result : ', response);

      // Dispatch login success action to update Redux state
      // dispatch(loginSuccess({ user, token }));

      // Navigate to the dashboard or home page
      // if (isClient) router.push('/admin/dashboard');
      router.push('/admindash');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="mb-2 p-2 border rounded w-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="mb-4 p-2 border rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
