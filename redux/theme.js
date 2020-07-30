export const Themes = { dark: "dark", light: "light" };

// Action Types
const SET_THEME_MODE = "SET_THEME_MODE";

// Selectors

export const MODULE_NAME = "theme";
export const selectTheme = (state) => state[MODULE_NAME][state.themeStatus];

// Reducer

const initialState = {
  themeStatus: Themes.dark,
  [Themes.dark]: {},
  [Themes.light]: {},
};


// not enough time to do dark mode (((
export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
