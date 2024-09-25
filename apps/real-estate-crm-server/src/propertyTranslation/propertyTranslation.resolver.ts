import * as graphql from "@nestjs/graphql";
import { PropertyTranslationResolverBase } from "./base/propertyTranslation.resolver.base";
import { PropertyTranslation } from "./base/PropertyTranslation";
import { PropertyTranslationService } from "./propertyTranslation.service";

@graphql.Resolver(() => PropertyTranslation)
export class PropertyTranslationResolver extends PropertyTranslationResolverBase {
  constructor(protected readonly service: PropertyTranslationService) {
    super(service);
  }
}
