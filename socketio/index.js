const http = require('http');
const socketio = require('socket.io');
const fs = require('fs');

const basicHandler = async (req, res) => {
    fs.readFile(__dirname + '/index.html', (error, data) => {
        if (error) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

const app = http.createServer(basicHandler);
const io = socketio.listen(app);

io.sockets.on('connection', (socket) => {
    setInterval(() => {
        const timestamp = Date.now();
        // console.log(`Emitted ${timestamp}`);
        socket.emit('timer', timestamp);
    }, 1000);

    socket.on('submit', (data) => {
        console.log(`From client: ${data}`);
    });
});

app.listen(8080, () => {
    console.log(`Server running on 8080`);
});