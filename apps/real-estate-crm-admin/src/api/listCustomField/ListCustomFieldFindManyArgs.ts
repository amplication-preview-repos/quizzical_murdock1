import { ListCustomFieldWhereInput } from "./ListCustomFieldWhereInput";
import { ListCustomFieldOrderByInput } from "./ListCustomFieldOrderByInput";

export type ListCustomFieldFindManyArgs = {
  where?: ListCustomFieldWhereInput;
  orderBy?: Array<ListCustomFieldOrderByInput>;
  skip?: number;
  take?: number;
};
