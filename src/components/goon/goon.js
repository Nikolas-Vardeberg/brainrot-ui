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
require("tailwindcss");
const react_1 = __importDefault(require("react"));
const class_variance_authority_1 = require("class-variance-authority");
const clsx_1 = __importDefault(require("clsx"));
function Goon(_a) {
    var { variant, className } = _a, props = __rest(_a, ["variant", "className"]);
    return (react_1.default.createElement("button", Object.assign({ className: (0, clsx_1.default)(buttonVariants({ variant }), className) }, props), props.children));
}
exports.default = Goon;
const buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center px-4 py-2 text-base disabled:opacity-50 disabled:cursor-not-allowed", {
    variants: {
        variant: {
            "default": "bg-black text-white",
            "outline": "border border-black text-black"
        }
    }
});
