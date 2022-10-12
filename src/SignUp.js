
import { useFormik } from "formik"
import * as yup from 'yup'
import './SignUp.css'

function SignUp() {

    
    const formik = useFormik( {
        initialValues: {
            firstName: "",
            lastName: "",
            email:""
        },
      onsubmit: function( values ){
        console.log( values);
       
      },
      validationSchema: yup.object( {
        firstName: yup.string().max( 15, "Must be 15 Charactors or less" ).required( "required" ),
          lastName: yup.string().max( 20, "Must be 20 Charactors or less" ).required("required"),
          email: yup.string( "Invalid Email Address" ).required("required")

      } )
      
     
    }
      
  
    )

  console.log(formik.errors)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
            <h2>Sign Up Form</h2>
        </div>
        <div>
          
        <input
          className='input-container'
          id='firstName'
          type='text'
          name='firstName'
          placeholder='First Name' 
            onChange={formik.handleChange}
             onBlur={formik.handleBlur}
                  value={formik.values.firstName}
          />
                {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName  }</p>:null}
          </div>
          <div>
        <input
          className='input-container'
          id='lastName'
          type='text'
          name='lastName'
          placeholder='Last Name' 
                  onChange={formik.handleChange}
            value={formik.values.lastName}
             onBlur={formik.handleBlur}
              />
             {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName  }</p>:null}
          <div>
        </div>
     
        <input
          className='input-container'
          id='email'
          type='text'
          name='email'
          placeholder='Email' 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            
          />
             {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>:null}
        </div>
        <br />
      <div>
        <button type="submit" className="submit">Submit</button>
      </div>
      </form>
      </div>
  )
}

export default SignUp