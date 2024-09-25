import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomFieldListEntryServiceBase } from "./base/customFieldListEntry.service.base";

@Injectable()
export class CustomFieldListEntryService extends CustomFieldListEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
