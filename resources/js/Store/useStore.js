import { create } from 'zustand';

const useStore = create((set) => ({
  isDarkMode: false, 
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
