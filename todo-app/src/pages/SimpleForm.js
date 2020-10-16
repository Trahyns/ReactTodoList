import React from 'react';
import { Container } from "react-bootstrap";
import { Field, reduxForm } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import asyncValidate from './asyncValidate'
import { RadioButton } from 'material-ui/RadioButton'
import {
    Checkbox,
    RadioButtonGroup,
    SelectField,
    TextField,
} from 'redux-form-material-ui'


const validate = values => {
    const errors = {}
    const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const renderTextField = props => (
    <TextField hintText={props.label}
        floatingLabelText={props.label}
        errorText={props.touched && props.error}
        {...props}
    />
)

const renderCheckbox = props => (
    <Checkbox label={props.label}
        checked={props.value ? true : false}
        onCheck={props.onChange} />
)

const renderSelectField = props => (
    <SelectField
        floatingLabelText={props.label}
        errorText={props.touched && props.error}
        {...props}
        onChange={(event, index, value) => props.onChange(value)}>
    </SelectField>
)

const submit = (values) => {
    console.log('submit inside form');
    console.log(values);
}

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <React.Fragment>  
            <Container className="fluid">
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <Field name="firstName" component={renderTextField} label="First Name" />
                    </div>
                    <div>
                        <Field name="lastName" component={renderTextField} label="Last Name" />
                    </div>
                    <div>
                        <Field name="email" component={renderTextField} label="Email" />
                    </div>
                    <div>
                        <Field name="sex" component={RadioButtonGroup}>
                            <RadioButton value="male" label="male" />
                            <RadioButton value="female" label="female" />
                        </Field>
                    </div>
                    <div>
                        <Field name="favoriteColor" component={renderSelectField} label="Favorite Color">
                            <MenuItem value={'ff0000'} primaryText="Red" />
                            <MenuItem value={'00ff00'} primaryText="Green" />
                            <MenuItem value={'0000ff'} primaryText="Blue" />
                        </Field>
                    </div>
                    <div>
                        <Field name="employed" component={renderCheckbox} label="Employed" />
                    </div>
                    <div>
                        <Field name="notes" component={renderTextField} label="Notes" multiLine={true} rows={2} />
                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                    </div>
                </form>
        </Container>
            </React.Fragment>
    ); 
}

export default reduxForm({
    form: 'simple', // a unique identifier for this form
    validate,
    asyncValidate
})(SimpleForm)