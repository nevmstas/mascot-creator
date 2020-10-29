import React from 'react'
import { Form, Field } from 'react-final-form'

interface ValuesType {
  name: string
  description: string
}

interface ErrorType extends ValuesType {}

const validateFunc = (values: ValuesType): ErrorType => {
  const errors = { name: '', description: '' }
  if (!values.name) {
    errors.name = 'Required'
  }

  return errors
}

export const UserForm = () => {
  return (
    <Form
      initialValues={{
        name: 'stas',
        description: 'desc'
      }}
      onSubmit={(values: ValuesType) => {
        console.log(123)
        alert(JSON.stringify(values))
      }}
      validate={validateFunc}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name">
            {({ input, meta }) => (
              <div>
                <label>Name</label>
                <input {...input} type="text" placeholder="Name" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field name="description">
            {({ input, meta }) => (
              <div>
                <label>Description</label>
                <input {...input} type="text" placeholder="Description" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          {/* <Field name="name" component="input" placeholder="Name" />
          
          <Field name="description" component="input" placeholder="Description" /> */}

          <button type="submit">Submit</button>
        </form>
      )}
    />
  )
}
