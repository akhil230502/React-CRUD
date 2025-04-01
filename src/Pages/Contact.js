import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";

const ContactForm = () => {
   const navigate = useNavigate();
   const formik = useFormik({
      initialValues: {
         firstname: '',
         lastname: '',
         mobile: '',
         email: '',
         password: '',
         confirmPassword: '',
         role: 'Student'
      },
      validationSchema: Yup.object({
         firstname: Yup.string().required('Firstname is required'),
         lastname: Yup.string().required('Lastname is required'),
         mobile: Yup.string()
            .matches(/^[6-9]\d{9}$/, 'Must start with 6-9 and be 10 digits')
            .required('Mobile is required'),
         email: Yup.string().email('Invalid email').required('Email is required'),
         password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
         confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
         role: Yup.string().required('Role is required')
      }),
      onSubmit: (values, { resetForm }) => {
         console.log(values);

         axios.post(`https://67e67d256530dbd31110336d.mockapi.io/api/Users`, values)
            .then(res => {
               console.log(res);
               if (res.statusText === "Created") {
                  alert('Form submitted successfully! Check console for details.');
                  resetForm();
               }
            }).catch(err => {
               console.log("catch error", err);
            })
      }
   });

   return (
      <div className="container-fluid">
         <Header />
         <h1 className="my-4">Contact Form</h1>

         <div className="text-end mb-4">
            <Link type="button" className="btn btn-info" to={`/employee`}>
               Employee
            </Link>
         </div>

         <form onSubmit={formik.handleSubmit}>
            <div className="row mb-3">
               <div className="col">
                  <label htmlFor="firstname" className="form-label">Firstname:</label>
                  <input
                     type="text"
                     id="firstname"
                     name="firstname"
                     className="form-control"
                     value={formik.values.firstname}
                     onChange={formik.handleChange}
                  />
                  {formik.touched.firstname && formik.errors.firstname &&
                     <div className="text-danger">{formik.errors.firstname}</div>
                  }
               </div>

               <div>
                  <label htmlFor="lastname" className="form-label">Lastname:</label>
                  <input
                     type="text" id="lastname" name="lastname" className="form-control" value={formik.values.lastname} onChange={formik.handleChange} />
                  {formik.touched.lastname && formik.errors.lastname &&
                     <div className="text-danger">{formik.errors.lastname}</div>
                  }
               </div>
            </div>
            <div className="row mb-3">
               <div className="col">
                  <label htmlFor="mobile" className="form-label">Mobile Number:</label>
                  <input type="text" id="mobile" name="mobile" className="form-control" value={formik.values.mobile} onChange={formik.handleChange} />
                  {formik.touched.mobile && formik.errors.mobile &&
                     <div className="text-danger">{formik.errors.mobile}</div>
                  }
               </div>

               <div>
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     className="form-control"
                     value={formik.values.email}
                     onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email &&
                     <div className="text-danger">{formik.errors.email}</div>
                  }
               </div>
            </div>

            <div className="row mb-3">
               <div className="col">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     className="form-control"
                     value={formik.values.password}
                     onChange={formik.handleChange}
                  />
                  {formik.touched.password && formik.errors.password &&
                     <div className="text-danger">{formik.errors.password}</div>
                  }
               </div>

               <div>
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                  <input
                     type="password"
                     id="confirmPassword"
                     name="confirmPassword"
                     className="form-control"
                     value={formik.values.confirmPassword}
                     onChange={formik.handleChange}
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                     <div className="text-danger">{formik.errors.confirmPassword}</div>
                  }
               </div>
            </div>

            <div className="row mb-3">
               <div className="col-12">
                  <label htmlFor="role" className="form-label">Select Role:</label>
                  <select
                     id="role"
                     name="role"
                     className="form-select"
                     value={formik.values.role}
                     onChange={formik.handleChange}
                  >
                     <option value="Student">Student</option>
                     <option value="Employee">Employee</option>
                     <option value="Businessman">Businessman</option>
                  </select>
                  {formik.touched.role && formik.errors.role &&
                     <div className="text-danger">{formik.errors.role}</div>
                  }
               </div>
            </div>

            <div className="mb-3 text-center">
               <button type="submit" className="btn btn-success">
                  Submit
               </button>
            </div>
         </form>
      </div>

   );
};

export default ContactForm;
