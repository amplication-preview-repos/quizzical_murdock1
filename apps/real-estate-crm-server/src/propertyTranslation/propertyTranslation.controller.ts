import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PropertyTranslationService } from "./propertyTranslation.service";
import { PropertyTranslationControllerBase } from "./base/propertyTranslation.controller.base";

@swagger.ApiTags("propertyTranslations")
@common.Controller("propertyTranslations")
export class PropertyTranslationController extends PropertyTranslationControllerBase {
  constructor(protected readonly service: PropertyTranslationService) {
    super(service);
  }
}
