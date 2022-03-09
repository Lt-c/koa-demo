const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const app = Koa();
const fs = require('fs');

let files = fs.readFileSync(__dirname + '/controllers');

let jsFiles = files.filter(f => {
  return f.endsWith('.js');// 找出以 .js 结尾的文件
})

for(let f of jsFiles) {
  
}