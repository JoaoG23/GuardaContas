"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor() {
        this.secret = process.env.TOKEN_SECRET;
    }
}
exports.default = new Auth();
