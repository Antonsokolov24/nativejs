

type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach( () => {
    users = {
        '101': {id: 101, name: 'Anton'},
        '3232312': {id: 3232312, name: 'Nastya'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})


test("should update corresponding ", () => {
    users['1'].name = 'Ekaterina'

    // expect(users[1].name).toBe('Ekaterina');//сравнивает по имени
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'});
})

test("should delete corresponding", () => {
    delete users['1']

    expect(users['1']).toBeUndefined();
})