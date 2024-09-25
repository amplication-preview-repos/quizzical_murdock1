import { Module } from "@nestjs/common";
import { ImageCustomFieldModuleBase } from "./base/imageCustomField.module.base";
import { ImageCustomFieldService } from "./imageCustomField.service";
import { ImageCustomFieldController } from "./imageCustomField.controller";
import { ImageCustomFieldResolver } from "./imageCustomField.resolver";

@Module({
  imports: [ImageCustomFieldModuleBase],
  controllers: [ImageCustomFieldController],
  providers: [ImageCustomFieldService, ImageCustomFieldResolver],
  exports: [ImageCustomFieldService],
})
export class ImageCustomFieldModule {}
