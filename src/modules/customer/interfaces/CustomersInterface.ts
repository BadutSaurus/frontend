export interface ICustomer {
  id: string;
  name: string;
  code: string;
  number: string;
  dob: string;
  email: string;
  username: string;
  address: string;
}

export interface ICustomerFormData {
  name: string;
  gender: string;
  dob: string;
  code: string;
  number: string;
  email: string;
  id: string;
  tags: string[];
  address: string;
}

export interface ICreateCustomerPayload {
  name: string;
  code: string;
  number: string;
  dob: string;
  email: string;
  address: string;
  customers_has_tag: [
    {
      id: string;
    },
  ];
}
