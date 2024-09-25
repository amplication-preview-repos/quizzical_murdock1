import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NormalCustomFieldServiceBase } from "./base/normalCustomField.service.base";

@Injectable()
export class NormalCustomFieldService extends NormalCustomFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
