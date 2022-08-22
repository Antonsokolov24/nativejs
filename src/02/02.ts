type LocalCiteType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCiteType
}
type TechType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technoloies: Array<TechType>
}

const student: StudentType = {
    id: 1,
    name: "Anton",
    age: 32,
    isActive: false,
    address: {
        cityTitle: "32-1",
        city: {
            title: "Irkutsk",
            countryTitle: "Russia"
        }
    },
    technoloies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technoloies[2].title)
