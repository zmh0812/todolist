import * as constants from './constants';

export const InputChange = (value) => ({
    type: constants.INPUT_CHANGE,
    value
});

export const AreaChange = (value) => ({
    type: constants.AREA_CHANGE,
    value
});

export const SubmitItem = () => ({
    type: constants.SUBMIT_ITEM
})