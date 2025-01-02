import { create } from 'zustand';

const useStore = create((set) => ({
  isDarkMode: false, 
  toggleTheme: () => {
    set((state) => {
      const newDarkMode = !state.isDarkMode;
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { isDarkMode: newDarkMode };
    });
  },
}));

export default useStore;
