import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderTextField} from '../../common/FormsConrols/FormControls';
import {validate} from '../../../utils/validators/validators';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onKeYPress = (e) => {
        if (e.key === 'Enter') {
            this.deactivateEditMode()
        }
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div style={{margin: '10px'}}>
                        <span
                            onDoubleClick={this.activateEditMode}>
                            <b>Status : </b> {this.props.status || 'No status'}
                        </span>
                    </div>
                    : <div>
                        Status:
                        <div style={{margin: '10px'}}>
                            <Field
                                name="status"
                                component={renderTextField}
                                label="Status"
                                onKeyPress={this.onKeYPress}
                                onBlur={this.deactivateEditMode}
                                autoFocus={true}
                                value={this.state.status}
                                onChange={this.onStatusChange}/>
                        </div>
                        {/*<input*/}
                        {/*    onKeyPress={this.onKeYPress}*/}
                        {/*    onBlur={this.deactivateEditMode}*/}
                        {/*    autoFocus={true}*/}
                        {/*    value={this.state.status}*/}
                        {/*    onChange={this.onStatusChange}/>*/}
                    </div>
                }
            </>
        );
    }
}


export default reduxForm({
    form: 'profileStatus',
    validate,
})(ProfileStatus)
