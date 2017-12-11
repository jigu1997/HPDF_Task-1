import { Platform } from "react-native";

import variable from "./../variables/platform";

export default (variables = variable) => {
  const titleTheme = {
  	".header" :{
  		paddingLeft : 2,
  		textAlign : "left"
  	},
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: Platform.OS === "ios" ? "600" : "300",
    textAlign: "center",

  };

  return titleTheme;
};
