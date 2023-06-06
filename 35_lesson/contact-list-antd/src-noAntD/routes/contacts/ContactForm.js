import { useDispatch, useSelector } from "react-redux";
import { getServerOneContact, saveContact } from "../../store/actions/contactAction";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectContactEdit } from "../../selectors/selectContacts";
import { DEFAULT_CONTACT } from "../../store/reducers/contactReducer"

const TEMPLATE_PHONE = /^\d{3}-\d{3}-\d{2}-\d{2}$/
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be >= 2 symbols')
    .max(20, 'Name must be <= 20 symbols')
    .required('Required'),
  surname: Yup.string()
    .min(2, 'Surname must be >= 2 symbols')
    .max(20, 'Surname must be <= 20 symbols')
    .required('Required'),
  phone: Yup.string()
    .matches(TEMPLATE_PHONE, 'Phone must be template xxx-xxx-xx-xx')
    .required('Required'),
});

export default function ContactForm () {
  const contactEdit = useSelector(selectContactEdit)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { idContact } = useParams()

  useEffect(() => {
    if (idContact) {
      dispatch(getServerOneContact(idContact))
    }
  }, [dispatch, idContact])

  function onSubmit(value, action) {
    const contactDate = { ...contactEdit, ...value }

    dispatch(saveContact(contactDate))

    action.resetForm (DEFAULT_CONTACT)

    navigate('/contact')
  }
  
  return (
    <Formik
      enableReinitialize
      initialValues={contactEdit}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit} className='form'>
          <div>
            <input
              type='text'
              placeholder='Enter name'
              id='name'
              value={values.name}
              onChange={handleChange}
            />
            {errors.name ? (<div className='error'>{errors.name}</div>) : null}
          </div>
          <div>
            <input
              type='text'
              placeholder='Enter surname'
              id='surname'
              value={values.surname}
              onChange={handleChange}
            />
            {errors.surname ? (<div className='error'>{errors.surname}</div>) : null}
          </div>
          <div>
            <input
              type='text'
              placeholder='Enter phone'
              id='phone'
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone ? (<div className='error'>{errors.phone}</div>) : null}
          </div>
          <button type='submit' className='btn'>Save Contact</button>
        </form>
        )}
    </Formik>
  )
}