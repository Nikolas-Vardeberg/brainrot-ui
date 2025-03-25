"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yap1 = Yap1;
exports.Yap2 = Yap2;
exports.Yap3 = Yap3;
exports.Yap4 = Yap4;
exports.Yap5 = Yap5;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
function Yap1(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement('h1', Object.assign({ className: (0, clsx_1.default)({ className }) }, props)));
}
function Yap2(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement('h2', Object.assign({ className: (0, clsx_1.default)({ className }) }, props)));
}
function Yap3(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement('h3', Object.assign({ className: (0, clsx_1.default)({ className }) }, props)));
}
function Yap4(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement('h4', Object.assign({ className: (0, clsx_1.default)({ className }) }, props)));
}
function Yap5(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (react_1.default.createElement('h5', Object.assign({ className: (0, clsx_1.default)({ className }) }, props)));
}
