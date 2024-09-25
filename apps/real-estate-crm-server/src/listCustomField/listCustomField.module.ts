import { Module } from "@nestjs/common";
import { ListCustomFieldModuleBase } from "./base/listCustomField.module.base";
import { ListCustomFieldService } from "./listCustomField.service";
import { ListCustomFieldController } from "./listCustomField.controller";
import { ListCustomFieldResolver } from "./listCustomField.resolver";

@Module({
  imports: [ListCustomFieldModuleBase],
  controllers: [ListCustomFieldController],
  providers: [ListCustomFieldService, ListCustomFieldResolver],
  exports: [ListCustomFieldService],
})
export class ListCustomFieldModule {}
