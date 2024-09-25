import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImageCustomFieldServiceBase } from "./base/imageCustomField.service.base";

@Injectable()
export class ImageCustomFieldService extends ImageCustomFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
