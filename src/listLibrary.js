export default function listLibrary() {
    const library = []

    const addList = function(list) {
        library.push(list);
    }
    return {library, addList}
}