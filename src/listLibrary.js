export default function listLibrary() {
    const library = [];

    const addList = function(list) {
        library.push(list);
    }

    const getLibrary = function() {
        return library;
    }
    return {library, getLibrary, addList};
}