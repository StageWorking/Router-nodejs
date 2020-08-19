/* Router-nodejs
 * https://github.com/h5mcbox/Router-nodejs/
 * 2020/08/19
*/
const route={}
const hostbind="" //const hostbind="https://example.com"
const router=function(url,res, body = route["/404"], status = 200, headers = {}) {
    var url = new URL(url);
    try {
        if (typeof body === "function") {
            var func = body(url);
            res.writeHead(func[1]["status"],func[1]["headers"]);
            res.end(func[0]);
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(body)
        }
    }
    catch (e) {
        if (route["/500"]) {
            var func = route["/500"](url, e.name, e.message);
            res.writeHead.apply(this, func[1]);
            res.end(func[0]);
            return null;
        }
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Web server gots some error.\n${e.name} ${e.message}`);
    }
}
module.exports=router
