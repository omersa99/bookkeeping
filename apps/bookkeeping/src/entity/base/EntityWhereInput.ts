/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ClientListRelationFilter } from "../../client/base/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ItemListRelationFilter } from "../../item/base/ItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class EntityWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  accrualMethod?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ClientListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ClientListRelationFilter)
  @IsOptional()
  @Field(() => ClientListRelationFilter, {
    nullable: true,
  })
  customers?: ClientListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  info?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => ItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemListRelationFilter)
  @IsOptional()
  @Field(() => ItemListRelationFilter, {
    nullable: true,
  })
  items?: ItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  users?: UserWhereUniqueInput;
}

export { EntityWhereInput as EntityWhereInput };
