
const max = (arr) => arr.reduce((a, b) => Math.max(a, b), -Infinity);

const riskIsHigh = (risk) => risk >= 50

const riskIsMediumRisk = (risk) => risk < 50 && risk >= 25

const riskIsLow = (risk) => risk < 25 && risk > 0

export const calculateRisk = (student) => {
    console.log(student)

    const highestMotionScore = max(student.tests.motion_test.map((it) => it.score))

    const highestFormFixedScore = max(student.tests.fixed_form_test.map((it) => it.score))

    const highestFormRandomScore = max(student.tests.random_form_test.map((it) => it.score))

    console.log(highestMotionScore)

    if (riskIsHigh(highestFormFixedScore) | riskIsHigh(highestFormRandomScore)) {
        return "Usikker"
    } else {
        if (riskIsHigh(highestMotionScore)) {
            return "Høy"
        } else if (riskIsMediumRisk(highestMotionScore)) {
            return "Middels"
        } else if (riskIsLow(highestMotionScore)) {
            return "Lav"
        } else {
            return ""
        }
    }
}