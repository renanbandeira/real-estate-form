import { DefaultAction } from "./types";

export const SUBMIT_FORM = "SUBMIT_FORM";
export const SET_FULL_NAME = "SET_FULL_NAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PHONE_NUMBER = "SET_PHONE_NUMBER";
export const SET_SALARY_INDICATOR = "SET_SALARY_INDICATOR";

export const setFullName = (fullName: string): DefaultAction => ({
  type: SET_FULL_NAME,
  payload: fullName,
});

export const setEmail = (email: string): DefaultAction => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPhoneNumber = (phoneNumber: string): DefaultAction => ({
  type: SET_PHONE_NUMBER,
  payload: phoneNumber,
});

export const setSalaryIndicator = (salaryIndicator: string): DefaultAction => ({
  type: SET_SALARY_INDICATOR,
  payload: salaryIndicator,
});
