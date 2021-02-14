async function result() {
    try {
        const loginUser = await userStorage.loginUser(id, password);
        const getRoles = await userStorage.getRoles(loginUser);
        return alert(`Hello ${loginUser}, you have a ${getRoles.role}`);
    } catch (err) {
        console.log(err);
    }
}
result();


