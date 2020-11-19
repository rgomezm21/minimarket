import { types } from '../../types/types';
interface AuthState {
	uid: string;
	name: string;
}

export const authReducer = (state: Partial<AuthState> = {}, action: any) => {
	switch (action.type) {
		case types.login:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName,
			};
		case types.logout:
			return {};
		default:
			return state;
	}
};
