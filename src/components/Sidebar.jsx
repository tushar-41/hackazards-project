import { useNavigate } from "react-router-dom";

export default function Sidebar({ onLogout }) {
    return (
      <div className="w-64 h-full bg-indigo-800 text-white p-6 fixed top-0 left-0">
        <h2 className="text-2xl font-bold mb-6">AI Mentor</h2>
            <button
              onClick={onLogout}
              className="mt-4 px-3 py-1 bg-red-500 rounded hover:bg-red-600 transition"
            >
              Sign Out
            </button>
      </div>
    );
  }
  