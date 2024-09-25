import { CustomFieldListEntryWhereInput } from "./CustomFieldListEntryWhereInput";
import { CustomFieldListEntryOrderByInput } from "./CustomFieldListEntryOrderByInput";

export type CustomFieldListEntryFindManyArgs = {
  where?: CustomFieldListEntryWhereInput;
  orderBy?: Array<CustomFieldListEntryOrderByInput>;
  skip?: number;
  take?: number;
};
