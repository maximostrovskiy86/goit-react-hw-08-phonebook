const getIsLogIn = state => state.auth.user.isLogIn;

const getUsername = state => state.auth.user.name;

const selectors = {
    getIsLogIn,
    getUsername,
}

export default selectors;