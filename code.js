import { Storage } from "./webapi.js";
const dbName = 'My_School';
new Storage(dbName);

/* The below class inherited three methods from the library which are :
 openDatabase(), operate() and deleteDb(); */
class School extends My_School {
    constructor() { super(); }
    createClass() {
        const className = 'my_class';
        this.openDatabase('create', className).then(() => {
            console.log(className, 'class is available to use');
        });
    }
    addStudents() {
        const students = [
            {"id": 1, "name": "Alice Smith", "age": 20, "major": "Computer Science"},
            {"id": 2, "name": "Bob Johnson", "age": 22, "major": "Mathematics"}
        ];
        const className = 'my_class';
        this.operate('add', className, students);
    }
    retrieveStudents() {
        const className = 'my_class';
        this.operate('display', className).then(students => {
            console.log(students, 'from', className);
        });
    }
    updateStudents() {
        const students = [
            {"id": 1, "name": "Alice Smith", "age": 20, "major": "Computer Science"},
            {"id": 2, "name": "Bob Johnson", "age": 22, "major": "Mathematics"},
            {"id": 3, "name": "Charlie Lee", "age": 21, "major": "Physics"}
        ];
        const className = 'my_class';
        this.uperate('update', className,  students);
    }
    deleteStudent() {
        const studentId = 2;  
        this.uperate('delete', className, studentId);
    }
    deleteClass() {
        const className = 'my_class';
        this.openDatabase('delete', className).then(() => {
            console.log(className, 'store was deleted');
        }).catch((error) => {
            console.error(error, 'deleting', className, 'store');
        });
    }
    deleteSchool() {
        const dbName = 'My_School';
        this.deleteDb(dbName);
    }
}
new School();