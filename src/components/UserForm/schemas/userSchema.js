import * as yup from 'yup';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegexp = /^\+\d{1,15}\d{1,15}$/;

const schema = yup.object().shape({
    name: yup.string().max(16).required(),
    email: yup
        .string()
        .email()
        .matches(emailRegexp, 'email invalid')
        .required(),
    birthday: yup.date().max(new Date(), 'Birthday must be earlier than today'),
    phone: yup.string().matches(phoneRegexp),
    skype: yup.string().max(16),
});
export default schema;