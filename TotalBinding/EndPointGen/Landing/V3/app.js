function createAPI() {
    const name = document.getElementById("apiName").value.trim();
    const output = document.getElementById("outputCode");

    if (!name) {
        output.innerText = "Enter API name first";
        return;
    }

    const code = `// app.js

...some code 

import { router as routerFromApi } from "./Api/routes.js";

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3000);

app.use(express.static('Public'));

app.use('/${name}', routerFromApi);

...some code
`;

    output.innerText = code;
}