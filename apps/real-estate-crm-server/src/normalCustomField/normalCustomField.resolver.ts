import * as graphql from "@nestjs/graphql";
import { NormalCustomFieldResolverBase } from "./base/normalCustomField.resolver.base";
import { NormalCustomField } from "./base/NormalCustomField";
import { NormalCustomFieldService } from "./normalCustomField.service";

@graphql.Resolver(() => NormalCustomField)
export class NormalCustomFieldResolver extends NormalCustomFieldResolverBase {
  constructor(protected readonly service: NormalCustomFieldService) {
    super(service);
  }
}
