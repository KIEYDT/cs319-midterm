// 9: module
export function calculateMedianGrade(grades: number[]): number {
    const sortedGrade = grades.sort((a, b) => a - b)
    const med = sortedGrade.length / 2

    if (med % 1 === 0) { // even length
        return (sortedGrade[med] + sortedGrade[med - 1]) / 2
    } else if (med % 1 === 0.5) {
        return sortedGrade[med - 0.5]
    } else {
        return 0
    }
}