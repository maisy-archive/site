# Beef's website

## Usage

### Installation

Before running any of the available scripts, install the dependencies:
```bash
pnpm install # or npm install or yarn install, with limited support
```

### Updating

You can update the site's dependencies via [pnpm](https://pnpm.io):
```bash
pnpm up -Lr
```

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will hot reload if you make edits.<br>

### `npm run build`

Builds the site for production to the `dist` folder.<br>
It correctly bundles Solid and Windi in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The site is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (vercel, netlify, surge, now, etc.)
