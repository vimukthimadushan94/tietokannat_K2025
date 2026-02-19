const express = require('express');
const app = express();
app.use(express.json());
const myLoggerMiddleware = require('./middleware/logger');
app.use(myLoggerMiddleware);
const bookRouter = require('./routes/books');

app.use('/api', bookRouter);

app.get('/',
    function(request, response){
        response.send('Hello World');
    }
);

app.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
    }
);

app.get('/example2/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);


app.listen(3000,
    function() {
        console.log('Server running on port 3000');
    }
);