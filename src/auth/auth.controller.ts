import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { RequirePermissions } from "../rbac/permissions.decorator";
import { RbacGuard } from "../rbac/rbac.guard";

@Controller("auth")
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post("login")
  async login(@Body() body: { email: string; password: string }) {
    return this.auth.login(body);
  }

  @Get("me")
  @UseGuards(AuthGuard("jwt"), RbacGuard)
  @RequirePermissions("READ_PROFILE")
  me(@Req() req: any) {
    return { ok: true, user: req.user };
  }
}
