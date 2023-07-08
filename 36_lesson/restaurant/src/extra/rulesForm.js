const TEMPLATE_PHONE = /^\d{3}-\d{2}-\d{2}$/

export const rulesForm = {
  table: {
    required: true,
    message: 'Please input table number!',
  },
  waiterFirstName: [
    {
      min: 2,
      message: 'Name must be >= 2 symbols',
    },
    {
      max: 20,
        message: 'Name must be <= 20 symbols',
    },
    {
      required: true,
        message: 'Please input waiter name!',
    },
  ],
  waiterPhone: [
    {
      pattern: TEMPLATE_PHONE,
      message: 'Please input phone be template xxx-xx-xx!',
    },
    {
      required: true,
      message: 'Please input waiter phone!',
    },
  ],
  dishName: [
    {
      min: 2,
      message: 'Name must be >= 2 symbols',
    },
    {
      max: 20,
      message: 'Name must be <= 20 symbols',
    },
    {
      required: true,
      message: 'Please input dish name!',
    },
  ],
  dishDiscription: {
    required: true,
    message: 'Please input dish description!',
  },
  dishPrice: {
    required: true,
    message: 'Please input dish price!',
  },
  orderCount: {
    required: true,
    message: 'Please input dish count!',
  },
}

