import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-600 to-purple-800 flex flex-col justify-center items-center text-white p-6">
      <h1 className="text-5xl font-bold mb-6 text-center drop-shadow-md">
        Your Personal <span className="text-yellow-300">AI Mentor</span>
      </h1>

      <button
        onClick={() => navigate('/auth')}
        className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition-all"
      >
        Get Started
      </button>
    </div>
  );
}

