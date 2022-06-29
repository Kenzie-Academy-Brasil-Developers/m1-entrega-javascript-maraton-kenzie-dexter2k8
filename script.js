let rivals = ['Rafael', 'Manuel', 'Daniel']
function positions(names) {
    let id = names.indexOf('Daniel')
    if (id != 0) {
        names.splice(id, 1)
        names.splice(id-1, 0, 'Daniel')
    }
    else {
        return 'Daniel é o vencedor'
    }
    return 'Este é o pódio: ' + names
}
console.log(positions(rivals));