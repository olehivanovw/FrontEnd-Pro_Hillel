import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServerContacts } from "../../store/actions/contactAction";
import { Link, useNavigate } from "react-router-dom";
import { selectContactList } from "../../selectors/selectContacts";
import { Button, Table } from "antd";
import getColumnsContact from "./getColumnsContact";

export default function ContactList () {
  const listInit = useSelector(selectContactList)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const columns = getColumnsContact(dispatch, navigate)

  useEffect(() => {
    dispatch(getServerContacts())
  }, [dispatch])

  return (
    <div>
      <Button type="primary">
        <Link to='/contact/create'>Add Contact</Link>
      </Button>
      <Table rowKey={'id'} columns={columns} dataSource={listInit} className='table' />
    </div>
  )
}