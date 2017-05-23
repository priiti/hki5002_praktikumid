exports.createList = (data) => {
    const ul = document.createElement('ul');

    data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item
        ul.appendChild(li);
    });
    
    return ul;
};

exports.headerSection = () => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    header.appendChild(h1);
    
    return header;
};