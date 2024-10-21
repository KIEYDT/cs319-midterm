// 1: class 
class Student {
    static instance = 0

    name?: string
    age?: number
    grade: number[]

    constructor(name: string, age: number, grade: number[]) {
        this.name = name
        this.age = age
        this.grade = grade
        Student.instance++
    }

    addGrade(grade: number): void {
        if (grade >= 0) {
            this.grade?.push(grade)
            console.log("Grade was added!")
        } else {
            console.log("Something wrong")
        }
    }
    getAverageGrade(): number {
        if (this.grade.length > 0) {
            const avg: number = this.grade.reduce((ar, cu) => ar + cu, 0) / this.grade.length
            return avg
        } else {
            console.log("No grade yet")
            return 0
        }
    }

    getInstanceAmount(): number {
        return Student.instance
    }
}


// 2: inherit
class GraduateStudent extends Student {
    thesisTopic: string

    constructor(name: string, age: number, grade: number[], thesisTopic: string) {
        super(name, age, grade)
        this.thesisTopic = thesisTopic
    }

    getAverageGrade(): number {
        if (this.grade.length > 0) {
            let avg: number = this.grade.reduce((ar, cu) => ar + cu, 0) / this.grade.length
            if (this.thesisTopic === "Artificial Intelligence" || this.thesisTopic === "AI") {
                avg += 5
            }
            return avg
        } else {
            console.log("No grade yet")
            return 0
        }
    }
}


// student var declare
const students: Student[] = [
    new Student("John Doe", 16, [78, 85, 90]),
    new Student("Jane Smith", 17, [92, 89, 95]),
    new Student("Emily Davis", 16, [65, 72, 80]),
    new Student("Michael Brown", 17, [88, 91, 85]),
    new Student("Chris Johnson", 18, [70, 75, 68]),
]


// 3: interface
interface Teacher {
    name?: string
    subject?: string
    students?: Student[]
}

function getTeacherInfo(teacher: Teacher): void {
    console.log(`Name: {$teacher.name}`)
    console.log(`Subjects: {$teacher.subject}`)
    console.log(`Students: {$teacher.student.length}`)
}


// 4: generics
class Database<T> {
    datas: T[] = []

    addEntry(entry: T): void {
        this.datas.push(entry)
    }

    getEntries(): T[] {
        return this.datas
    }
}


// 5: higher-order function
function createGradeMultiplier(multiplier: number) {
    return function (grade: number) {
        return multiplier * grade
    }
}
// test multiplier
const doubleGrade = createGradeMultiplier(2)
console.log(doubleGrade(students[0].grade[0]))


// 6: async
async function fetchStudentData(): Promise<{ message: string }> {
    return new Promise((resolve, error) => {
        setTimeout(() => {
            const data = {
                message: "Fetched Successfully",
                name: students[].name,
                grade: students[].grade,
            }
            resolve(data)
        }, 2000)
    })
}

async function getData(): Promise<void> {
    try {
        const res = await fetchStudentData()
        console.log(res.message)
    } catch (error) {
        console.error(error)
    }
}


// 7: array
const studentHighScore = students.filter(student => student.getAverageGrade() > 70) 
const studentName = students.map(student => student.name)
const allStudentGrade = students.reduce((ar, student) => ar + student.grade.reduce((gAr, grade) => gAr + grade, 0), 0)


// 8: error handling
function parseStudentData(jsonData: string): any {
    try {
        const parsedData = JSON.parse(jsonData)
        console.log("OK")
        return parsedData
    } catch (error) {
        console.error(error)
    }
}