import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const FromikForm = () => {


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label >Name:
                    <input type="text"
                        {...formik.getFieldProps("name")}
                    />
                </label>
                {formik.touched.name && formik.errors.name ? (<p style={{ color: "red" }}>{formik.errors.name}</p>) : null}
                <br />
                <label >Email:
                    <input type="email"
                        {...formik.getFieldProps("email")}
                    />
                </label>
                {formik.touched.email && formik.errors.email ? (<p style={{ color: "red" }}>{formik.errors.email}</p>) : null}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FromikForm