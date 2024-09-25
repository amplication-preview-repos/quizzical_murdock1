import * as graphql from "@nestjs/graphql";
import { ImageCustomFieldResolverBase } from "./base/imageCustomField.resolver.base";
import { ImageCustomField } from "./base/ImageCustomField";
import { ImageCustomFieldService } from "./imageCustomField.service";

@graphql.Resolver(() => ImageCustomField)
export class ImageCustomFieldResolver extends ImageCustomFieldResolverBase {
  constructor(protected readonly service: ImageCustomFieldService) {
    super(service);
  }
}
