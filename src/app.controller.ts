import { Controller, Get, Post, UseInterceptors, UploadedFile, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image',{
      storage: diskStorage({
        destination: './files',
        filename: (req, file, callback) => {
          const fileName = file.originalname.replace(/ +?/g, '_');
          callback(null, `${fileName}`);
        }
      }),
      fileFilter: (req, file, callback) => {
        if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
          return callback(new Error('Only image file are allowed'),false);
        }
        callback(null,true);
      }
    })
  )
  async uploadFile(@UploadedFile() file){
      const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      return response;
  }

  @Get('images/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res){
    console.log(image, ' image');
    return res.sendFile(image, { root: './files'});
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
