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
import { ClientWhereInput } from "./ClientWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ClientCountArgs {
  @ApiProperty({
    required: false,
    type: () => ClientWhereInput,
  })
  @Field(() => ClientWhereInput, { nullable: true })
  @Type(() => ClientWhereInput)
  where?: ClientWhereInput;
}

export { ClientCountArgs as ClientCountArgs };
