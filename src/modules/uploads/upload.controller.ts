import { Controller, UseInterceptors, UploadedFiles, Post } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "./config";

@Controller('upload')
export class UploadController{

    @Post()
    @UseInterceptors(FilesInterceptor('file', null, multerOptions))
    async uploadFile(@UploadedFiles()file) {
        console.log(file)
    }
}