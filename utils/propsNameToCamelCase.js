import camelize from '@/utils/camelize'

export default function(data) {
    let newData = {}
    if (data) {
        for (let key in data) {
            if (!data.hasOwnProperty(key)) {continue}
            newData[camelize(key)] = data[key]
        }
    }
    return newData
}
