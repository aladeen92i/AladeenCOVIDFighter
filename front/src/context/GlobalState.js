import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import api from '../utils/api';

const initialState = {
    isAuthenticated: false,
    user: {},
    patients: [{}],
    message: {}
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removePatient(id) {
        dispatch({
            type: 'REMOVE_PATIENT',
            payload: id
        });
    };

    function addPatient(patients) {
        dispatch({
            type: 'ADD_PATIENTS',
            payload: patients
        });
    };

    function editPatient(patients) {
        dispatch({
            type: 'EDIT_PATIENT',
            payload: patients
        });
    };

    function setCurrentUser(user) {
        dispatch({
            type: 'SET_CURRENT_USER',
            payload: user
        });
    };
    function addError(error) {
        dispatch({
            type: 'ADD_ERROR',
            payload: error,
        });
    };
    
    function removeError() {
        dispatch({
            type: 'REMOVE_ERROR'
        })
    };
    function logout() {
        return dispatch => {
            localStorage.clear();
            api.setToken(null);
            dispatch(setCurrentUser({}));
            dispatch(removeError());
        }
    }
    
    function authUser(path, data) {
        return async dispatch => {
            try {
                //console.log(path);
                //console.log(data);
                const {token, ...user} = await api.call('post', `auth/${path}`, data);
                localStorage.setItem('jwtToken', token);
                api.setToken(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
            } catch(err) {
                //console.log(err)
                const error = err.response.data;
                dispatch(addError(error.message)); 
            }
        }
    }
    
    return (<GlobalContext.Provider value={{
        patients: state.patients,
        user: state.user,
        message: state.message,
        removePatient,
        addPatient,
        editPatient,
        setCurrentUser,
        addError,
        removeError,
        logout,
        authUser

    }}>
        {children}
        
    </GlobalContext.Provider>);
}
