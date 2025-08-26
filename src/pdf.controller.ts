import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import * as path from 'node:path';
import { toFile, toStream } from './PDFDocument';

@Controller('pdf')
export class PdfController {
  @Get('file')
  async makeFile(@Res() res: Response) {
    const filePath = path.join(__dirname, 'sample.pdf');
    await toFile(filePath);
    res.sendFile(filePath);
  }

  @Get('stream')
  async generatePdf(@Res() res: Response) {
    const stream = await toStream();
    stream
      .pipe(res)
      .on('error', (err) => console.error('Error!', err))
      .on('close', () => console.info('Finished!'));
  }
}
