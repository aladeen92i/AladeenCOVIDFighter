import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    patients: [
        { id: 1, name: 'Aladeen', location: '92i', disease: "COVID-19"}
    ]
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

    return (<GlobalContext.Provider value={{
        patients: state.patients,
        removePatient,
        addPatient,
        editPatient
    }}>
        {children}
    </GlobalContext.Provider>);
}