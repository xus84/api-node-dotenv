const app = require('./app')

app.listen(app.get('port'))
console.log('Server on Port', app.get('port'))