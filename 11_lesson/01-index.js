class Student {
  constructor(name, marks) {
    this.name = name
    this.marks = marks
  }

  getAverageMark() {
    return this.getMarksSum() / this.marks.length
  }

  getMarksSum() {
    return this.marks.reduce((accum, curr) => {
      return accum + curr
    })
  }
}

class Group {
  #students

  constructor() {
    this.#students = []
  }

  get students() {
    return this.#students
  }

  addStudent(student) {
    if (this.#isStudent(student)) {
      this.#students.push(student)
    }
  }

  #isStudent(student) {
    return student instanceof Student
  }

  getAverageMarkGroup() {
    return this.getAverageMarksSum() / this.#students.length
  }

  getAverageMarksSum() {
    return this.#students.reduce((accum, curr) => {
      return accum + curr.getAverageMark()
    }, 0)
  }
}

const group = new Group()

group.addStudent(new Student('John', [10, 8]))
group.addStudent(new Student('Alex', [10, 9]))
group.addStudent(new Student('Bob', [6, 10]))

console.log(group.students.length === 3)
group.addStudent({})
console.log(group.students.length === 3)

console.log(group.getAverageMarkGroup() === (9 + 9.5 + 8) / 3)

group.students = [new Student('John', [10, 10, 5, 10])]
console.log(group.students.length === 3)