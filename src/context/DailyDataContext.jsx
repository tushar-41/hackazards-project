import { createContext, useContext, useState } from 'react';

const DailyDataContext = createContext();

export const DailyDataProvider = ({ children }) => {
  const [dailyData, setDailyData] = useState(null);

  return (
    <DailyDataContext.Provider value={{ dailyData, setDailyData }}>
      {children}
    </DailyDataContext.Provider>
  );
};

export const useDailyData = () => useContext(DailyDataContext);
