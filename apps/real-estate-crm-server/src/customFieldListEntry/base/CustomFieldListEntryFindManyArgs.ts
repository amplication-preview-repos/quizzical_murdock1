/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomFieldListEntryWhereInput } from "./CustomFieldListEntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomFieldListEntryOrderByInput } from "./CustomFieldListEntryOrderByInput";

@ArgsType()
class CustomFieldListEntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomFieldListEntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomFieldListEntryWhereInput, { nullable: true })
  @Type(() => CustomFieldListEntryWhereInput)
  where?: CustomFieldListEntryWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomFieldListEntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomFieldListEntryOrderByInput], { nullable: true })
  @Type(() => CustomFieldListEntryOrderByInput)
  orderBy?: Array<CustomFieldListEntryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CustomFieldListEntryFindManyArgs as CustomFieldListEntryFindManyArgs };
