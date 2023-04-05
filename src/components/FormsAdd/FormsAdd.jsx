import { Formik, Field } from 'formik';
import { Form, FormField, SubmitBtn, ErrorMessage } from './FormsAdd.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  phone: Yup.number('')
    .typeError(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .min(5, 'Too Short!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const notify = () => toast('Such contact is already existed');

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, action) => {
          for (const contact of contacts) {
            if (contact.phone === values.phone) {
              notify();
              action.resetForm();
              return;
            }
          }
          dispatch(addContact(values));
          action.resetForm();
        }}
      >
        <Form>
          <FormField>
            Name
            <Field name="name"></Field>
            <ErrorMessage name="name" component="span" />
          </FormField>
          <FormField>
            Number
            <Field name="phone"></Field>
            <ErrorMessage name="phone" component="span" />
          </FormField>
          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </Form>
      </Formik>
    </>
  );
};
