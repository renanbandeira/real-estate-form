import * as actions from "./actions";
import { AppState, DefaultAction } from "./types";

export const initialState = {
  fullName: "",
  phoneNumber: "",
  email: "",
  salaryIndicator: "",
  currentStep: 0,
};

export const reducer = (state: AppState, action: DefaultAction): AppState => {
  switch (action.type) {
    case actions.SET_FULL_NAME:
      return {
        ...state,
        fullName: action.payload,
        currentStep: 1,
      };
    case actions.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
        currentStep: 2,
      };
    case actions.SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
        currentStep: 3,
      };
    case actions.SET_SALARY_INDICATOR:
      return {
        ...state,
        salaryIndicator: action.payload,
        currentStep: 4,
      };
    default:
      return initialState;
  }
};
