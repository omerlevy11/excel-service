import { Module } from '@nestjs/common';
import { ExportExcelController } from './exportExcel.controller';
import { ExportExcelService } from './exportExcel.service';

@Module({
  imports: [],
  controllers: [ExportExcelController],
  providers: [ExportExcelService],
})
export class ExportExcelModule {}
