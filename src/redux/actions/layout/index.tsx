// ** Handles Layout Content Width (full / boxed)
export const handleContentWidth = (value: any) => (dispatch: any) =>
  dispatch({ type: "HANDLE_CONTENT_WIDTH", value });

// ** Handles Menu Collapsed State (Bool)
export const handleMenuCollapsed = (value: any) => (dispatch: any) =>
  dispatch({ type: "HANDLE_MENU_COLLAPSED", value });

// ** Handles Menu Hidden State (Bool)
export const handleMenuHidden = (value: any) => (dispatch: any) =>
  dispatch({ type: "HANDLE_MENU_HIDDEN", value });

// ** Handles RTL (Bool)
export const handleRTL = (value: any) => (dispatch: any) =>
  dispatch({ type: "HANDLE_RTL", value });

// ** Handle Layout Skin
export const handleSkin = (value: any) => (dispatch: any) =>
  dispatch({ type: "HANDLE_SKIN", value });
