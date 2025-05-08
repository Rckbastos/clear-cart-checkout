
# ESLint and Prettier Scripts Reference

Add these scripts to your package.json:

```json
"scripts": {
  // ... scripts existentes
  "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
  "lint:fix": "eslint 'src/**/*.{js,jsx,ts,tsx}' --fix",
  "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md}'"
}
```

After adding these scripts, you can run:
- `npm run lint` to check for linting issues
- `npm run lint:fix` to automatically fix linting issues
- `npm run format` to format your code with Prettier
