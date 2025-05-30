import css from "./ContactForm.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice.js";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
        .matches(/^[0-9\-+ ]+$/, "Invalid phone number")
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

const initialValues = {
  name: "",
  number: ""
};

export const ContactForm = () => {
    const dispatch = useDispatch();

    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
        }));
        actions.resetForm();
    };
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form>
                <div className={css.form}>
                    <label className={css.label}  htmlFor={nameFieldId}><FaUser /> Name</label>
                    <Field className={css.field} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage className={css.error} name="name" component="span" />
                    <label className={css.label} htmlFor={numberFieldId}><FaPhoneAlt /> Number</label>
                    <Field className={css.field}type="tel" name="number" id={numberFieldId} />
                    <ErrorMessage className={css.error} name="number" component="span" />
                    <button className={css.button} type="submit">Add contact</button>
                </div>
            </Form>
        </Formik>
    )
}