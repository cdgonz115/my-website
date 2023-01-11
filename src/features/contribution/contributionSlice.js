
import {createSlice} from '@reduxjs/toolkit' 


export const contributionsSlice = createSlice({
    name: 'contributions',
    initialState: {
      currentProject: '',
      currentContribution: 0,
      // Add initial state properties here.
    },
    reducers: {
        changeProject: (state, action) => {
            state.currentProject = action.payload;
            state.currentContribution = 0;
        },
        incrementContribution: (state) => {
            console.log('incrementReducer');
            state.currentContribution +=1;
        },
        decrementContribution: (state) => {
            console.log('decrementReducer');
            state.currentContribution -=1;
        }
    }
  });

  export const { changeProject, incrementContribution, decrementContribution } = contributionsSlice.actions;

  export const selectProject = (state) => state.contribution.currentProject;

  export const selectContribution = (state) => state.contribution.currentContribution;

  export default contributionsSlice.reducer;