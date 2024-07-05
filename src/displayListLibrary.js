export default function displayListLibrary(obj) {

    const listLibraryDisplay = document.querySelector('#list-library-display');
    document.querySelector('#sidebar').appendChild(listLibraryDisplay);

    obj.listLibrary.forEach((list) => {
        const listSidebar = document.createElement('div');
        listSidebar.textContent = list.name;
        listLibraryDisplay.appendChild(listSidebar);
    });
}