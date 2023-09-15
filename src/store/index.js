import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            userProfile: {
                name: '',
                age: '',
                school: '',
                degree: ''
            },
            profilePercentage: 0
        };
    },
    mutations: {  
        // This mutation is used to update the userProfile
        updateUserProfile: (state, userDetails) => {
            state.userProfile = {...userDetails};
        },

        setProfilePercentage: (state) => {
            // Count the number of filled fields in userProfile
            const filledFields = Object.values(state.userProfile).filter(value => value !== '').length;

            // Calculate the profilePercentage based on the filledFields
            state.profilePercentage = filledFields * 25;
        }

    },
    actions: {
        updateProfile: ({ commit }, userDetails) => {
            // Update the userProfile with the provided key and value
            commit('updateUserProfile', userDetails);
            
            // Recalculate the profilePercentage
            commit('setProfilePercentage');
        }
    },
    getters: {
        getUserProfile: (state) => state.userProfile,
        getPercentageValue : (state) => state.profilePercentage
    },
});
