import { useState } from 'react';
import { supabase } from '../utils/supabase';

export default function Auth() {
  const [authType, setAuthType] = useState('sign-in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleAuth = async () => {
    let result;

    if (authType === 'sign-in') {
      result = await supabase.auth.signInWithPassword({ email, password });
    } else {
      result = await supabase.auth.signUp({ email, password });
    }

    if (result.error) {
      setFeedback(result.error.message);
    } else {
      setFeedback(
        authType === 'sign-in'
          ? 'Signed in successfully!'
          : 'Sign up successful! Check your email for verification.'
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-800 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
          {authType === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {feedback && <p className="text-center text-sm text-red-500 mb-3">{feedback}</p>}

        <button
          onClick={handleAuth}
          className="w-full bg-indigo-700 text-white py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-all"
        >
          {authType === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          {authType === 'sign-in' ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="text-indigo-700 underline font-medium"
            onClick={() =>
              setAuthType(authType === 'sign-in' ? 'sign-up' : 'sign-in')
            }
          >
            {authType === 'sign-in' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
}
