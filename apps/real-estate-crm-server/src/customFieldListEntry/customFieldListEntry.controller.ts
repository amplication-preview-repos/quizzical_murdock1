import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomFieldListEntryService } from "./customFieldListEntry.service";
import { CustomFieldListEntryControllerBase } from "./base/customFieldListEntry.controller.base";

@swagger.ApiTags("customFieldListEntries")
@common.Controller("customFieldListEntries")
export class CustomFieldListEntryController extends CustomFieldListEntryControllerBase {
  constructor(protected readonly service: CustomFieldListEntryService) {
    super(service);
  }
}
