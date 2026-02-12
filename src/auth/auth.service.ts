import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

/**
 * Blueprint-only:
 * - Replace the hardcoded user with DB lookup + password verification.
 * - Add refresh token rotation with storage + revocation.
 */
@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  async login(input: { email: string; password: string }) {
    // demo-only
    if (input.email !== "demo@local" || input.password !== "demo") {
      throw new UnauthorizedException("Invalid credentials");
    }

    const user = {
      id: "user_demo",
      email: input.email,
      permissions: ["READ_PROFILE"],
    };

    const accessToken = await this.jwt.signAsync({
      sub: user.id,
      permissions: user.permissions,
    });

    return { user, accessToken };
  }
}
