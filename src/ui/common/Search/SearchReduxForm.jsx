import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderTextField} from '../FormsConrols/FormControls';
import Button from '@material-ui/core/Button';


export const SearchForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name="search" component={renderTextField} label="Enter name"/>
            </div>
            <div style={{fontSize: '10px'}}>
                Сервер принимает только латинские буквы и цифры
            </div>
            <div>
                <Button  color="secondary" type="submit">Search</Button>
            </div>
        </form>
    )
}

const SearchReduxForm = reduxForm({form: 'search'})(SearchForm)

export default SearchReduxForm;

