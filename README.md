# Nuxt + TinaCMS Starter

> [!IMPORTANT]
> This is an experimental demo showcasing Nuxt + TinaCMS. Features and implementation details may change at any time.

This repository demonstrates how to integrate [TinaCMS](https://tina.io/) with [Nuxt](https://nuxt.com/) for a seamless headless content editing experience.

## 🚀 Features

- **Nuxt 3 + TinaCMS** – A powerful combination for modern, headless content management.
- **Live Editing** – Modify your content in real-time with TinaCMS.
- **Markdown & MDX Support** – Store content in a Git-based CMS with flexible formats.
- **Media Management** – Upload and manage images and assets directly from the CMS.

## 🛠 Getting Started

### 1️⃣ Install Dependencies

Make sure to install all necessary dependencies:

```sh
# npm
nnpm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 2️⃣ Configure Environment Variables

Create a `.env` file (or rename `.env.example`) and set the required values:

```sh
# TinaCMS Configuration
PUBLIC_TINA_CLIENT_ID=***
TINA_TOKEN=***
```

### 3️⃣ Run the Development Server

Start your Nuxt project with TinaCMS:

```sh
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000) to start editing content with TinaCMS.

## 📦 Production

Build the application for production:

```sh
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview the production build:

```sh
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for hosting options.

## 📖 Learn More

- [TinaCMS Documentation](https://tina.io/docs/)
- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [TinaCMS GitHub Repository](https://github.com/tinacms/tinacms)

Happy coding! 🎉