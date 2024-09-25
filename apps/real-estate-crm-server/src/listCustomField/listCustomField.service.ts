import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ListCustomFieldServiceBase } from "./base/listCustomField.service.base";

@Injectable()
export class ListCustomFieldService extends ListCustomFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
