import Services from './Services';

// Async await usage
exports.data = async (url) => {
    const input = document.querySelector('#data-url').value;
    if (!input) {
        document.querySelector('#received-data').innerHTML = `
            Sisesta korrektne kasutaja!
        `;
        return;
    }

    try {
        const profileData = await Services.getData(`https://api.github.com/users/${input}`);
        const profile = await profileData.json();

        // Destructuring
        const { login, name, location, public_repos } = profile;
        
        document.querySelector('#received-data').innerHTML = `
            Kasutaja: ${login}, Nimi: ${name}, Asukoht: ${location}, Repos: ${public_repos}
        `;
    } catch (error) {
        throw Error(error);
    }
}

exports.textFromServer = async (url) => {
    try {

        const rawData = await Services.dataFromServer(url);
        document.querySelector('#received-data-time').innerHTML = rawData.data;

    } catch (error) {

        throw Error(error);

    }
}