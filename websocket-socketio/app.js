const socketio = require('socket.io');
const express = require('express');
const path = require('path');
const r = require('rethinkdb');

const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

const io = socketio.listen(app.listen(8008), () => {
	console.log('App running on 8008');
});

io.sockets.on('connection', (socket) => {
    r.connect({ db: 'test' })
        .then((conn) => {
            r.table('Person').run(conn, (error, cursor) => {
                if (error) {
                    throw error;
                }
                
                cursor.toArray((error, result) => {
                    if (error) {
                        throw error;
                    }
                    // console.log(JSON.stringify(result, null, 2));
                    io.emit('start', result);
                })
            })
        });
    
	console.log('Connected to socket!');
});


r.connect({ db: 'test' })
	.then((conn) => {
		r.table('Person').changes().run(conn, (err, cursor) => {
			cursor.each((err, item) => {
				io.emit('person_data', item);
                // console.log(item);
			});
		});
	}
);