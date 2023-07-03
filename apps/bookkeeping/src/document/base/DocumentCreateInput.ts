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
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { Client } from "../../client/base/Client";
import { EnumDocumentDocType } from "./EnumDocumentDocType";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@InputType()
class DocumentCreateInput {
  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  cashAccount?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  Client?: ClientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumDocumentDocType,
  })
  @IsEnum(EnumDocumentDocType)
  @IsOptional()
  @Field(() => EnumDocumentDocType, {
    nullable: true,
  })
  docType?: "Invoice" | "Receipt" | "Bill" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplier?: SupplierWhereUniqueInput | null;
}

export { DocumentCreateInput as DocumentCreateInput };
