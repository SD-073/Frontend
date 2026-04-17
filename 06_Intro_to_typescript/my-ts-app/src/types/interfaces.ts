export interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  role: 'student' | 'teacher' | 'admin';
  address: {
    street: {
      name: string;
      number: number;
    };
    postalcode: number;
    city: string;
  };
};

export interface IStudent extends IPerson {
  subjects: string[],
  currentlyStudent: boolean
};

export interface ITeacher extends IPerson {
  bankInfo: {
    IBAN: string,
    accountHolder: string
  },
  subject: string
}
