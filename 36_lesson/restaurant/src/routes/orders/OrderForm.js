import { Button, Form, Input, Select, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectCommonOptions, selectOrderEdit } from "../../selectors";
import { getServerOneOrder, saveOrder } from "../../store/actions/orderAction";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { rulesForm } from "../../extra/rulesForm";
import FormWrapper from "../../extra/FormWrapper";

export default function OrderForm() {
  const editOrder = useSelector(selectOrderEdit)
  const initOptions = useSelector(selectCommonOptions)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idOrder } = useParams()
  
  function setDishArr(DishesArr) {
    return DishesArr.map((dish, index) => {
      const id = index + 1

      return {
        id: id,
        dishId: dish.dishId,
        count: Number(dish.count),
      }
    })
  }

  function onFinish(value) {
    const orderData = { ...editOrder, ...value, 'dishes': setDishArr(value.dishes) }

    dispatch(saveOrder(orderData))

    navigate('/')
  }

  return (
    <FormWrapper id={idOrder} editId={editOrder?.id} oneFetch={getServerOneOrder}>
      <Space wrap>
        <Form
          initialValues={editOrder}
          onFinish={onFinish}
          autoComplete="off"
          layout='horizontal'
          className='form'
        >
          <Form.Item
            name="waiterId"
          >
            <Select
              className='select'
              placeholder="Select waiter"
              options={initOptions.waiter}
            />
          </Form.Item>

          <Form.Item
            name="tableId"
          >
            <Select
              className='select'
              placeholder="Select table"
              options={initOptions.table}
            />
          </Form.Item>

          <Form.List name="dishes">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    className='space-dishes'
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, 'dishId']}
                    >
                      <Select
                        className='select'
                        placeholder="Select dish"
                        options={initOptions.dish}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'count']}
                      rules={[rulesForm.orderCount]}
                    >
                      <Input placeholder="Enter count of dish!" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add dish
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </FormWrapper>
  )
}