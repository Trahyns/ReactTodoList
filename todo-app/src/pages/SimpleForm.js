import React from "react";
import { reduxForm } from 'redux-form';
import { MDBRow, MDBCol, MDBBtn, MDBInput, MDBIcon } from "mdbreact";
import { Container } from "react-bootstrap";

class SimpleForm extends React.Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        city: "",
        state: "",
        zip: ""
    };

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
          <Container>
            <div>
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <MDBRow>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                                className="grey-text"
                            >
                                First Name
              </label>
                            <input
                                value={this.state.fname}
                                name="fname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="First name"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterEmailEx2"
                                className="grey-text"
                            >
                                Last Name
              </label>
                            <input
                                value={this.state.lname}
                                name="lname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterEmailEx2"
                                className="form-control"
                                placeholder="Last name"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="grey-text"
                            >
                                Email
              </label>
                            <input
                                value={this.state.email}
                                onChange={this.changeHandler}
                                type="email"
                                id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                name="email"
                                placeholder="Your Email address"
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
              </small>
                        </MDBCol>
                    </MDBRow>
                    <MDBCol>
                        <div>
                            <MDBInput type="textarea" rows="2" placeHolder="Your message" icon="pencil-alt"></MDBInput>
                        </div>
                    </MDBCol>
                    <MDBCol md="4" className="mb-3">
                        <div className="custom-control custom-checkbox pl-3">
                            <input
                                className="custom-control-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                            />
                            <label className="custom-control-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
              </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
              </div>
                        </div>
                    </MDBCol>
                    <MDBBtn color="primary" type="submit">
                        Submit Form
          </MDBBtn>
                </form>
            </div>
            </Container>  
        );
    }
}


export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(SimpleForm)