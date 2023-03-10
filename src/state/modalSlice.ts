import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const modalUISize: {
  [key: string]: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen' | undefined;
} = {
  MINI: 'mini',
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large',
  FULLSCREEN: 'fullscreen',
};

interface IModalState {
  modalOpen?: boolean;
  modalTitle?: string | React.ReactNode;
  modalContent?: React.ReactElement | string | null;
  modalSize?: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen' | undefined;
  modalIsBasic?: boolean;
  modalFitContentWidth?: boolean;
  modalShowCloseIcon?: 'Y' | 'N';
  modalContentId?: string;
  modalContentBackground?: string;
}

interface IActionPayload extends IModalState {}

const initialState = {
  modalOpen: false,
  modalTitle: '',
  modalContent: null,
  modalSize: modalUISize.SMALL,
  modalIsBasic: false,
  modalFitContentWidth: false,
  modalShowCloseIcon: 'Y',
  modalContentId: '',
  modalContentBackground: '#30343F',
} as IModalState;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action: PayloadAction<IActionPayload>) {
      state.modalOpen = true;
      state.modalTitle = action.payload.modalTitle;
      state.modalContent = action.payload.modalContent;
      state.modalSize = action.payload.modalSize;
      state.modalIsBasic = action.payload.modalIsBasic || false;
      state.modalFitContentWidth = action.payload.modalFitContentWidth || false;
      state.modalShowCloseIcon = action.payload.modalShowCloseIcon || 'Y';
      state.modalContentId = action.payload.modalContentId;
      state.modalContentBackground = action.payload.modalContentBackground;
    },
    closeModal(state) {
      state.modalOpen = false;
      state.modalTitle = '';
      state.modalContent = null;
      state.modalSize = modalUISize.SMALL;
      state.modalIsBasic = false;
      state.modalFitContentWidth = false;
      state.modalShowCloseIcon = 'Y';
      state.modalContentId = '';
      state.modalContentBackground = '#30343F';
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
