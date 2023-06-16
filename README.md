# prettier-config

Shared [Prettier config](https://prettier.io/docs/en/configuration.html) for my projects.

## Install

```bash
npm install --save-dev @v-ed/prettier-config
```

## Usage

`package.json`

```json
{
  "prettier": "@v-ed/prettier-config"
}
```

Take a look at [Prettier's Configuration File docs](https://prettier.io/docs/en/configuration.html) to get other ways to use and extend this config.

### Svelte

For projects using `Svelte`, you can use the `@v-ed/prettier-config/svelte` config, which adds the plugin declaration and the overrides for `*.svelte` files.

`package.json`

```json
{
  "prettier": "@v-ed/prettier-config/svelte.cjs",
  "devDependencies": {
    "prettier-plugin-svelte": "*",
    "svelte": "*"
  }
}
```
