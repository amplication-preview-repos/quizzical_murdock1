import * as graphql from "@nestjs/graphql";
import { ListCustomFieldResolverBase } from "./base/listCustomField.resolver.base";
import { ListCustomField } from "./base/ListCustomField";
import { ListCustomFieldService } from "./listCustomField.service";

@graphql.Resolver(() => ListCustomField)
export class ListCustomFieldResolver extends ListCustomFieldResolverBase {
  constructor(protected readonly service: ListCustomFieldService) {
    super(service);
  }
}
