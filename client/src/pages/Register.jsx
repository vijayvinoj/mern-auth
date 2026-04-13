import { useState } from 'react';
import { registerUser } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm]   = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login }         = useAuth();
  const navigate          = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

	//validation
	if (!form.name || !form.email || !form.password) {
      return setError('All fields are required');
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return setError('Enter a valid email address');
    }
    if (form.password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    try {
      const { data } = await registerUser(form);
      login(data.token, data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input name="name"     placeholder="Name"     onChange={handleChange} />
      <input name="email"    placeholder="Email"    onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
