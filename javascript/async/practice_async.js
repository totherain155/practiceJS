class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'totherain' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id)
                } else {
                    reject(new Error('not found'))
                }
            }, 2000);
        })

    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'totherain') {
                    resolve({ name: 'totherain', role: 'admin' })
                } else {
                    reject(new Error('no access'))
                }
            }, 1000)
        })

    }
}


const userStorage = new UserStorage()
const id = prompt('enter your id');
const password = prompt('enter your password')
async function result() {
    try {
        const loginUser = await userStorage.loginUser(id, password);
        const getRoles = await userStorage.getRoles(loginUser);
        alert(`Hello ${loginUser}, you have a ${getRoles.role}`);
    } catch (err) {
        console.log(err);
    }
}

result();


