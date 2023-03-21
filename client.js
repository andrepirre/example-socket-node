const net = require('node:net');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const host = '127.0.0.1';
const port = 5000;

// Create interface with console input
const rl = readline.createInterface({ input, output });

// Create a new TCP client
const client = net.createConnection( port, host, () => {
    console.log('Connected');

    // capture the input
    rl.prompt(true);

    rl.on('line', (line) => {
        // send line to server
        client.write(line.toString());

        if(line === 'Over') {
            //close the input
            rl.close();
            // end the connection
            client.end();            
        } else {
            // capture the input
            rl.prompt(true);
        }
    });
});

client.on('close', () => {
    console.log('Closing connection');
});