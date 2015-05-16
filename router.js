function route (handle, pathname) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		// [Function: start] 
		// console.log(handle[pathname]); 
		// / 
		// console.log(pathname);
		console.log("<33333")
		handle[pathname](); 
	} else {
		console.log("No request handler found for " + pathname); 
	}
}

exports.route = route; 