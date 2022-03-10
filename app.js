const fs = require('fs');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
// 引入中间件
const controller = require('./controller');

app.use(controller())


// let files = fs.readdirSync(__dirname + '/controllers');
// // console.log(files);// 是一个数组
// let jsFiles = files.filter(f => {
//   return f.endsWith('.js');// 找出以 .js 结尾的文件
// })

// for (let f of jsFiles) {
//   console.log(`process controller:${f}`); // f 为字符串
//   // 导入js文件
//   let mapping = require(__dirname + '/controllers/' + f)
//   // console.log(mapping);// 对象
//   for (let url in mapping) {
//     if (url.startsWith('GET ')) {
//       let path = url.substring(4);// 第一个字符串的索引，截取4 之后的字符串
//       router.get(path, mapping[url])
//       console.log(`get url:${path}`);
//     } else if (url.startsWith('POST ')) {
//       let path = url.substring(5);
//       router.post(path, mapping[url])
//       console.log(`post url:${path}`);
//     } else {
//       console.log(`error url:${path}`);
//     }
//   }
// }
