import { IDemoState } from '../constant/Constant';
const init: IDemoState = {
    list: [],
    flag: false 
};
export function demoReducer(state: IDemoState = init, action: any): IDemoState {
    switch (action.type) {
        default:
            return state;
    }
}