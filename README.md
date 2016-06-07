# Arduino-Serial-Websocket-Demo
Connecting an arduino sensor (capacitive touch) to the internet via serial and websockets via nodejs

Contains 3 folders: Arduino, Server and Web

## Arduino
Connects to the websocket server and forwards any touch events from the Arduino to the server.

## Server
Listens for Arduino data and broadcasts to all connected clients

## Web
Simply page to test the latency of the Arduino->Web link. Background is red when the server cannot be reached, green when connected. Text indicates whether a touch has been sensed.

# Acknowledgements
- https://github.com/sitegui/nodejs-websocket
- https://github.com/scripting/betterWebSocketsDemo
