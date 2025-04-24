import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDailyData } from '../context/DailyDataContext';
import { supabase } from '../utils/supabase';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const {dailyData , setDailyData} = useDailyData();


  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleClick = () => navigate("/dailyform");

  return (
    <div className="flex h-screen bg-neutral-900 text-white">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-48 bg-neutral-800 p-4 flex flex-col justify-between shadow-lg transition-all duration-300">
          <div>
            <h2 className="text-xl font-bold mb-6 text-center tracking-wide">✨ Task Manager</h2>
            <nav className="space-y-3 text-sm">
              <button className="block w-full text-left px-3 py-2 rounded hover:bg-neutral-700 transition">Dashboard</button>
              <button className="block w-full text-left px-3 py-2 rounded hover:bg-neutral-700 transition">My Tasks</button>
              {/* <button className="block w-full text-left px-3 py-2 rounded hover:bg-neutral-700 transition">Progress</button>
              <button className="block w-full text-left px-3 py-2 rounded hover:bg-neutral-700 transition">Planner</button> */}
              <button onClick={handleClick} className="block w-full text-left px-3 py-2 rounded hover:bg-neutral-700 transition"> Write your Schedule</button>
            </nav>
          </div>
          <button
            onClick={handleSignOut}
            className="mt-6 text-center text-sm bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
          >
            Logout
          </button>
        </aside>
      )}

      {/* Sidebar Toggle Tab */}
      <div
        className="w-5 bg-neutral-700 text-white flex items-center justify-center cursor-pointer hover:bg-neutral-600"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="rotate-90 text-xs">|||</span>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Welcome Back 👋</h1>
          <p className="text-neutral-400 mt-1">Here's your submitted schedule for today.</p>
        </header>

        <section className="bg-neutral-800 p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
          {dailyData ? (
            <>
              <h2 className="text-lg font-semibold mb-4 text-white">📅 Today's Schedule Overview</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <strong className="block text-indigo-400">🕒 Schedule:</strong>
                  <p className="text-neutral-300">{dailyData.schedule}</p>
                </div>
                <div>
                  <strong className="block text-indigo-400">📚 Study Goals:</strong>
                  <p className="text-neutral-300">{dailyData.study_goals}</p>
                </div>
                <div>
                  <strong className="block text-indigo-400">💪 Habit Focus:</strong>
                  <p className="text-neutral-300">{dailyData.habit_focus}</p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-neutral-400">No schedule submitted for today. Fill out your schedule to get started.</p>
          )}
        </section>
      </main>
    </div>
  );
}
