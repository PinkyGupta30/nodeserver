const http = require("http")
const server=http.createServer((req,res)=>
{
    const url = req.url;
    const method = req.method;

    if(req.url==='/')
    {
        //form
        res.setHeader('Content-Type','text/html');

        res.end(`
            <form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username"></input>
                <button type="submit">Add</button>
            </form>
        `);
    }
    else
    {
        if(req.url=='/message' && method === "POST")
        {
            res.setHeader('Content-Type','text/html');
            let dataChunks=[];
            req.on('data',(chunks)=>
            {
                console.log(chunks);
                dataChunks.push(chunks);
            })

            req.on("end",()=>{
                let combineBuffer = Buffer.concat(dataChunks);
                console.log(combineBuffer.toString());
            });
        }
    }

});

server.listen(5000,()=>
{
    console.log("server is running");
});