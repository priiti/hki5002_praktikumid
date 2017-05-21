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
    const profileData = await Services.getData(`https://api.github.com/users/${input}`);
    const profile = await profileData.json();

    // Destructuring
    const { login, name, location, public_repos } = profile;
    
    document.querySelector('#received-data').innerHTML = `
        Kasutaja: ${login}, Nimi: ${name}, Asukoht: ${location}, Repos: ${public_repos}
    `;
}

exports.textFromServer = async () => {
    const data = await Services.getData(`http://tigu.hk.tlu.ee/~priit.parl/programmeerimine-1-js/tekst.txt`);
    const received = await data.json();
    console.log(received);
}