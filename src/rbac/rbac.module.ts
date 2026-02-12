import { Module } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { RbacGuard } from "./rbac.guard";

@Module({
  providers: [Reflector, RbacGuard],
  exports: [RbacGuard],
})
export class RbacModule {}
