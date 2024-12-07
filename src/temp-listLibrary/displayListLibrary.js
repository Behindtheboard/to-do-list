import transformName from "./transformName";

export default function displayListLibrary(obj) {
    
    const listLibraryDisplay = document.querySelector('#list-library-display');
    
    obj.library.forEach((list) => {
        const processedListName = transformName(list);
        const listSidebar = document.createElement('button');
        listSidebar.setAttribute('id', `${processedListName}-list-button`);
        listSidebar.classList.add('list-button');
        listSidebar.textContent = list.name;
        listLibraryDisplay.appendChild(listSidebar);
    });  
}