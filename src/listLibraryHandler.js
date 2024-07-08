export default function listLibraryHandler(obj) {
    obj.library.forEach((list) =>{
        document.querySelector(`#${list.name.replace(/\s+/g, '')}-list-button`).addEventListener('click', () => {
            console.log(`${list.name.replace(/\s+/g, '')}-list-button`);
        });
    });
}