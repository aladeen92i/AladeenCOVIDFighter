export default (state, action) => {

    switch (action.type) {

        case 'REMOVE_PATIENT':

            return {
                ...state,
                patients: state.patients.filter(patient => patient.id !== action.payload)
            };

        case 'ADD_PATIENTS':

            return {
                ...state,
                patients: [...state.patients, action.payload]
            };

        case 'EDIT_PATIENT':

            const updatedPatient = action.payload;
            const updatedPatients = state.patients.map(patient => {
                if (patient.id === updatedPatient.id) {
                    return updatedPatient;
                }
                return patient;
            });
        
            return {
                ...state,
                patients: updatedPatients
            };

        case 'SET_CURRENT_USER':
            return {
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };

        default: return state;
    }
}