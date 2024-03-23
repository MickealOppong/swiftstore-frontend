import { createSlice } from "@reduxjs/toolkit";


const themes = {
  autumn: "autumn",
  dim: "dim"
}

const getThemeFromStorage = () => {
  const theme = localStorage.getItem('theme') || themes.autumn;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}

const initialState = {
  user: { username: 'epps' },
  theme: getThemeFromStorage()
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: () => {
      console.log('user login');
    },
    logoutUser: () => {
      console.log('user logout');
    },
    toggleTheme: (state) => {
      const { dim, autumn } = themes;
      state.theme = state.theme === autumn ? dim : autumn;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    }
  }
})
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;