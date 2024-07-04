export default function displayList(list) {
    const container = document.querySelector('#container')

    const listDisplay = document.createElement('div');
    listDisplay.setAttribute('id', 'list-display')
    container.appendChild(listDisplay);

    const listHeader = document.createElement('h2');
    listHeader.textContent = list.name; 
    listDisplay.appendChild(listHeader);

    // const taskListDisplay = document.createElement('div')
    
}