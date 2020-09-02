import React from 'react';


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
                    ? <div>
                        <span
                            onDoubleClick={this.activateEditMode}>
                            <b>Status : </b> {this.props.status || 'No status'}
                        </span>
                    </div>
                    : <div>
                        Status:
                        <input
                            onKeyPress={this.onKeYPress}
                            onBlur={this.deactivateEditMode}
                            autoFocus={true}
                            value={this.state.status}
                            onChange={this.onStatusChange}/>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus;