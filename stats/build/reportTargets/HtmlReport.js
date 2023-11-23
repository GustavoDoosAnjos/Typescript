"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReport {
    constructor(reportName) {
        this.reportName = reportName;
    }
    print(report) {
        const html = `
    <div class="div">
        <h1>Analysis report</h1>
        <div>${report}</div>
    </div>
    `;
        fs_1.default.writeFileSync(this.reportName, html);
    }
}
exports.HtmlReport = HtmlReport;
