import Services from './Services';
import DOMElements from './DOMElements';

exports.showUserGithubData = async (url) => {
    const usernameInput = document.querySelector('#git-username').value;
    const response = await Services.getData(`https://api.github.com/users/${usernameInput}`);
    
    const arr = new Array();
    const { login, name, location, public_repos } = response.data;
    arr.push(`Login: ${login}`, `Name: ${name}`, `Location: ${location}`, `Public repos: ${public_repos}`);

    document.querySelector('#git-answer').appendChild(DOMElements.createList(arr));
};