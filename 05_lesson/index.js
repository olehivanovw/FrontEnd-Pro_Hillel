const students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7]
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [9, 8, 7, 6, 7]
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8]
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9]
  }
]

averageStudentMark(10)
averageGroupMark(students)

function averageStudentMark(studentId) {
  students.find((student) => {
    if (student.id === studentId) {

      const averageScore = student.marks.reduce((accumulator, current) => {
        return accumulator + current / student.marks.length
      }, 0)

      console.log(`Student ID: ${studentId}. Average grade of this student: ${averageScore}`)
    }
  })
}
// ============================ WITH LOOP FOR ============================
// function averageStudentMark(studentId) {
//   students.find((student) => {
//     if (student.id === studentId) {
//
//       const averageMark = add(student.marks)
//
//       function add(arr) {
//         let x = arr[0]
//         for (let i = 1; i < arr.length; i++) {
//           x += arr[i]
//         }
//         return x / arr.length
//       }
//
//       console.log(`Average grade of one student: ${averageMark}`)
//     }
//   })
// }

// ============================ ANOTHER VARIANT ============================
// function averageStudentMark(studentId) {
//   students.find((student) => {
//     if (student.id === studentId) {
//
//       calcAverageScore(student)
//
//       function calcAverageScore(stud) {
//         const averageScore = stud.marks.reduce((accumulator, current) => {
//           return accumulator + current / student.marks.length
//         }, 0)
//
//         console.log(`Average grade of one student: ${averageScore}`)
//       }
//     }
//   })
// }

function averageGroupMark(student) {
  const arrayAverageScore = []

  student.forEach((studMark) => {
    const averageScoreOneStudent = studMark.marks.reduce((accumulator, current) => {
      return accumulator + current / studMark.marks.length
    }, 0)

    arrayAverageScore.push(averageScoreOneStudent)
  })

  const averageScoreGroup = arrayAverageScore.reduce((accumulator, current) => {
    return accumulator + current / arrayAverageScore.length
  }, 0)

  console.log(`Average grade of all students: ${averageScoreGroup}`)
}
