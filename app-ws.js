// learn web socket
// 导入WebScoket模块
const WebSocket = require('ws')
// 引用server 类
const WebSocketServer = WebSocket.Server;

// 实例化 
const wss = new WebSocketServer({
  port: 3000
})
// wss服务器实例
wss.on('connection', function (ws) {
  console.log(`[SERVER] connection()`);
  ws.on('message', function (message) {
    console.log(`[SERVER] Received: ${message}`);
    ws.send(`ECHO: ${message}`, (err) => {
      if (err) {
        console.log(`[SERVER] error: ${err}`);
      }
    });
  })
});


// ---------------------------
/**运行了app-ws.js后
 * 在浏览器的控制台中输入以下
 * // 打开一个WebSocket:
  var ws = new WebSocket('ws://localhost:3000/test');
  // 响应onmessage事件:
  ws.onmessage = function(msg) { console.log(msg); };
  // 给服务器发送一个字符串:
  ws.send('Hello!');
 *
 * websocket不要求同源，但是会在请求体的origin的http头服务器，服务器可以根据这个origin判断是否拒绝这个websocket请求
 *
 */
// ws客户端实例
let ws = new WebSocket('ws://localhost:3000/test');

// 打开WebSocket连接后立刻发送一条消息:
ws.on('open', function () {
  console.log(`[CLIENT] open()`);
  ws.send('Hello!');
});

// 响应收到的消息:
ws.on('message', function (message) {
  console.log(`[CLIENT] Received: ${message}`);
})