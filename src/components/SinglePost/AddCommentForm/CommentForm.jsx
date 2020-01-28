import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLength } from '../../utils/validators/validators'
import { textareaField } from '../../common/FormsControls/FormsControls'
import Button from '../../../elements/Button'


const maxLength300 = maxLength(300)
const AddCommentForm = (props) => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <span>Add new comment:</span>
            <Field
                name={'body'}
                placeholder={'Post message'}
                component={textareaField}
                validate={maxLength300}
            />
            <Button type="submit" disabled={pristine || submitting}>Add post</Button>
        </form>
    )
}
export default reduxForm({
    form: 'addCommentForm'
})(AddCommentForm)