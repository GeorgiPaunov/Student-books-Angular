import { Book } from './book';

export interface List {
    _id: string;
    title: string;
    studentBooks: Array<Book>;
}