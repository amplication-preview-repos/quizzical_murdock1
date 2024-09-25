import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};