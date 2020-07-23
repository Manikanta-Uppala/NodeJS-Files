const fs = require('fs');
const path = require('path');


let mapRoutes = function(request , response) {
    let url = require.url;
 //node js routing
 if(url === '/'){
        
    fs.readFile(path.join(__dirname,'..' , 'views','index.html') , 'utf-8' , (err , data) => {
        if(err) throw err;
         response.end(data);
    });
}
else if(url === '/about'){
        
    fs.readFile(path.join(__dirname, '..' , 'views','about.html') , 'utf-8' , (err , data) => {
        if(err) throw err;
         response.end(data);
    });
}

else if(url === '/getintouch'){
        
    fs.readFile(path.join(__dirname,'..' , 'views','getintouch.html') , 'utf-8' , (err , data) => {
        if(err) throw err;
         response.end(data);
    });
}
else{
    fs.readFile(path.join(__dirname,'..' , 'views' , '404.html') , 'utf-8' , (err , data) => {
        if(err) throw err;
         response.end(data);
    });   
}
};
module.exports = {
    mapRoutes
}