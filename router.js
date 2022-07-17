function route(handle,pathname,response) {
    console.log("router.js get:",pathname);   
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response);
    }else{
        console.log("This type is not defined");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();    
    }
}
exports.route = route;