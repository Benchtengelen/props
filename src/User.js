import React, { Component } from 'react'
import './App.css'

 class User extends Component {
    render() {

        //Destructing
        const {name,department,salary} = this.props;
        return (
            <div>
                <li>Name: {name} </li>
                <li>Department: {department}</li>
                <li>Salary: {salary} </li>
            </div>
        )
    }
}


export default User;