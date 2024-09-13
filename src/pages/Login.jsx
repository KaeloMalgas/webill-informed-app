import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userType === 'admin' && ((email === 'admin@example.com' && password === 'admin123') || (email === 'admin@email.com' && password === '1234@'))) {
      navigate('/admin');
    } else if (userType === 'consumer' && email === 'consumer@example.com' && password === 'consumer123') {
      navigate('/consumer');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <select
              className="w-full p-2 border rounded"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="consumer">Consumer</option>
            </select>
          </div>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <div className="mt-4 text-center">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up as a consumer</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;