import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => {
	return {
		type: UserActionTypes.SET_CURRENT_USER,
		payload: user
	};
};

//replacing the string 'SET_CURRENT_USER' to have consistency throughout and avoid typos
//UserActionTypes.SET_CURRENT_USER points to the same string i.e. 'SET_CURRENT_USER'