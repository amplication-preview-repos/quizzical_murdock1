import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PropertyTranslationServiceBase } from "./base/propertyTranslation.service.base";

@Injectable()
export class PropertyTranslationService extends PropertyTranslationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
