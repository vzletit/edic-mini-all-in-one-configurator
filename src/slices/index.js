import { configureStore } from '@reduxjs/toolkit';
import settingsSlice from './settingsSlice';
import configslSlice from './configsSlice';

export default configureStore({
  reducer: {
    EMsettings: settingsSlice,
    configs: configslSlice,
  },
});
