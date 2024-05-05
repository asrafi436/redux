

const iniTheme = {
    txtColor: "black",
    txtSize: "12px",
    bgColor: "white",
  };
  
  export function themeReducer(state = iniTheme , action) {
    switch (action.type) {
      case "text/fontSize":
        return { ...state, txtSize: action.value };
      case "text/fontColor":
        return { ...state, txtColor: action.value };
      case "text/backgroundColor":
        return { ...state, bgColor: action.value };
      case "text/reset":
        return iniTheme;
      default:
        return state;
    }
  }
