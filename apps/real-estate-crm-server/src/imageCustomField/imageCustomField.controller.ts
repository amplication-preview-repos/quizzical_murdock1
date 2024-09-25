import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImageCustomFieldService } from "./imageCustomField.service";
import { ImageCustomFieldControllerBase } from "./base/imageCustomField.controller.base";

@swagger.ApiTags("imageCustomFields")
@common.Controller("imageCustomFields")
export class ImageCustomFieldController extends ImageCustomFieldControllerBase {
  constructor(protected readonly service: ImageCustomFieldService) {
    super(service);
  }
}
