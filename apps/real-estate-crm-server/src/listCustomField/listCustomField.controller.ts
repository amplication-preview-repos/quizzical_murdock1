import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ListCustomFieldService } from "./listCustomField.service";
import { ListCustomFieldControllerBase } from "./base/listCustomField.controller.base";

@swagger.ApiTags("listCustomFields")
@common.Controller("listCustomFields")
export class ListCustomFieldController extends ListCustomFieldControllerBase {
  constructor(protected readonly service: ListCustomFieldService) {
    super(service);
  }
}
