
import {createSlice} from '@reduxjs/toolkit' 

export const contributionsSlice = createSlice({
    name: 'contributions',
    initialState: {
      currentContribution: 0
      // Add initial state properties here.
    },
    reducers: {
        incrementContribution: (state) => {
            if(state.currentContribution < 8)state.mycurrentContribution +=1;
        },
        decrementContribution: (state) => {
            if(state.currentContribution > 0)state.currentContribution -=1;
        }
    }
  });