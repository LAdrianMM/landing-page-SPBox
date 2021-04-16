import React, { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useFormik } from 'formik'
import './styles.css'

const Admin = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "**required**";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "**invalid email address**";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues:{
      email: ''
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setLoading(true)
      localStorage.setItem('emailAddress', values.email)
      setTimeout(() => {
        setLoading(false)
        history.push('/')
      }, 2000)

      resetForm({})
    }
  })

  return (
    <div className='admin'>
      <div className="contenedor">
        <h3>Bienvenido Admin</h3>
        <p>En esta sección podrá cambiar la dirección de correo electrónico a donde le gustaría que le lleguen los datos del formulario.</p>
        <form className='form' onSubmit={formik.handleSubmit}>
          {formik.errors.email ? <p style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.email}</p> : null}
          <input 
            type="email"   
            value={formik.values.email}
            name='email'
            autoFocus={true} 
            onChange={formik.handleChange} 
            placeholder='correo' 
            />
          <Button onClick={formik.handleSubmit}>{loading ? <Spinner animation="border" /> : 'Guardar Correo'}</Button>
        </form>
      </div>
    </div>
  )
}

export default Admin
