var ws = require("nodejs-websocket")
var options = {}

/* Make our server */
var server = ws.createServer(options, function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log("Received "+str)
        // echo back
        echoTouch();
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001)

/* Rebroadcast the touch */
function echoTouch() {
	for (var i = 0; i < server.connections.length; i++) {
		var theConnection = server.connections [i];
		var theMsg = "TOUCHED";
		theConnection.sendText (theMsg);
	}

}