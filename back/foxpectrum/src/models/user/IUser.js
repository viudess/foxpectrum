"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    family: { type: mongoose_1.Types.ObjectId, ref: 'Family', required: false },
    password: { type: String, required: true },
});
//# sourceMappingURL=IUser.js.map