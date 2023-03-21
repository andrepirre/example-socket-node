const net = require('node:net');

const port = 5000;

// Create TCP server
const server =  net.createServer((socket) => {
    // Receive data
    socket.on('data', (data) => {
        const data_str = data.toString();

        console.log(data_str);

        if(data_str === 'Over') {
            server.close();
        }
    });
});
console.log('Server started');

// Start to listen
server.listen(port, function () {
    console.log('Waiting for a client ...');
});

// Close connection
server.on('close', () => {
    console.log('Closing connection');
});