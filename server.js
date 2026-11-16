// Точка входа для хостингов (Pterodactyl и др.), которые запускают server.js из корня.
// Сама подхватывает .env, дополнительные аргументы Node не нужны.
try {
  process.loadEnvFile(new URL('./.env', import.meta.url));
} catch (e) {
  if (e.code !== 'ENOENT') console.error('Не удалось прочитать .env:', e.message);
}
await import('./src/server.js');
