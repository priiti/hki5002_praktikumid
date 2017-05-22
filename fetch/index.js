function getData(url) {
    fetch(url)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            throw Error(err);
        });
}

setInterval(() => {
    getData(url);
}, 1000);