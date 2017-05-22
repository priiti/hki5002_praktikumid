exports.createList = (data) => {
    const ul = document.createElement('ul');

    data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item
        ul.appendChild(li);
    });
    
    return ul;
};