const getDefaultState = () => {
	return {
		hasToken: false
	};
};

const state = getDefaultState();

const mutations = {
	SET_TOKEN: (state, value) => {
		state.hasToken = value
	},
	LOGIN: (state,value = true) => {
		state.hasToken = value
	}
};

const actions = {

};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
