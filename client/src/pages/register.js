import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../store/actions/authActions'

class Register extends Component{
    state = {
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        error:{}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.auth.error) !== JSON.stringify(prevState.error)) {
          return {
            error: nextProps.auth.error
          };
        }
        return null;
      }

    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = event =>{
        event.preventDefault()
        let {name,email,password,confirmPassword} = this.state
        this.props.register({name,email,password,confirmPassword})
    }

    render(){
        let {name,email,password,confirmPassword,error} = this.state
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3 className="text-center display-4">Register Here</h3>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="name">Name :</label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                name="name"
                                id="name"
                                value={name}
                                className={error.name ? 'form-control is-invalid':'form-control'}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{error.name}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                id="email"
                                value={email}
                                className={error.email ? 'form-control is-invalid':'form-control'}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{error.email}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password :</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                id="password"
                                value={password}
                                className={error.password ? 'form-control is-invalid':'form-control'}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{error.password}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword"> confirmPassword :</label>
                            <input
                                type="password"
                                placeholder="Enter confirmPassword"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={confirmPassword}
                                className={error.confirmPassword ? 'form-control is-invalid':'form-control'}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{error.confirmPassword}</div>
                        </div>
                        <input type="submit" value="Register" className="btn btn-sm btn-primary d-block"/>
                        <Link className="my-3" to="/login">Already have an account? Login here.</Link>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps,{register})(Register)