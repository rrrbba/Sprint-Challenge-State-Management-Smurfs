import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Member from './Member';

const Members = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    if (props.isFetching) {
        return <h2>Loading Smurfs!</h2>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.smurfInfo.map(smurf => (
                <Member key = {smurf.id} smurf = {smurf} />
            ))}
        </div>
    );

};

const mapStateToProps = state => {

    return {
        smurfInfo: state.smurfInfo,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(Members);