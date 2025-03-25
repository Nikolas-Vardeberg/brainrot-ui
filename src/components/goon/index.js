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
exports.default = Goon;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const clsx_1 = __importDefault(require("clsx"));
function Goon(_a) {
    var { variant, loading, className, onClick } = _a, props = __rest(_a, ["variant", "loading", "className", "onClick"]);
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onClick, className: (0, clsx_1.default)(buttonVariants({ variant }), className) }, props, { children: props.children })));
}
const buttonVariants = (0, class_variance_authority_1.cva)("px-4 py-2 inline-flex items-center justify-center rounded-md disabled:opacity-50 disabled:pinter-events-none text-base", {
    variants: {
        variant: {
            default: "bg-blue-500",
            outline: "border border-blue-500"
        }
    },
});
