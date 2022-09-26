import {
    addNewBooksToUser,
    moveUser,
    moveUserToOtherHouse, updateBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10";

function makeHairStyle(u: UserType, power: number) {
    const copy = {//копия с содержимым старого сначала
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Irkutsk'
        }
    }
    const awesome = makeHairStyle(user, 2)
    expect(user.hair).toBe(32)
    expect(awesome.hair).toBe(16)
    expect(awesome.address).toBe(user.address)
})

test('reference type test', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser (user, 'SPB')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('SPB')
})


test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const userCopy = upgradeUserLaptop (user, 'Macbook')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = moveUserToOtherHouse (user, 99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addNewBooksToUser(user,'ts' )


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Irkutsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = updateBook(user,'js','ts' )


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})