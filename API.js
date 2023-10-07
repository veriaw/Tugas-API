const http = require('http');
const url = require('url');
const {animals, users}=require('./data');
try{
    const server = http.createServer((req, res) => {
        // Kode untuk menangani permintaan dan memberikan respons
        if(req.method === 'GET'){
            //mengekstrak url dari request
            const parsedUrl = url.parse(req.url, true);
            const pathname = parsedUrl.pathname;
            
            // Menghandle request berdasarkan path request
            if(pathname === '/'){
                //menentukan tipe response body
                res.setHeader('Content-Type', 'html');
                
                //memberikan status code pada response
                res.writeHead(200); 

                //memberikan data pada response body dan mengakhiri response
                res.end('<h1>Halo dunia!<h1>\n')
            }else if(pathname ==="/animals"){
                //menentukan tipe response body
                res.setHeader('Content-Type', 'application/json');
                
                //memberikan status code pada response
                res.writeHead(200);
                
                //memberikan data pada response body dan mengakhiri response
                res.end(JSON.stringify(animals));
            }else if(pathname==="/users"){
                //menentukan tipe response body
                res.setHeader('Content-Type', 'application/json');
                
                //memberikan status code pada response
                res.writeHead(200);
                
                //memberikan data pada response body dan mengakhiri response
                res.end(JSON.stringify(users));
            }else{
                 //menentukan tipe response body
                res.setHeader('Content-Type', 'html');
                    
                //memberikan status code pada response
                res.writeHead(405); 

                //memberikan data pada response body dan mengakhiri response
                res.end('<h1>Anda Tidak Diizinkan Mengakses Link ini!!!<h1>\n')
            }
        }else{
            //menentukan tipe response body
            res.setHeader('Content-Type', 'html');
                
            //memberikan status code pada response
            res.writeHead(405); 

            //memberikan data pada response body dan mengakhiri response
            res.end('<h1>Anda Tidak Diizinkan Mengakses Link ini!!!<h1>\n')
        }
    });

const port = 3000;
server.listen(port, () => {
console.log(`Server berjalan di port ${port}`)});
}catch(err){
    console.log("Nama Error:", err.name);
    console.log("Error!!!", err.message);
    
}
