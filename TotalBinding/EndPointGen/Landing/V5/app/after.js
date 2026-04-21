...some code

const app = express();
const server = http.createServer(app);

<span class="highlight">import { router as routerFrom{subRoute} } from "./{subRoute}/routes.js";</span>
var port = normalizePort(process.env.PORT || 3000);

app.use(express.static('Public'));

<span class="highlight">app.use('/{subRoute}', routerFrom{subRoute});</span>
...some code
