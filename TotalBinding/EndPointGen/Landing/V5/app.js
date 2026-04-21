function createAPI() {
    const name = document.getElementById("apiName").value.trim();
    const output = document.getElementById("outputCode");

    if (!name) {
        output.innerText = "Enter API name first";
        return;
    };

    const code = `// app.js

...some code 

<span class="highlight">import { router as routerFromApi } from "./Api/routes.js";</span>
const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3000);

app.use(express.static('Public'));

<span class="highlight">app.use('/${name}', routerFromApi);</span>
...some code
`;

    output.innerHTML = `<pre>${code}</pre>`;
    // output.innerText = code;
}

function goNext() {
    window.location.href = "routes.html";
}