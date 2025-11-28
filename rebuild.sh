#!/bin/bash

echo "🚀 STARTING REBUILD..."

# 1. Install Dependencies
echo "📦 Installing packages..."
npm install clsx tailwind-merge better-sqlite3 @types/better-sqlite3

# 2. Create Directories
echo "📂 Creating folders..."
mkdir -p src/lib
mkdir -p src/components/ui
mkdir -p src/components/layout

# 3. Create Core Files
echo "📝 Creating Lib files..."

# utils.ts
cat > src/lib/utils.ts << 'EOF'
import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
EOF

# db.ts
cat > src/lib/db.ts << 'EOF'
import Database from 'better-sqlite3';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const dataDir = join(process.cwd(), 'data');
if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

const dbPath = join(dataDir, 'app.db');
export const db = new Database(dbPath);

db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS assessments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT NOT NULL,
    score INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);
EOF

# auth.ts
cat > src/lib/auth.ts << 'EOF'
import { db } from './db';
import { randomBytes, createHmac } from 'crypto';

export interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  salt: string;
}

export function hashPassword(password: string, salt: string | null = null): { hash: string; salt: string } {
  if (!salt) salt = randomBytes(16).toString('hex');
  const hash = createHmac('sha512', salt).update(password).digest('hex');
  return { hash, salt };
}

export function validateUser(username: string, password: string): User | null {
  const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
  const row = stmt.get(username) as User | undefined;
  if (!row) return null;
  const { hash } = hashPassword(password, row.salt);
  return hash === row.password_hash ? row : null;
}

export function createUser(username: string, email: string, password: string): number {
  const { hash, salt } = hashPassword(password);
  const stmt = db.prepare('INSERT INTO users (username, email, password_hash, salt) VALUES (?, ?, ?, ?)');
  const result = stmt.run(username, email, hash, salt);
  return result.lastInsertRowid as number;
}
EOF

# 4. Create UI Components
echo "🎨 Creating UI components..."

cat > src/components/ui/Button.tsx << 'EOF'
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  loading, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
  };
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2 text-base", lg: "px-6 py-3 text-lg" };
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} disabled={loading || props.disabled} {...props}>
      {loading && <span className="mr-2 animate-spin">⟳</span>}
      {children}
    </button>
  );
}
EOF

cat > src/components/ui/Section.tsx << 'EOF'
import { cn } from "@/lib/utils";
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div';
}

export default function Section({ children, className, as = 'section' }: SectionProps) {
  const Component = as;
  return <Component className={cn("py-12 px-4 sm:px-6 lg:px-8", className)}>{children}</Component>;
}
EOF

cat > src/components/ui/ProgressBar.tsx << 'EOF'
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
}

export default function ProgressBar({ value, max = 100, className, showLabel = false }: ProgressBarProps) {
  const percentage = Math.min(Math.max(value, 0), max);
  return (
    <div className={cn('w-full', className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">Progress</span>
        {showLabel && <span className="text-sm text-gray-400">{percentage}%</span>}
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[var(--color-purple-royal)] to-[var(--color-orange-deep)] transition-all duration-300" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
EOF

cat > src/components/ui/Card.tsx << 'EOF'
import { cn } from "@/lib/utils";
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <div className={cn("p-6 rounded-xl border shadow-sm bg-white", className)}>{children}</div>;
}
EOF

cat > src/components/ui/StatsCard.tsx << 'EOF'
import Card from "./Card";
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
}

export default function StatsCard({ title, value, subtitle, icon, className }: StatsCardProps) {
  return (
    <Card className={className}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="text-blue-500">{icon}</div>}
      </div>
    </Card>
  );
}
EOF

# 5. Create Layout Components
echo "📐 Creating Layout components..."

cat > src/components/layout/Navbar.tsx << 'EOF'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="font-bold text-xl text-blue-600">LaunchLab</Link>
          <div className="flex items-center space-x-4">
            <Link href="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
            <Link href="/assessment" className="text-gray-700 hover:text-blue-600">Assessment</Link>
            <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
EOF

cat > src/components/layout/Footer.tsx << 'EOF'
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; 2025 LaunchLab. All rights reserved.</p>
      </div>
    </footer>
  );
}
EOF

echo "✅ REBUILD COMPLETE!"
