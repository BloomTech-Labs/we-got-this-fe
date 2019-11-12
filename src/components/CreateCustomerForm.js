import React from 'react';
import { useStateValue } from '../state';
import { useForm } from '../hooks/useForm';

import { createCustomer } from '../state/reducers/customerReducer';
import { actions } from '../state/customer/customerActions';
import { Form, Field, withFormik, Formik } from 'formik';
import * as Yup from 'yup';

const CustomerForm = ({ errors, touched, values, status }) => {
    const [state, dispatch] = useStateValue();

    const submitForm = values => {
        actions.addCustomer(dispatch, values);
    };
    return (
        <Form>
            <Field type="text" name="firstname" placeholder="First Name" />
            {touched.name && errors.name && (
                <p className="error">{errors.firstname}</p>
            )}

            <Field type="text" name="lastname" placeholder="Last Name" />
            {touched.lastname && errors.name && (
                <p className="error">{errors.lastname}</p>
            )}

            <Field type="text" name="phonenumber" placeholder="Phone Number" />
            {touched.phonenumber && errors.phonenumber && (
                <p className="error">{errors.phonenumber}</p>
            )}

            <Field type="text" name="email" placeholder="Email" />
            {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
            )}

            <Field component="select" className="payment-select" name="payment">
                <option>Choose a Payment Method </option>
                <option value="role">Cash</option>
                <option value="role">Check</option>
                <option value="role">Debit/Credit Card</option>
            </Field>

            <Field
                component="select"
                className="hearabout-select"
                name="hearabout"
            >
                <option>How Did You Hear About Us</option>
                <option value="role">Customer Referral</option>
                <option value="role">Internet</option>
                <option value="role">Employee Refferal</option>
            </Field>

            <Field
                type="text"
                name="serviceaddress"
                placeholder="Service Address"
            />
            {touched.serviceaddress && errors.serviceaddress && (
                <p className="error">{errors.serviceaddress}</p>
            )}

            <Field type="text" name="city" placeholder="City" />
            {touched.city && errors.city && (
                <p className="error">{errors.city}</p>
            )}

            <Field type="text" name="state" placeholder="State" />
            {touched.state && errors.state && (
                <p className="error">{errors.state}</p>
            )}

            <Field type="text" name="zipcode" placeholder="Zip Code" />
            {touched.zipcode && errors.state && (
                <p className="error">{errors.zipcode}</p>
            )}

            <Field type="text" name="notes" placeholder="Special Notes" />
            {touched.zipcode && errors.notes && (
                <p className="error">{errors.notes}</p>
            )}

            <button type="submit">Submit</button>
        </Form>

        // {users.map(users => (
        //     <ul key={users.id}>
        //       <li>Name: {users.name}</li>
        //       <li>Email: {users.email}</li>
        //       <li>Password: {users.password}</li>
        //     </ul>
        //   ))}
        // </div>
    );
};

const CreateCustomerForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            tos: tos || false,
            password: password || '',
            email: email || '',
            name: name || '',
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('You didnt complete the Form'),
        email: Yup.string().required(),
        password: Yup.string(),
        tos: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    }),
})(CustomerForm);

export default CreateCustomerForm;
