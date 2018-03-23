prpl = require('prpl-server');
express = require('express');

const app = express();

app.get('/*', prpl.makeHandler('./build', {
    builds: [
        {name: 'es6-unbundled', browserCapabilities: ['es2015', 'push']},
        {name: 'es6-bundled', browserCapabilities: ['es2015']},
        {name: 'es5-bundled'}
    ]
}))

app.listen(8080, ()=>console.log('Serving simple-poly-todo on port 8080'));