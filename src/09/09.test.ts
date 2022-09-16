function icreaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}
test('array test', () => {
    let users = [{
        name: 'Anton',
        age: 32
    },
        {
            name: 'Anton',
            age: 32
        }
    ]
    let admins = users

    admins.push({name: 'Kolya', age: 10})


    expect(users[2]).toEqual({name: 'Kolya', age: 10})

})

test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount
    adminsCount = adminsCount +1;
    adminsCount++
})

test('reference type test', () => {
    const address = {
        title: 'SPB'
    }
    let user: UserType = {
        name: 'Anton',
        age: 32,
        address: address
    }
    //let addr = user.address

    let user2: UserType = {
        name: 'Nastya',
        age: 29,
        address: address
    }

    const users = [user,user2,{name: 'Katya', age: 18, address: address}]

    const admins = [user,user2]

    admins[0].name = 'Toha'

    address.title = 'SPB'
    expect(users[0].name).toBe('Toha')
    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('SPB')

})