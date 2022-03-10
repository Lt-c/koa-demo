const fs = require('fs')
// 获取文件
function addControllers(router, dir) {
  let files = fs.readdirSync(__dirname + `/${dir}`);
  let jsFiles = files.filter(f => {
    return f.endsWith('.js');
  })
  for (let f of jsFiles) {
    console.log(`process controller:${f}`);
    let mapping = require(__dirname + `/${dir}/` + f)
    addMapping(router, mapping)
  }
}

function addMapping(router, mapping) {
  for (let url in mapping) {
    if (url.startsWith('GET ')) {
      let path = url.substring(4);// 第一个字符串的索引，截取4 之后的字符串
      router.get(path, mapping[url])
      console.log(`get url:${path}`);
    } else if (url.startsWith('POST ')) {
      let path = url.substring(5);
      router.post(path, mapping[url])
      console.log(`post url:${path}`);
    } else {
      console.log(`error url:${path}`);
    }
  }
}

module.exports = function (dir) {
  let 
    controllers_dir = dir || 'controllers',
    router =  require('koa-router')();
  addControllers(router, controllers_dir);
  return router.routes()
}

