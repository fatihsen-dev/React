export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme == "light" ? "dark" : "light",
      };
    case "TOGGLE_LANGUAGE":
      return {
        ...state,
        language: state.language == "tr" ? "en" : "tr",
      };
  }
}
