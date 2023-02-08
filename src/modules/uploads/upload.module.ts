import { UploadController } from "./upload.controller";
import { UploadService } from "./upload.service";
import { Module } from '@nestjs/common';

@Module({
    imports:[],
    providers:[UploadService],
    controllers: [UploadController]
    
})
export class UploadModule {

}