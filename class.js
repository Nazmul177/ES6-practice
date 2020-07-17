class Student{
    constructor(sId, sName){

        this.Id = sId;
        this.Name = sName;
        this.school = "Kolimunnessa School"
    }
}

const student1 = new Student(12, "Babul");
const student2 = new Student(22, "Mahiya");
const student3 = new Student(90, "Rskib");
console.log(student1, student2, student3);