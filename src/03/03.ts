import { StudentType} from "../02/02";

export  const sum = (a: number, b: number) => {
    return a + b;
}
export const addSkill = (student: StudentType, skill: string) => {
    student.technoloies.push({
        id: new Date().getTime(),
    title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLive = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}