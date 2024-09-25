/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ListCustomField as PrismaListCustomField,
  Property as PrismaProperty,
} from "@prisma/client";

export class ListCustomFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ListCustomFieldCountArgs, "select">
  ): Promise<number> {
    return this.prisma.listCustomField.count(args);
  }

  async listCustomFields(
    args: Prisma.ListCustomFieldFindManyArgs
  ): Promise<PrismaListCustomField[]> {
    return this.prisma.listCustomField.findMany(args);
  }
  async listCustomField(
    args: Prisma.ListCustomFieldFindUniqueArgs
  ): Promise<PrismaListCustomField | null> {
    return this.prisma.listCustomField.findUnique(args);
  }
  async createListCustomField(
    args: Prisma.ListCustomFieldCreateArgs
  ): Promise<PrismaListCustomField> {
    return this.prisma.listCustomField.create(args);
  }
  async updateListCustomField(
    args: Prisma.ListCustomFieldUpdateArgs
  ): Promise<PrismaListCustomField> {
    return this.prisma.listCustomField.update(args);
  }
  async deleteListCustomField(
    args: Prisma.ListCustomFieldDeleteArgs
  ): Promise<PrismaListCustomField> {
    return this.prisma.listCustomField.delete(args);
  }

  async getProperty(parentId: string): Promise<PrismaProperty | null> {
    return this.prisma.listCustomField
      .findUnique({
        where: { id: parentId },
      })
      .property();
  }
}