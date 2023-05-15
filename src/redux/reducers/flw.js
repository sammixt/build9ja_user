import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    key: ''
}

export const flwPubKeyReducer = createReducer(initialState, {
    FlwPubKey: (state, action) => {
        state.key = action.payload
    },
    getFlwPubKeyFailed: (state, action) => {
        state.error = action.payload;
    }
})