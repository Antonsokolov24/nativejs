export const usersObj = {
    '0': 'Anton',
    '1': 'Nastya',
    '2': 'Valera',
    '3': 'Katya'
}
type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Anton'},
    '3232312': {id: 3232312, name: 'Nastya'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

let user = {id: 100500, name: 'Igor'}
users[user.id] = user;
delete users[user.id]
users[user.id].name='Vitya'

export const usersArray = [
    {id: 101, name: 'Anton'},
    {id: 3232312, name: 'Nastya'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}]
// usersArray.find(u => u.id === 1) поиск по массиву с id =1
//let usersCopy = [...usersArray.filter(),user] добавление юзера c фильтром чтобы не добавить дубликат
//let users = usersArray.filter( u => u.id !== user.id) фильтрация бзера у которого тру

