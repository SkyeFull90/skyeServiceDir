let users = [];

export const addUser = (user) => {
    users.push(user);
}

export const removeUser = (user) => {
    users = users.filter(u => u !== user);
}

export const getUsers = () => {
    return users;
}