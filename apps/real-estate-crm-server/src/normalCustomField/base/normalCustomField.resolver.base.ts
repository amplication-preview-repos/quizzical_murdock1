/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { NormalCustomField } from "./NormalCustomField";
import { NormalCustomFieldCountArgs } from "./NormalCustomFieldCountArgs";
import { NormalCustomFieldFindManyArgs } from "./NormalCustomFieldFindManyArgs";
import { NormalCustomFieldFindUniqueArgs } from "./NormalCustomFieldFindUniqueArgs";
import { CreateNormalCustomFieldArgs } from "./CreateNormalCustomFieldArgs";
import { UpdateNormalCustomFieldArgs } from "./UpdateNormalCustomFieldArgs";
import { DeleteNormalCustomFieldArgs } from "./DeleteNormalCustomFieldArgs";
import { Property } from "../../property/base/Property";
import { NormalCustomFieldService } from "../normalCustomField.service";
@graphql.Resolver(() => NormalCustomField)
export class NormalCustomFieldResolverBase {
  constructor(protected readonly service: NormalCustomFieldService) {}

  async _normalCustomFieldsMeta(
    @graphql.Args() args: NormalCustomFieldCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [NormalCustomField])
  async normalCustomFields(
    @graphql.Args() args: NormalCustomFieldFindManyArgs
  ): Promise<NormalCustomField[]> {
    return this.service.normalCustomFields(args);
  }

  @graphql.Query(() => NormalCustomField, { nullable: true })
  async normalCustomField(
    @graphql.Args() args: NormalCustomFieldFindUniqueArgs
  ): Promise<NormalCustomField | null> {
    const result = await this.service.normalCustomField(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => NormalCustomField)
  async createNormalCustomField(
    @graphql.Args() args: CreateNormalCustomFieldArgs
  ): Promise<NormalCustomField> {
    return await this.service.createNormalCustomField({
      ...args,
      data: {
        ...args.data,

        property: args.data.property
          ? {
              connect: args.data.property,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => NormalCustomField)
  async updateNormalCustomField(
    @graphql.Args() args: UpdateNormalCustomFieldArgs
  ): Promise<NormalCustomField | null> {
    try {
      return await this.service.updateNormalCustomField({
        ...args,
        data: {
          ...args.data,

          property: args.data.property
            ? {
                connect: args.data.property,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => NormalCustomField)
  async deleteNormalCustomField(
    @graphql.Args() args: DeleteNormalCustomFieldArgs
  ): Promise<NormalCustomField | null> {
    try {
      return await this.service.deleteNormalCustomField(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Property, {
    nullable: true,
    name: "property",
  })
  async getProperty(
    @graphql.Parent() parent: NormalCustomField
  ): Promise<Property | null> {
    const result = await this.service.getProperty(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
