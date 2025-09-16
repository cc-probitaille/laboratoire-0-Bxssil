"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParameterError = void 0;
const abstractError_1 = __importDefault(require("./abstractError"));
/**
 * @see Applying UML and Patterns, Chapter A35/F30
 */
class InvalidParameterError extends abstractError_1.default {
    code = 400;
}
exports.InvalidParameterError = InvalidParameterError;
//# sourceMappingURL=invalidParameterError.js.map