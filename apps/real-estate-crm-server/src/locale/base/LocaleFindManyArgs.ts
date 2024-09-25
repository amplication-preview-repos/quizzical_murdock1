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
import { LocaleWhereInput } from "./LocaleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LocaleOrderByInput } from "./LocaleOrderByInput";

@ArgsType()
class LocaleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LocaleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LocaleWhereInput, { nullable: true })
  @Type(() => LocaleWhereInput)
  where?: LocaleWhereInput;

  @ApiProperty({
    required: false,
    type: [LocaleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LocaleOrderByInput], { nullable: true })
  @Type(() => LocaleOrderByInput)
  orderBy?: Array<LocaleOrderByInput>;

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

export { LocaleFindManyArgs as LocaleFindManyArgs };
