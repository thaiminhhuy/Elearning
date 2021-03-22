import { SignUps } from "../../../Interface/Interface"
import * as ActionType from "../Constant/Constants"
const initialState: SignUps = {
    user: {}
}
const SignUpsReducer = (state: SignUps = initialState, action: any) => {
    switch (action.type) {
        case ActionType.SIGN_UP:
            console.log(action.data);
            state.user = action.data;
            break;
        default:
            break;
    }
    return { ...state };
};
export default SignUpsReducer;
