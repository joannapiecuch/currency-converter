import { Action } from 'redux';

export const createActionType = (name: string, action: string) => ({
	REQUEST: `${name}/${action}/REQUEST`,
	SUCCESS: `${name}/${action}/SUCCESS`,
	FAILURE: `${name}/${action}/FAILURE`,
});

export interface PayloadAction extends Action {
	payload: any;
}
