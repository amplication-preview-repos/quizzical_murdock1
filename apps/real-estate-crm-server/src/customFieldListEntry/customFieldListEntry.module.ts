import { Module } from "@nestjs/common";
import { CustomFieldListEntryModuleBase } from "./base/customFieldListEntry.module.base";
import { CustomFieldListEntryService } from "./customFieldListEntry.service";
import { CustomFieldListEntryController } from "./customFieldListEntry.controller";
import { CustomFieldListEntryResolver } from "./customFieldListEntry.resolver";

@Module({
  imports: [CustomFieldListEntryModuleBase],
  controllers: [CustomFieldListEntryController],
  providers: [CustomFieldListEntryService, CustomFieldListEntryResolver],
  exports: [CustomFieldListEntryService],
})
export class CustomFieldListEntryModule {}
