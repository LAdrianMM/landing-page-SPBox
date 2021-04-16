import { useState } from 'react'
import { Form,  Button, Spinner } from 'react-bootstrap'
import { useFormik } from 'formik'
import './styles.css'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "- required";
    }
    if (!values.email) {
      errors.email = "- required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "- invalid email address";
    }
    if (!values.message) {
      errors.message = "- required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setLoading(true)
      fetch("http://localhost:3001/api/sendMail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...values, emailAddress: localStorage.getItem('emailAddress') || 'ladrianmm@gmail.com'}),
      })
        .then((response) => {
          setLoading(false)
          setSuccess(true)
          return response.json();
        })
        .catch((err) => {
          setLoading(false)
          console.log(err);
          setError(true)
        });
      
      resetForm({});

      setTimeout(() => {
        setError(false)
        setSuccess(false)
      }, 4000)
    },
  });

  return (
    <div className='contact-container'>
      <div className='contact-title'>
        <h1>Contáctanos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quaerat pariatur nam velit minima tempore. Deserunt corrupti ipsum deleniti totam error repellendus quod modi quae at veniam, vitae est tempore!</p>
      </div>
      <Form onSubmit={formik.handleSubmit} className='contact-form'>
        <Form.Group className='group'>
          <Form.Group>
            <Form.Label>Nombre y Apellido * {formik.touched.name && formik.errors.name ? <span style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.name}</span> : null }</Form.Label>
            <Form.Control
              id="name"
              value={formik.values.name || ''}
              name="name" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text" 
              placeholder="Julian Castro"
              />
          </Form.Group>
          <Form.Group>
            <Form.Label>Correo Electronico * {formik.touched.email && formik.errors.email ? <span style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.email}</span> : null }</Form.Label>
            <Form.Control 
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email" 
              type="email" 
              placeholder="example@example.com"
              />
          </Form.Group>
        </Form.Group>
        <Form.Group>
          <Form.Label>Número de Contacto</Form.Label>
          <Form.Control
            id="phone"
            name="phone" 
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="+56955555555"
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dejanos un Mensaje * {formik.touched.message && formik.errors.message ? <span style={{color: 'red', fontWeight: 'bold'}}>{formik.errors.message}</span> : null }</Form.Label>
          <Form.Control 
            id="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="message" 
            as="textarea"
            rows={4} 
            placeholder="Cuentanos. ¿En que podemos ayudarte?...." 
            />
        </Form.Group>
        <Button style={success || error ? {display: 'none'} : {display: 'block'} } className='button-send' type="submit">
          {
            loading ? <Spinner animation="border" /> : 'Enviar'
          }
        </Button>
        <Button disabled style={success || error ? {display: 'block'} : {display: 'none'}} variant={success ? 'success' : 'danger'} className='button-send' type="submit">
          {
            success ? <span><AiOutlineCheck size={28} /> Mensaje enviado</span> : <span><AiOutlineClose size={28} /> Ha ocurrido un error</span>
          }
        </Button>
      </Form>
    </div>
  )
}

export default Contact
