// src/types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    idToken?: string;
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
    user?: Record<string, unknown>;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    idToken?: string;
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
    user?: Record<string, unknown>;
  }
}
