import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength } from '../../utils/validators/validators'
import { textareaField, inputField } from '../../common/FormsControls/FormsControls'
import {Form, FormTitle} from './PostForm.styles'
import Button from '../../../elements/Button'


const maxLength300 = maxLength(300)
const AddPostForm = (props) => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <Form onSubmit={handleSubmit}>
            <FormTitle>Add new post:</FormTitle>
            <Field
                name={'title'}
                placeholder={'Post title'}
                component={inputField}
                validate={maxLength300}
            />
            <Field
                name={'body'}
                placeholder={'Post message'}
                component={textareaField}
                validate={maxLength300}
            />
            <Button type="submit" disabled={pristine || submitting}>Add post</Button>
        </Form>
    )
}
export default reduxForm({
    form: 'addPostForm'
})(AddPostForm)