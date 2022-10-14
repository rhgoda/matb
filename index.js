import express from "express"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let router = express.Router()

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

router.get('*', function(req, res, next) {
    let reqpath = path.join(__dirname, 'dist', req.url);
    reqpath = reqpath.replace("..", "");
    res.sendFile(reqpath)
});

export default router