export default function splitNCharsToString(txt, num = 4) {
    let result = ''
    for (let i = 0; i < txt.length; i += num) {
        result += txt.substr(i, num)
        if (txt.length - i > 1) {
            result += ' '
        }
    }
    return result
}
