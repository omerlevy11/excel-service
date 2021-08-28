import { excelSheet } from './excelSheet.interface';

export interface iExcelFile {
    options: any;
    fileName: string;
    sheets: excelSheet[];
}