import crypto from "crypto";
import db from "./db";

export interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  salt: string;
}

function hashPassword(password: string, salt?: string) {
  const realSalt = salt || crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, realSalt, 310000, 32, "sha256").toString("hex");
  return { hash, salt: realSalt };
}

export function createUser(username: string, password: string, email: string) {
  const { hash, salt } = hashPassword(password);
  const stmt = db.prepare(
    "INSERT INTO users (username, email, password_hash, salt) VALUES (?, ?, ?, ?)"
  );
  const result = stmt.run(username, email, hash, salt);
  return result.lastInsertRowid;
}

export function authenticateUser(username: string, password: string): User | null {
  const stmt = db.prepare("SELECT id, username, email, password_hash, salt FROM users WHERE username = ?");
  const user = stmt.get(username) as User | undefined;
  if (!user) return null;
  const { hash } = hashPassword(password, user.salt);
  return hash === user.password_hash ? user : null;
}
