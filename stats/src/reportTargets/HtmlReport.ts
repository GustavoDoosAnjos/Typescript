import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  constructor(public reportName: string) {}
  print(report: string): void {
    const html = `
    <div class="div">
        <h1>Analysis report</h1>
        <div>${report}</div>
    </div>
    `;

    fs.writeFileSync(this.reportName, html);
  }
}
