const defaultState = () => ({
    byId: {},
    byPost: []
});

const ChartReducer = (state = defaultState(), action) => {
    Object.freeze(state);
    const copyState = Object.assign({}, state);

    switch (action.type) {
    default:
        return copyState;
    }
};

export default ChartReducer;