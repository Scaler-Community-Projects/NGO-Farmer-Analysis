export default (state, action) => {
    switch (action.type) {
        case "demo":
            return {
                demo: action.payload
            };
        default:
            return state;
    }
};