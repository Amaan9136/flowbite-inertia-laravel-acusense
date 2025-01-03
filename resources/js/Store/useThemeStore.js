import { create } from 'zustand';

window.addEventListener('storage', () => {
  const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
  if (isDarkMode !== null) {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }
});

const useStore = create((set) => ({
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false,

  toggleTheme: () => {
    set((state) => {
      const newDarkMode = !state.isDarkMode;
      document.documentElement.classList.toggle('dark', newDarkMode);
      
      localStorage.setItem('isDarkMode', JSON.stringify(newDarkMode));

      return { isDarkMode: newDarkMode };
    });
  },
}));

export default useStore;
