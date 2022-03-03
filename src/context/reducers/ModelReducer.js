const ModelReducer = (state, action) => {
    if (action.type === "OPEN_MODEL") {
        return { modelStatus: true };
    } else if (action.type === "CLOSE_MODEL") {
        return { modelStatus: false };
    }

    return state;
};

export default ModelReducer;