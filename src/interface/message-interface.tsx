export interface MessageFormValues {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}
export interface MessageFormValuesError {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  consent: string;
}
