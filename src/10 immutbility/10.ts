export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}


export function makeHairStyle(u: UserType, power: number) {
    const copy = {//копия с содержимым старого сначала
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {//копия с содержимым старого сначала
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    // copy.address = {...copy.address, city: city}

}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {//копия с содержимым старого сначала
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {//копия с содержимым старого сначала
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {//копия с содержимым старого сначала
        ...u,
        books: [...u.books, newBooks]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: Array<string>, newBooks: Array<string>) {
    const copy = {
        //     ...u,
        //     books: u.books.map(b => {
        //         if (b === oldBook) {
        //             return newBooks
        //         } else {
        //             return b
        //         }
        //     })
        // }
        ...u,
        books: u.books.map(b => b === oldBook ? newBooks : b)
    }
    return copy
}