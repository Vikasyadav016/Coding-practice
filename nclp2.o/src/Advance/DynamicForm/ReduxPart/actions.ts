import { actionTypes } from "./actionTypes";

export const SubmitForm = (payload: any) => {
    return {
        type: actionTypes.SubmitForm,
        payload
    };
};