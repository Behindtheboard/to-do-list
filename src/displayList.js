export default function displayList(list) {
    const container = document.querySelector('#container')

    const listDisplay = document.createElement('div');
    listDisplay.setAttribute('id', 'list-display')
    container.appendChild(listDisplay);

    const listTitle = document.createElement('h2');
    listTitle.textContent = `${list}`; 
    listDisplay.appendChild(listHeader);

    // const taskListDisplay = document.createElement('div')
    
}