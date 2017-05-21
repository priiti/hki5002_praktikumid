import Services from './Services';

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
    document.querySelector('#received-data').innerHTML = `
        Kasutaja: ${profile.login}, Nimi: ${profile.name}, Asukoht: ${profile.location}
    `;
}

exports.textFromServer = async () => {
    const data = await Services.getData(`http://tigu.hk.tlu.ee/~priit.parl/programmeerimine-1-js/tekst.txt`);
    const received = await data.json();
    console.log(received);
}