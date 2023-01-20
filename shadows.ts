
import { Colors } from './colors';
import { Measures } from './measures';

const shadowsSemanticUiShadow = {  
           offsetX: Measures.sizingSizesCore0,
           offsetY: Measures.sizingSizesCore100,
           radius: Measures.sizingSizesCore125,
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#00000012",
         };
const shadowsSemanticUiFocus = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           radius: Measures.sizingSizesCore50,
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#0072ce80",
         };
const shadowsSemanticUiError = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           radius: Measures.sizingSizesCore50,
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#b7153a80",
         };
const shadowsSemanticUiWarning = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           radius: Measures.sizingSizesCore50,
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#f2a90080",
         };
const shadowsSemanticUiSuccess = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           radius: Measures.sizingSizesCore50,
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#007a3380",
         };
const shadowsCoreXs = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 2,
                     unit: "Pixels",
                     css: "2px"
                    },
           radius: {
                    measure: 4,
                    unit: "Pixels",
                    css: "4px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#0000001a",
         };
const shadowsCoreSmall = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 2,
                     unit: "Pixels",
                     css: "2px"
                    },
           radius: {
                    measure: 4,
                    unit: "Pixels",
                    css: "4px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#0000001a",
         };
const shadowsCoreMedium = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 6,
                     unit: "Pixels",
                     css: "6px"
                    },
           radius: {
                    measure: 10,
                    unit: "Pixels",
                    css: "10px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#0000001a",
         };
const shadowsCoreLarge = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 8,
                     unit: "Pixels",
                     css: "8px"
                    },
           radius: {
                    measure: 10,
                    unit: "Pixels",
                    css: "10px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#0000001a",
         };
const shadowsCoreXl = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 12,
                     unit: "Pixels",
                     css: "12px"
                    },
           radius: {
                    measure: 17,
                    unit: "Pixels",
                    css: "17px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#0000001a",
         };
const shadowsCoreXxl = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 24,
                     unit: "Pixels",
                     css: "24px"
                    },
           radius: {
                    measure: 38,
                    unit: "Pixels",
                    css: "38px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "#0000001a",
         };
const shadowsCompFormsFocus = shadowsSemanticUiFocus;
const shadowsCompFormsError = shadowsSemanticUiError;
const shadowsCompFormsWarning = shadowsSemanticUiWarning;
const shadowsCompFormsSuccess = shadowsSemanticUiSuccess;


export const Shadows = {
      shadowsSemanticUiShadow,
      shadowsSemanticUiFocus,
      shadowsSemanticUiError,
      shadowsSemanticUiWarning,
      shadowsSemanticUiSuccess,
      shadowsCoreXs,
      shadowsCoreSmall,
      shadowsCoreMedium,
      shadowsCoreLarge,
      shadowsCoreXl,
      shadowsCoreXxl,
      shadowsCompFormsFocus,
      shadowsCompFormsError,
      shadowsCompFormsWarning,
      shadowsCompFormsSuccess,
}