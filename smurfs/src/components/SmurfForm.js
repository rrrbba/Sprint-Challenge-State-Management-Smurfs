import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';
import axios from 'axios';


const SmurfForm = (props) => {

    const [newSmurf, setNewSmurf] = useState({name: '', age: '', height:''});

    const handleSubmit = e => {
       e.preventDefault();

 }

    const handleChanges = e => {

        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })

    return (
        <div>
            <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                name = "name"
                value = {name}
                onChange = {handleChanges}
                placeholder = "Name"
                />
            
            <input
                type = "text"
                name = "age"
                value = {age}
                onChange = {handleChanges}
                placeholder = "Age"
                />

             <input
                type = "text"
                name = "height"
                value = {height}
                onChange = {handleChanges}
                placeholder = "Height"
                />

            <button 
             type = "submit"
            >Submit</button>

            </form>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         smurfInfo: state.smurfInfo,
//         isFetching: state.isFetching,
//         error: state.error
//     };
// };

export default connect(
    null,
    { postSmurfs }
)(SmurfForm);