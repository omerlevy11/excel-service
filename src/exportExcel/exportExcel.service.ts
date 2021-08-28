import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';
import { iExcelFile } from 'src/interfaces/excelFile.interface'
@Injectable()
export class ExportExcelService {
  saveAsExcelFile(fileObject: iExcelFile) {
    const wb = xlsx.utils.book_new();
    fileObject.sheets.forEach((sheet) => {
      const ws = xlsx.utils.json_to_sheet(sheet.data, { header: sheet.headers } || {});
      xlsx.utils.book_append_sheet(wb, ws, sheet.name);
    });
    return xlsx.writeFile(wb, fileObject.fileName, fileObject?.options || {});
  }
}
