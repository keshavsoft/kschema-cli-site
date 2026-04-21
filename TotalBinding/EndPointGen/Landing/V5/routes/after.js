import express from 'express';

<span class="highlight">import { router as routerFrom{subRoute} } from "./{subRoute}/routes.js";</span>
const router = express.Router();

<span class="highlight">router.use('/{subRoute}', routerFrom{subRoute});</span>
export { router };