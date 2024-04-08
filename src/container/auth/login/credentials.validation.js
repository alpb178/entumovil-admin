import * as Yup from 'yup';

const CredentialsValidationSchema = Yup.object().shape({
  username: Yup.string().required('form.required.username').email('form.invalid.email'),
  password: Yup.string().required('form.required.password')
});

export default CredentialsValidationSchema;
