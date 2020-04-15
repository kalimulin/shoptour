export default function removeDuplicate(arr) {
    return arr ? arr.filter(function(elem, index, self) {
        return index === self.indexOf(elem)
    }) : []
}
