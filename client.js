var Client = require('node-rest-client').Client;

// direct way
client = new Client();

args ={
        path:{"id":120},
        parameters:{arg1:"hello",arg2:"world"},
        headers:{"test-header":"client-api"},
        data:"<xml><arg1>hello</arg1><arg2>world</arg2></xml>"
      };

client.post("http://remote.site/rest/xml/${id}/method?arg1=hello&arg2=world", args, function(data, response){
            // parsed response body as js object
            console.log(data);
            // raw response
            console.log(response);
});

// registering remote methods
client.registerMethod("xmlMethod", "http://remote.site/rest/xml/${id}/method", "POST");


client.methods.xmlMethod(args,function(data,response){
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});

// posted data can be js object
args_js ={
        path:{"id":120},
        parameters:{arg1:"hello",arg2:"world"},
        headers:{"test-header":"client-api"},
        data:{"arg1":"hello","arg2":123}
      };

client.methods.xmlMethod(args_js,function(data,response){
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});
