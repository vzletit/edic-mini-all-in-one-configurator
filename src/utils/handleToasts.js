import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import store from '../slices/index';
import { setToastMsg, setErrorMsg } from '../slices/configsSlice';

const toastDefaults = {
  visibilityTime: 3000,
  autoHide: true,
  position: 'bottom',
};

export const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        text1Style={{
        fontSize: 17,
        fontWeight: '400',
      }}
      />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

const resetToasts = async () => {
  setTimeout(() => {
  store.dispatch(setToastMsg(null))
  store.dispatch(setErrorMsg(null))
}, 2000);
}


export default function handleToasts() {
  const getToastMsg = (state) => state.configs.toastMsg;
  const getErrorMsg = (state) => state.configs.errorMsg;

  async function handleMsgChange() {
    const currentToastMsg = getToastMsg(store.getState());
    const currentErrorMsg = getErrorMsg(store.getState());

    if (currentToastMsg) {
      Toast.show({
        ...toastDefaults,
        type: 'success',
        text1: currentToastMsg,
      });

      await resetToasts();      
      return;
    }

    if (currentErrorMsg) {
      Toast.show({
        ...toastDefaults,
        type: 'error',
        text1: currentErrorMsg,
      });
      await resetToasts();
      return;
    }

  }

  store.subscribe(handleMsgChange);
}
