import { useState } from 'react';
import { useDailyData } from '../context/DailyDataContext';
import { useNavigate } from 'react-router-dom';

export default function DailyForm() {
  const { setDailyData } = useDailyData();
  const [schedule, setSchedule] = useState('');
  const [studyGoals, setStudyGoals] = useState('');
  const [habitFocus, setHabitFocus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];

    setDailyData({
      schedule,
      study_goals: studyGoals,
      habit_focus: habitFocus,
      date: today,
    });

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-neutral-900 rounded-xl p-8 shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-white">🗓️ Plan Your Day</h2>

        <textarea className="w-full p-3 bg-neutral-800" value={schedule} onChange={(e) => setSchedule(e.target.value)} required placeholder="Daily schedule..." />
        <input className="w-full p-3 bg-neutral-800" value={studyGoals} onChange={(e) => setStudyGoals(e.target.value)} required placeholder="Study goals..." />
        <input className="w-full p-3 bg-neutral-800" value={habitFocus} onChange={(e) => setHabitFocus(e.target.value)} required placeholder="Habit focus..." />

        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 transition px-4 py-3 rounded text-white font-semibold">
          Save Your Schedule
        </button>
      </form>
    </div>
  );
}
