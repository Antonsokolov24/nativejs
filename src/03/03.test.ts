import {StudentType} from "../02/02";
import {addSkill, doesStudentLive, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
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
})

test("new tech skill should be added to student", () => {
   expect(student.technoloies.length).toBe(3);

    addSkill(student, "JS")

    expect(student.technoloies.length).toBe(4);
    expect(student.technoloies[3].title).toBe("JS")
    expect(student.technoloies[3].id).toBeDefined();

})

test("student should be made active", () => {
    expect(student.isActive).toBe(false);

   makeStudentActive(student)

    expect(student.isActive).toBe(true);
})

test("does student live in city?", () => {

    let result1 = doesStudentLive(student, "Moscow");
    let result2 = doesStudentLive(student, "Irkutsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})