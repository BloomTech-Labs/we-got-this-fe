import React from 'react';
import { Formik } from "formik";
import { useForm } from '../hooks/useForm';
import { inviteTech } from '../state/reducers/techReducer';
import * as Yup from "yup";
import Error from './Error';


const validationSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(1, 'Must have a character')
    .max(255, 'Must be shorter than 255')
    .required('Must enter a First Name'),
    lastName: Yup.string()
    .min(1, 'Must have a character')
    .max(255, 'Must be shorter than 255')
    .required('Must enter a Last Name'),
    phone: Yup.number()
    .required('Must enter a Number'),
    address: Yup.string()
    .min(1, 'Must have a character')
    .max(155, 'Must be shorter than 155')
    .required('Must enter an Address'),
    email: Yup.string()
    .min(1, 'Must have a character')
    .max(155, 'Must be shorter than 155')
    .required('Must enter an Email'),
    city: Yup.string()
    .min(1, 'Must have a character')
    .max(155, 'Must be shorter than 155')
    .required('Must enter an City'),
    state: Yup.string()
    .min(1, 'Must have a character')
    .max(155, 'Must be shorter than 155')
    .required('Must enter a State'),
    zip: Yup.string()
    .min(1, 'Must have a character')
    .max(155, 'Must be shorter than 155')
    .required('Must enter an Zip'),
    notes: Yup.string()
    .min(1, 'Must have a character')
    .max(255, 'Must be shorter than 255')
})


const InviteTech = () => {

    const submitForm = values => {
        inviteTech(values);
    };

const [values, handleChange, handleSubmit] = useForm(
  {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    notes: '',
    city: '',
    zip:''
        },
        submitForm 
    );

    return (
        <Formik 
    initialValues={{ 
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    notes: '',
    city: '',
    zip:'' 
}} 

validationSchema={validationSchema}
onSubmit={(values, {setSubmitting, resetForm}) => {
    setSubmitting(true)

    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
        setSubmitting(false);
    }, 500);
}}>

        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
         <form className='Form' onSubmit={handleSubmit}>
         <div>

             <div>
                <input onChange={handleChange} name='firstName' placeholder='firstName' value={values.firstName} onBlur={handleBlur} className={touched.firstName && errors.firstName ? 'has-error' : null}/>
                <Error touched={touched.firstName} message={errors.firstName} />
             </div>
             <div>
                <input onChange={handleChange} name='lastName' placeholder='lastName' value={values.lastName} onBlur={handleBlur} className={touched.lastName && errors.lasttName ? 'has-error' : null}/>
                <Error touched={touched.lastName} message={errors.lastName} />
             </div>
             <div>
                <input onChange={handleChange} name='phone' placeholder='phone' value={values.phone} onBlur={handleBlur} className={touched.phone && errors.phone ? 'has-error' : null}/>
                <Error touched={touched.phone} message={errors.phone} />
             </div>
             <div>
                <input onChange={handleChange} name='address'placeholder='address' value={values.address} onBlur={handleBlur} className={touched.address && errors.address ? 'has-error' : null}/>
                <Error touched={touched.address} message={errors.address} />
             </div>
             <div>
                <input onChange={handleChange} name='city'placeholder='city' value={values.city} onBlur={handleBlur} className={touched.city && errors.city ? 'has-error' : null}/>
                <Error touched={touched.city} message={errors.city} />
             </div>
             <div>
                <input onChange={handleChange} name='state'placeholder='state' value={values.state} onBlur={handleBlur} className={touched.state && errors.state ? 'has-error' : null}/>
                <Error touched={touched.state} message={errors.state} />
             </div>
            
         </div>
         <div>
             <div>
                <input onChange={handleChange} name='email' placeholder='email' value={values.email} onBlur={handleBlur} className={touched.email && errors.email ? 'has-error' : null}/>
                <Error touched={touched.email} message={errors.email} />
             </div>
             <div>
                <input onChange={handleChange} name='zip' placeholder='zip' value={values.zip} onBlur={handleBlur} className={touched.zip && errors.zip ? 'has-error' : null}/>
                <Error touched={touched.zip} message={errors.zip} />
             </div>
             <div>
                <textarea onChange={handleChange} name='notes' placeholder='notes' value={values.notes} onBlur={handleBlur} className={touched.notes && errors.notes  ? 'has-error' : null}/>
                <Error touched={touched.notes} message={errors.notes} />
             </div>
    
             <button>Cancel</button>
             <button type='submit' disabled={isSubmitting}>Submit</button>
         </div>
         </form>
        )}
        </Formik>
    )
}
export default InviteTech;