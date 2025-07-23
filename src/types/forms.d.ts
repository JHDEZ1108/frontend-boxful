export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  birthdate: string;
  email: string;
  whatsappPrefix: string;
  whatsappNumber: string;
  password: string;
  confirmPassword: string;
}
export interface LoginFormValues {
  email: string;
  password: string;
}