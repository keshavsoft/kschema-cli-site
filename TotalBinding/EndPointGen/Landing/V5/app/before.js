...some code

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3000);

app.use(express.static('Public'));

...some code
