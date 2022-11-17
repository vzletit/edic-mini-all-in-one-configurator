/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentConfig: null,
  tempConfigName: '',
};

const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,

  reducers: {

    setCurrentConfig: (state, action) => { state.currentConfig = action.payload; },
    setTempConfigName: (state, action) => { state.tempConfigName = action.payload; },

    setConfigItem: (state, action) => {
      action.payload.groupName
        ? state.currentConfig.fields[action.payload.groupName].fields[action.payload.keyName].value = action.payload.value
        : state.currentConfig.fields[action.payload.keyName].value = action.payload.value;
    },
  },

});

export const {
  setCurrentConfig,
  setConfigName,
  setTempConfigName,

  setConfigItem,

} = settingsSlice.actions;

export default settingsSlice.reducer;
