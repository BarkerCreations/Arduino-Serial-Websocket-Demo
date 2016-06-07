var SerialPort = require("serialport");
var ws = require("nodejs-websocket");

var serialport = new SerialPort.SerialPort(
	"/dev/tty.usbmodemFA131", {
	baudRate: 9600,
	parser: SerialPort.parsers.readline('\n')
});

serialport.on('open', function(){
  console.log('Serial Port Opened');
  serialport.on('data', function(data){
  	if (+data > 1000) {
  		writeTouchToSocket()
  	}
  });
});

var connection = ws.connect("ws://barker-creations.co.uk:8001");

function writeTouchToSocket() {
	connection.sendText("TOUCH");
}
