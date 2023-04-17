export interface Credentials {
  email: string;
  password: string;
}

export interface Certificate {
  id: string;
  name: string;
  type: string;
  categories: Category[];
  expiration_date: string;
}
export interface Category {
  id: string;
  name: string;
}
