export default function displayListLibrary(obj) {

    const listLibraryDisplay = document.querySelector('#list-library-display');
    document.querySelector('#sidebar').appendChild(listLibraryDisplay);

    obj.library.forEach((list) => {
        const listSidebar = document.createElement('button');
        listSidebar.textContent = list.name;
        listLibraryDisplay.appendChild(listSidebar);
    });
}