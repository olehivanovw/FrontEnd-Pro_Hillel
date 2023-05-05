import { StudentsAPI } from './StudentsAPI'
import './style.css'

const SELECTOR_STUDENTS_ROW = '.studentsRow'
const CLASS_DELETE_BUTTON = 'deleteBtn'
const CLASS_MARKS_INPUT = 'marksInput'
const studentsForm = document.querySelector('#studentsForm')
const studentsContainer = document.querySelector('#studentsContainer')
let studentsList = []

studentsForm.addEventListener('submit', onStudentsFormSubmit)
studentsContainer.addEventListener('click', onStudentsContainerClick)
studentsContainer.addEventListener('focusout', onStudentsContainerFocusout)

StudentsAPI.getStudents()
  .then((students) => {
    renderStudentsList(students)
    studentsList = students
  })
  .catch(e => showError(e))

function onStudentsContainerFocusout(e) {
  const target = e.target

  if (isMarksInput(target)) {
    updateMark(target)
  }
}

function onStudentsFormSubmit(e) {
  e.preventDefault()

  const data = getData()

  if (!isValidData(data)) {
    showError(new Error('You must enter correct data'))
    return
  }

  StudentsAPI.createStudents(data)
    .then((data) => {
      renderStudents(data)
      clearForm()
      studentsList.push(data)
    })
    .catch(e => showError(e))
}

function onStudentsContainerClick(e) {
  const target = e.target
  const student = findStudent(target)

  if (isDeleteBtn(target)) {
    deleteStudent(student)
  }
}

function updateMark(el) {
  const student = findStudent(el)
  const idStudent = getId(student)
  const studentItem = findStudentById(idStudent)
  const idMark = getId(el)

  studentItem.marks[idMark-1] = Number(el.value)

  StudentsAPI.updateStudents(idStudent, studentItem)
    .catch(e => showError(e))
}

function getData() {
  return { name: studentsForm.nameInput.value }
}

function isValidData(data) {
  return data.name
}

function renderStudents(data) {
  const htmlItem = generateStudentsHtml(data)

  studentsContainer.insertAdjacentHTML('beforeend', htmlItem)
}

function renderStudentsList(data) {
  studentsContainer.innerHTML = data.map(generateStudentsHtml).join('')
}

function generateStudentsHtml(data) {
  return `
    <tr class="studentsRow" data-id="${data.id}">
      <td>${data.name}</td>
      <td>
        <input data-id="1" type="number" value="${data.marks[0]}" class="marksInput"/>
        <input data-id="2" type="number" value="${data.marks[1]}" class="marksInput"/>
        <input data-id="3" type="number" value="${data.marks[2]}" class="marksInput"/>
        <input data-id="4" type="number" value="${data.marks[3]}" class="marksInput"/>
        <input data-id="5" type="number" value="${data.marks[4]}" class="marksInput"/>
        <input data-id="6" type="number" value="${data.marks[5]}" class="marksInput"/>
        <input data-id="7" type="number" value="${data.marks[6]}" class="marksInput"/>
        <input data-id="8" type="number" value="${data.marks[7]}" class="marksInput"/>
        <input data-id="9" type="number" value="${data.marks[8]}" class="marksInput"/>
        <input data-id="10" type="number" value="${data.marks[9]}" class="marksInput"/>
      </td>
      <td>
        <button class="deleteBtn">Delete</button>
      </td>
    </tr>
  `
}

function findStudent(el) {
  return el.closest(SELECTOR_STUDENTS_ROW)
}

function findStudentById(id) {
  return studentsList.find(data => data.id === id)
}

function isMarksInput(el) {
  return el.classList.contains(CLASS_MARKS_INPUT)
}

function isDeleteBtn(el) {
  return el.classList.contains(CLASS_DELETE_BUTTON)
}

function deleteStudent(el) {
  const id = getId(el)

  StudentsAPI.deleteStudents(id)
    .then(() => {
      el.remove()
    })
    .catch(e => showError(e))

  studentsList = studentsList.filter(student => student.id !== id)
}

function getId(el) {
  return el.dataset.id
}

function clearForm() {
  studentsForm.reset()
}

function showError(error) {
  alert(error.message)
}