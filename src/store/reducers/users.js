const initialAppState = [
    {
        "user_id": 1,
        "username":"user 1"
    },
    {
        "user_id": 2,
        "username":"user 2"
    },
    {
        "user_id": 3,
        "username":"user 3"
    },
    {
        "user_id": 4,
        "username":"user 4"
    },
    {
        "user_id": 5,
        "username":"user 5"
    }
];

const UserReducer = (state=initialAppState,action) => {
    return state;
};

export default UserReducer;