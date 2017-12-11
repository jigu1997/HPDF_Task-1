import variable from "./../variables/platform";

export default (variables = variable) => {
  const textTheme = {

    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    ".note": {
      color: "#a7a7a7",
      fontSize: 12//variables.noteFontSize
    },
    ".boldNote": {
      color: "#a7a7a7",
      fontSize: 15//variables.noteFontSize
    },
    ".bold": {
    margin : 0,
    fontSize: variables.DefaultFontSize-1,
    color :'#000000'
    
    },
    ".extraBold": {
    margin : 0,
    fontSize: 25,
    color :'#000000'
    
    }
  };

  return textTheme;
};
