import * as graphql from "@nestjs/graphql";
import { CustomFieldListEntryResolverBase } from "./base/customFieldListEntry.resolver.base";
import { CustomFieldListEntry } from "./base/CustomFieldListEntry";
import { CustomFieldListEntryService } from "./customFieldListEntry.service";

@graphql.Resolver(() => CustomFieldListEntry)
export class CustomFieldListEntryResolver extends CustomFieldListEntryResolverBase {
  constructor(protected readonly service: CustomFieldListEntryService) {
    super(service);
  }
}
