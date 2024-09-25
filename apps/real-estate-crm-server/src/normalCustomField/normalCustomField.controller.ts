import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NormalCustomFieldService } from "./normalCustomField.service";
import { NormalCustomFieldControllerBase } from "./base/normalCustomField.controller.base";

@swagger.ApiTags("normalCustomFields")
@common.Controller("normalCustomFields")
export class NormalCustomFieldController extends NormalCustomFieldControllerBase {
  constructor(protected readonly service: NormalCustomFieldService) {
    super(service);
  }
}
