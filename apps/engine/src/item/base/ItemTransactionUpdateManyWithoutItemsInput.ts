/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ItemTransactionWhereUniqueInput } from "../../itemTransaction/base/ItemTransactionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ItemTransactionUpdateManyWithoutItemsInput {
  @Field(() => [ItemTransactionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ItemTransactionWhereUniqueInput],
  })
  connect?: Array<ItemTransactionWhereUniqueInput>;

  @Field(() => [ItemTransactionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ItemTransactionWhereUniqueInput],
  })
  disconnect?: Array<ItemTransactionWhereUniqueInput>;

  @Field(() => [ItemTransactionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ItemTransactionWhereUniqueInput],
  })
  set?: Array<ItemTransactionWhereUniqueInput>;
}

export { ItemTransactionUpdateManyWithoutItemsInput as ItemTransactionUpdateManyWithoutItemsInput };
