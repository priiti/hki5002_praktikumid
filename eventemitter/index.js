const EventEmitter = require('events').EventEmitter;

const getResource = (value) => {
    const e = new EventEmitter();
    process.nextTick(() => {
        let count = 0;
        e.emit('start');
        let t = setInterval(() => {
            e.emit('data', count++);
                if (count === 3) {
                    e.emit('greeting', 'Hello');
                }
            if (count === value) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 1000);
    });
    return e;
};

const r = getResource(5);

r.on('greeting', message => {
    console.log(`${message}, Priit!`);
})

r.on('start', () => {
    console.log('Started...');
});

r.on('data', d => {
    console.log(`Received data is ${d}`);
});

r.on('end', t => {
    console.log(`Events done: ${t}`);
});