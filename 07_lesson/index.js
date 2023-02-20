'use strict'
const QUESTIONS = [
  {
    question: 'Сколько хромосом у здорового человека?',
    answer: '46',
    type: 'prompt',
  },
  {
    question: 'Путин - хуйло?',
    answer: true,
    type: 'confirm',
  },
  {
    question: 'Сколько хромосом у Путина?',
    answer: '47',
    type: 'prompt',
  },
  {
    question: 'Сколько тупых овец в московии (в млн)?',
    answer: '144',
    type: 'prompt',
  },
  {
    question: 'Снесли ли памятник Екатерине-2 в Одессе?',
    answer: true,
    type: 'confirm',
  },
  {
    question: 'Сколько черных пакетов выделяются на одного орка?',
    answer: '1',
    type: 'prompt',
  },
  {
    question: 'На сколько вы оцениваете работу ЗСУ от 1 до 10?',
    answer: '10',
    type: 'prompt',
  },
  {
    question: 'Со скольких позиций готовилось нападение на Беларусь?',
    answer: '4',
    type: 'prompt',
  },
  {
    question: 'Нужно ли сжигать сосийский флаг?',
    answer: true,
    type: 'confirm',
  },
  {
    question: 'Поддерживаете ли вы уход иностранных компаний из московии?',
    answer: true,
    type: 'confirm',
  },
  {
    question: 'Считаете ли вы сосию своим домом?',
    answer: false,
    type: 'confirm',
  },
]

getQuiz(QUESTIONS)

function getQuiz(quest) {
  let resArray = []

  for (const matter of quest) {
    if (matter.type === 'prompt') {
      getPrompt(matter, resArray)
    } else {
      getConfirm(matter, resArray)
    }
  }

  const result = resArray.reduce((acc, curr) => {
    return acc + curr
  })

  alert(`Вы набрали: ${result} балов`)
}

function getPrompt(quest, res) {
  let Answer = prompt(quest.question)
  if (Answer === quest.answer) {
    return res.push(10)
  }
}

function getConfirm(quest, res) {
  let Answer = confirm(quest.question)
  if (Answer === quest.answer) {
    return res.push(10)
  }
}
