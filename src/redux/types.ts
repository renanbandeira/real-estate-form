import { Dispatch } from "react";

export interface AppState {
  fullName: string;
  phoneNumber: string;
  email: string;
  salaryIndicator: string;
  currentStep: number;
}

export interface DefaultAction {
  type: string;
  payload: string;
}

export interface ContainerProps {
  store: AppState;
  dispatch: Dispatch<DefaultAction>;
}

export interface ObjectKeys {
  [key: string]: string | number;
}
