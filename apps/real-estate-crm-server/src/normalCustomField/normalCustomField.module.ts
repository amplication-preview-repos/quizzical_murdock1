import { Module } from "@nestjs/common";
import { NormalCustomFieldModuleBase } from "./base/normalCustomField.module.base";
import { NormalCustomFieldService } from "./normalCustomField.service";
import { NormalCustomFieldController } from "./normalCustomField.controller";
import { NormalCustomFieldResolver } from "./normalCustomField.resolver";

@Module({
  imports: [NormalCustomFieldModuleBase],
  controllers: [NormalCustomFieldController],
  providers: [NormalCustomFieldService, NormalCustomFieldResolver],
  exports: [NormalCustomFieldService],
})
export class NormalCustomFieldModule {}
