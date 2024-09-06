# Paradnight Studio Website

## Steps to install libraries

### 1. Install Nuxt

```bash
pnpm dlx nuxi@latest init paradnight-website
```

### 2. Add Eslint

https://eslint.nuxt.com/packages/module

Add Nuxt ESLint module:

```bash
npx nuxi module add eslint
```

Create an eslint.config.mjs file with this content:

```javascript
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt();
```

Add TypeScript too:

```bash
pnpm add -D typescript
```

### 3. Add Prettier

https://prettier.io/docs/en/install

Install Prettier:

```bash
pnpm add --save-dev --save-exact prettier
```

Create .prettierrc file:

```bash
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

Create .prettierignore file:

```bash
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
```

And add this to .prettierignore:

```
dist
coverage
.vscode/settings.json
.output
.nuxt
pnpm-lock.yaml
```

Install eslint-config-prettier:

```bash
pnpm add --save-dev eslint-config-prettier
```

### 3. Add Stylelint

https://nuxt.com/modules/stylelint

Install Stylelint:

```bash
pnpm add -D stylelint
```

Add Nuxt module and stylelint-config-standard-vue and stylelint-config-standard-scss:

```bash
pnpm add -D @nuxtjs/stylelint-module
pnpm add stylelint-config-standard-vue stylelint-config-standard-scss --save-dev
```

Add to nuxt.config.ts:

```json
  stylelint: {
    config: {
      extends: ["stylelint-config-standard-scss", "stylelint-config-standard-vue/scss"],
      rules: {
        "declaration-property-unit-allowed-list": {
          "/^border/": ["px"],
          "/^padding|^gap/": ["rem"],
        },
        "unit-allowed-list": ["%", "deg", "px", "rem", "ms", "fr", "vh", "vw"],
        "no-empty-source": null,
      },
    },
  },
```

# Nuxt README:

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
