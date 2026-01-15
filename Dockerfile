# 1. Use official Node.js image (use a compatible version for Next.js 15)
FROM node:20-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Install PNPM
RUN corepack enable && corepack prepare pnpm@9.10.0 --activate

# 4. Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 5. Copy the rest of the project files
COPY . .

# 6. Build the Next.js app
RUN pnpm build

# --- Runtime stage ---
FROM node:20-alpine AS runner

# 7. Set working directory
WORKDIR /app

# 8. Copy built output and required files
COPY --from=deps /app/public ./public
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/next.config.mjs ./next.config.mjs

# 9. Set environment variable
ENV NODE_ENV=production

# 10. Expose port
EXPOSE 3000

# 11. Start the app
CMD ["node_modules/.bin/next", "start"]
