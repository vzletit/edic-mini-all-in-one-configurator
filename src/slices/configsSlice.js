/* eslint-disable no-param-reassign */
import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  isAnyOf,
} from '@reduxjs/toolkit';
import i18n from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultData from '../configData/defaultData';
import {
 setCurrentConfig,
 setConfigItem,
} from './settingsSlice';

export const loadStored = createAsyncThunk(
  'configs/loadStored',
   async (_, { dispatch }) => {
    // await AsyncStorage.clear();
    const [configsStorage, noFirstRun] = await AsyncStorage.getAllKeys();
    const data = noFirstRun && configsStorage ? JSON.parse(await AsyncStorage.getItem('configsStorage')) : defaultData;
    dispatch(setAllConfigs(data));
  },
);

export const saveToStorage = createAsyncThunk(
  'configs/saveToStorage',
   async (stateForStorage) => {
    await AsyncStorage.setItem('configsStorage', JSON.stringify(stateForStorage));
    await AsyncStorage.setItem('noFirstRun', 'true');
  },
   );

const configsAdapter = createEntityAdapter();

const initialState = configsAdapter.getInitialState({
  status: 'readyLoadingStorage',
  isConfigModified: false,
  errorMsg: null,
  toastMsg: null,
}); // {ids: [], entities: {}}

const configsSlice = createSlice({
  name: 'Configs',
  initialState,
  reducers: {

    setStatusIdle: (state) => {
      state.status = 'idle';
      state.toastMsg = null;
      state.errorMsg = null;
    },

    setAllConfigs: configsAdapter.setAll,

    addConfig: (state, action) => { // addConfig: configsAdapter.addOne,
      configsAdapter.addOne(state, action.payload);
      state.isConfigModified = false;
      state.toastMsg = i18n.t('TOAST_CONFIG_ADDED');
      state.status = 'readySavingStorage';
    },
    updateConfig: (state, action) => {
      configsAdapter.updateOne(state, action.payload);
      state.isConfigModified = false;
      state.toastMsg = i18n.t('TOAST_CONFIG_UPDATED');
      state.status = 'readySavingStorage';
    },
    removeConfig: (state, action) => {
      configsAdapter.removeOne(state, action.payload);
      state.toastMsg = i18n.t('TOAST_CONFIG_REMOVED');
      state.status = 'readySavingStorage';
    },

  setStatus: (state, action) => { state.status = action.payload; },

  setErrorMsg: (state, action) => {
    state.toastMsg = null;
    state.errorMsg = action.payload;
  },

  setToastMsg: (state, action) => {
    state.errorMsg = null;
    state.toastMsg = action.payload;
  },

  setIsConfigModified: (state, action) => { state.isConfigModified = action.payload; },
  },

  extraReducers: (builder) => {
  builder
  .addCase(loadStored.pending, (state) => {
    state.status = 'LoadingFromStorage...'; state.errorMsg = null; state.toastMsg = null;
})
  .addCase(loadStored.fulfilled, (state) => { state.status = 'idle'; })
  .addCase(loadStored.rejected, (state) => { state.status = 'idle'; state.errorMsg = i18n.t('ERROR_LOADING_STORAGE'); })

  .addCase(saveToStorage.pending, (state) => {
    state.status = 'SavingToStorage...'; state.errorMsg = null; state.toastMsg = null;
})
  .addCase(saveToStorage.fulfilled, (state) => { state.status = 'readyLoadingStorage'; })
  .addCase(saveToStorage.rejected, (state) => {
    state.status = 'idle'; state.errorMsg = i18n.t('ERROR_SAVING_STORAGE');
})

  .addCase(setCurrentConfig, (state) => { state.status = 'idle'; state.errorMsg = null; state.toastMsg = null; })

  .addMatcher(isAnyOf(setConfigItem), (state) => { state.isConfigModified = true; });
},
});

export const configSelectors = configsAdapter.getSelectors((state) => state.configs);

export const {
 setAllConfigs,
 addConfig,
 updateConfig,
 removeConfig,
 setStatus, setErrorMsg,
 setToastMsg,
 setStatusIdle,
 setIsConfigModified,
} = configsSlice.actions;
export default configsSlice.reducer;
