export const add = (num = 7) => {
    return {
        type: "INC",
        num: num
    }
}

export const minus = (num = 2) => {
    return {
        type: "MIN",
        num: num / num
    }
}