#!/usr/bin/env node
/**
 * Patches next-intl/config to work with Next.js 16 (Turbopack).
 * Next.js 16 ignores turbo.resolveAlias, so the alias mechanism in
 * next-intl's plugin doesn't work. This patch inlines the config logic
 * directly into the dist files using fs-based message loading.
 */
const fs = require('fs');
const path = require('path');

const LOCALES = ['en', 'vi'];
const DEFAULT_LOCALE = 'vi';

const CJS_CONTENT = `'use strict';
// Patched by scripts/patch-next-intl.js for Next.js 16 compatibility
const fs = require('fs');
const path = require('path');
const LOCALES = ${JSON.stringify(LOCALES)};
const DEFAULT_LOCALE = '${DEFAULT_LOCALE}';
const configFn = async function({requestLocale}) {
  const locale = await requestLocale;
  const validLocale = locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const messagesPath = path.join(process.cwd(), 'messages', validLocale + '.json');
  const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));
  return {locale: validLocale, messages};
};
Object.defineProperty(configFn, '__esModule', {value: true});
configFn.default = configFn;
module.exports = configFn;
`;

const ESM_CONTENT = `// Patched by scripts/patch-next-intl.js for Next.js 16 compatibility
import {readFileSync} from 'fs';
import {join} from 'path';
const LOCALES = ${JSON.stringify(LOCALES)};
const DEFAULT_LOCALE = '${DEFAULT_LOCALE}';
export default async function({requestLocale}) {
  const locale = await requestLocale;
  const validLocale = locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const messagesPath = join(process.cwd(), 'messages', validLocale + '.json');
  const messages = JSON.parse(readFileSync(messagesPath, 'utf8'));
  return {locale: validLocale, messages};
}
`;

const nextIntlDist = path.join(__dirname, '../node_modules/next-intl/dist');

const targets = [
  { file: path.join(nextIntlDist, 'config.js'), content: CJS_CONTENT },
  { file: path.join(nextIntlDist, 'development/config.js'), content: CJS_CONTENT },
  { file: path.join(nextIntlDist, 'production/config.js'), content: CJS_CONTENT },
  { file: path.join(nextIntlDist, 'esm/config.js'), content: ESM_CONTENT },
];

let patched = 0;
for (const { file, content } of targets) {
  if (fs.existsSync(file)) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[patch-next-intl] Patched: ${path.relative(process.cwd(), file)}`);
    patched++;
  } else {
    console.warn(`[patch-next-intl] File not found (skipped): ${path.relative(process.cwd(), file)}`);
  }
}
console.log(`[patch-next-intl] Done. Patched ${patched} files.`);
