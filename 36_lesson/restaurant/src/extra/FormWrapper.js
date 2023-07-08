import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Space, Spin } from "antd";

export default function FormWrapper ({ id, editId, oneFetch, children, test }) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (id && !editId) {
      dispatch(oneFetch(id))
    }
  }, [dispatch, id, editId, oneFetch])

  if (id && !editId) {
    return (
      <Space direction="vertical" className='spin'>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    )
  }

  return (
    <div>{children}</div>
  )
}