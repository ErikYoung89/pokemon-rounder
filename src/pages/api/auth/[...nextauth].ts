import NextAuth from "next-auth";
import { authOptions } from "rounder/server/auth";

export default NextAuth(authOptions);
