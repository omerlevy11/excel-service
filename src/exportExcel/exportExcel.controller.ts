import { Controller, Body, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream, unlinkSync } from 'fs';
import { ExportExcelService } from './exportExcel.service';

@Controller()
export class ExportExcelController {
  constructor(private readonly exportExcelService: ExportExcelService) {}

  @Post('exportExcel')
  exportExcelFile(@Body('fileObject') fileObject,@Res() res:Response) {
    this.exportExcelService.saveAsExcelFile(fileObject);
    res.setHeader('Content-Type',process.env.CONTENT_TYPE);
    res.setHeader('Content-Disposition',`attachment; filename=${fileObject.filename}`);
    const file = createReadStream(`${process.cwd()}/${fileObject.filename}`);
    unlinkSync(`${process.cwd()}/${fileObject.filename}`);
    file.pipe(res);
  }
}
