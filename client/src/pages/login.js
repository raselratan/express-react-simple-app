import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Login extends Component{
    state = {
        email:'',
        password:'',
        error:{}
    }

    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = event =>{
        event.preventDefault()
        console.log("login")
    }

    render(){
        let {name,email,password,confirmPassword,error} = this.state
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3 className="text-center display-4">Login Here</h3>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                id="email"
                                value={email}
                                className="form-control"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password :</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                id="password"
                                value={password}
                                className="form-control"
                                onChange={this.changeHandler}
                            />
                        </div>
                        <input type="submit" value="Login" className="btn btn-sm btn-primary d-block"/>
                        <Link className="my-3" to="/register">Don't have an account? Rrgister here.</Link>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login