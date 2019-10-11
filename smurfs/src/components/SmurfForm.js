import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';




const SmurfForm = (props) => {

    const [newSmurf, setNewSmurf] = useState({name: '', age: '', height:''});

    const handleSubmit = e => {
        console.log(newSmurf)
       props.postSmurfs(newSmurf)
 }

    const handleChanges = e => {
        let name = e.target.name
        setNewSmurf({
            ...newSmurf,
            [name] : e.target.value
        })}

    return (
        <div>
            <form>
            <input
                type = "text"
                name = "name"
                // value = {newSmurf.name}
                onChange = {handleChanges}
                placeholder = "Name"
                />
            
            <input
                type = "text"
                name = "age"
                // value = {newSmurf.age}
                onChange = {handleChanges}
                placeholder = "Age"
                />

             <input
                type = "text"
                name = "height"
                // value = {newSmurf.height}
                onChange = {handleChanges}
                placeholder = "Height"
                />

            <button 
             onClick = {handleSubmit} 
            
            >Submit</button>
           </form> 
           
        </div>
    );
};
// };
export default connect(
    null,
    { postSmurfs }
)(SmurfForm)

// export default SmurfForm;
// const mapStateToProps = state => {
//     return {
//         smurfInfo: state.smurfInfo,
//         isFetching: state.isFetching,
//         error: state.error
//     };
// };

