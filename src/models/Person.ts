export interface Person {
    name: string;
    phone: string;
    email: string;
    isAvailable: boolean;
    age: number;
};

export type PartialPerson = Partial<Person>;