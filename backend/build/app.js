"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var port = process.env.PORT || 8900;
var app = express_1.default();
app.get('/', function (req, res) {
    res.send('Working fine');
});
app.listen(port, function () {
    console.log("Server running on port " + port);
});
//# sourceMappingURL=app.js.map