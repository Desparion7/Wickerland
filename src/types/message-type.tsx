export type MessageFormValues = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};
export type MessageFormValuesError = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
  consent: string;
};
