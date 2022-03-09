let fnHello = async (ctx, next) => {
  let name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}</h1>`
}

module.exports = {
  'GET /hello/:name': fnHello
}