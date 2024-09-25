/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LocaleService } from "../locale.service";
import { LocaleCreateInput } from "./LocaleCreateInput";
import { Locale } from "./Locale";
import { LocaleFindManyArgs } from "./LocaleFindManyArgs";
import { LocaleWhereUniqueInput } from "./LocaleWhereUniqueInput";
import { LocaleUpdateInput } from "./LocaleUpdateInput";
import { PropertyTranslationFindManyArgs } from "../../propertyTranslation/base/PropertyTranslationFindManyArgs";
import { PropertyTranslation } from "../../propertyTranslation/base/PropertyTranslation";
import { PropertyTranslationWhereUniqueInput } from "../../propertyTranslation/base/PropertyTranslationWhereUniqueInput";

export class LocaleControllerBase {
  constructor(protected readonly service: LocaleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Locale })
  async createLocale(@common.Body() data: LocaleCreateInput): Promise<Locale> {
    return await this.service.createLocale({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Locale] })
  @ApiNestedQuery(LocaleFindManyArgs)
  async locales(@common.Req() request: Request): Promise<Locale[]> {
    const args = plainToClass(LocaleFindManyArgs, request.query);
    return this.service.locales({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Locale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async locale(
    @common.Param() params: LocaleWhereUniqueInput
  ): Promise<Locale | null> {
    const result = await this.service.locale({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Locale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLocale(
    @common.Param() params: LocaleWhereUniqueInput,
    @common.Body() data: LocaleUpdateInput
  ): Promise<Locale | null> {
    try {
      return await this.service.updateLocale({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Locale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLocale(
    @common.Param() params: LocaleWhereUniqueInput
  ): Promise<Locale | null> {
    try {
      return await this.service.deleteLocale({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/propertyTranslations")
  @ApiNestedQuery(PropertyTranslationFindManyArgs)
  async findPropertyTranslations(
    @common.Req() request: Request,
    @common.Param() params: LocaleWhereUniqueInput
  ): Promise<PropertyTranslation[]> {
    const query = plainToClass(PropertyTranslationFindManyArgs, request.query);
    const results = await this.service.findPropertyTranslations(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        locale: {
          select: {
            id: true,
          },
        },

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/propertyTranslations")
  async connectPropertyTranslations(
    @common.Param() params: LocaleWhereUniqueInput,
    @common.Body() body: PropertyTranslationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      propertyTranslations: {
        connect: body,
      },
    };
    await this.service.updateLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/propertyTranslations")
  async updatePropertyTranslations(
    @common.Param() params: LocaleWhereUniqueInput,
    @common.Body() body: PropertyTranslationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      propertyTranslations: {
        set: body,
      },
    };
    await this.service.updateLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/propertyTranslations")
  async disconnectPropertyTranslations(
    @common.Param() params: LocaleWhereUniqueInput,
    @common.Body() body: PropertyTranslationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      propertyTranslations: {
        disconnect: body,
      },
    };
    await this.service.updateLocale({
      where: params,
      data,
      select: { id: true },
    });
  }
}
