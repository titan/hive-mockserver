const http = require('http'),
      fs = require('fs'),
      zlib = require('zlib'),
      msgpack = require('msgpack-lite');

var server = http.createServer(function(req, rep) {
    rep.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    rep.setHeader('Access-Control-Allow-Credentials', true);
    rep.setHeader('Access-Control-Allow-Methods', 'POST');
    if (req.method == 'POST') {
        var chunks = [];
        req.addListener('data', function(chunk) {
            chunks.push(chunk);
        })
            .addListener('end', function() {
                const data = msgpack.decode(Buffer.concat(chunks));
                const mod = data.mod.replace("_", "-");
                const fun = data.fun;
                const arg = data.arg;
                const path = "data/" + mod + "/" + fun + ".json";
                console.log(mod + "." + fun + "(" + arg + ")");
                fs.exists(path, function(exists) {
                    if (exists) {
                        fs.readFile(path, "UTF-8", function(err, data) {
                            if (err) {
                                rep.writeHead(200, {'Content-Type': 'text/plain'});
                                rep.end();
                            } else {
                                const result = JSON.parse(data);
                                const stream = msgpack.createEncodeStream();
                                var acceptEncoding = req.headers['accept-encoding'];
                                if (!acceptEncoding) {
                                    acceptEncoding = '';
                                }
                                if (acceptEncoding.match(/\bdeflate\b/)) {
                                    rep.writeHead(200, { 'Content-Encoding': 'deflate' });
                                    stream.pipe(zlib.createDeflate()).pipe(rep);
                                    console.log('deflate');
                                } else if (acceptEncoding.match(/\bgzip\b/)) {
                                    rep.writeHead(200, { 'Content-Encoding': 'gzip' });
                                    stream.pipe(zlib.createGzip()).pipe(rep);
                                    console.log('gzip');
                                } else {
                                    rep.writeHead(200, {});
                                    stream.pipe(rep);
                                }
                                stream.write(result);
                                stream.end();
                            }
                        });
                    } else {
                        rep.writeHead(404, {'Content-Type': 'text/plain'});
                        rep.end();
                    }
                });
            });
    } else {
        rep.writeHead(405, {'Content-Type': 'text/plain'});
        rep.end();
    }
});

server.listen(8000);
console.log('Server running at http://0.0.0.0:8000/');
