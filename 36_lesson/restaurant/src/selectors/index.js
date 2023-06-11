import { createSelector } from 'reselect'

export const selectOrderList = state => state.order.listOrder
export const selectOrderEdit = state => state.order.listOrderEdit

export const selectTableList = state => state.table.listTable
export const selectTableEdit = state => state.table.listTableEdit

export const selectWaiterList = state => state.waiter.listWaiter
export const selectWaiterEdit = state => state.waiter.listWaiterEdit

export const selectDishList = state => state.dish.listDish
export const selectDishEdit = state => state.dish.listDishEdit

export const selectCommonOrders = createSelector(
  selectOrderList,
  selectTableList,
  selectWaiterList,
  (orders, tables, waiters) => {
    const tableList = tables.reduce((acc, currTable) => {
      acc[currTable.id] = currTable

      return acc
    }, {})

    const waiterList = waiters.reduce((acc, currWaiter) => {
      acc[currWaiter.id] = currWaiter

      return acc
    }, {})

    return orders.map((order) => ({
      ...order,
      table: tableList[order.tableId],
      waiter: waiterList[order.waiterId]
    }))
  }
)

export const selectCommonOptions = createSelector(
  selectTableList,
  selectWaiterList,
  selectDishList,
  (tables, waiters, dishes) => {
    const optionsTable = tables.map((table) => {
      return {
        label: table.number,
        value: table.id,
      }
    })

    const optionsWaiter = waiters.map((waiter) => {
      return {
        label: waiter.firstName,
        value: waiter.id,
      }
    })

    const optionsDish = dishes.map((dish) => {
      return {
        label: dish.name,
        value: dish.id,
      }
    })

    return {
      table: optionsTable,
      waiter: optionsWaiter,
      dish: optionsDish,
    }
  }
)