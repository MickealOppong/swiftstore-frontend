import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const themes = {
  autumn: "autumn",
  dim: "dim"
}

const getThemeFromStorage = () => {
  const theme = localStorage.getItem('theme') || themes.autumn;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}
const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
}
const initialState = {
  user: getUserFromStorage(),
  theme: getThemeFromStorage()
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user))
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user')
      toast.success("user logout successfully")
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