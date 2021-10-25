import { Subject } from "./Subject";

export class Task {
    idTask!: number;
    subject!: Subject;
    idSubject!: number;
    nameTask!: string;
    dateTask!: string;
    descriptionTask!: string;

    constructor () {
        this.subject = new Subject();
    }
}