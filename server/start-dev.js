#!/usr/bin/env node

// Simple startup script for development
// This script starts all services without requiring concurrently

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const services = [
  { name: 'API Gateway', script: 'npm run dev:gateway' },
  { name: 'Sales Service', script: 'npm run dev:sales' },
  { name: 'Accounts Service', script: 'npm run dev:accounts' },
  { name: 'Logistics Service', script: 'npm run dev:logistics' },
  { name: 'Notifications Service', script: 'npm run dev:notifications' },
  { name: 'Admin Service', script: 'npm run dev:admin' }
];

console.log('🚀 Starting SleepFine Microservices...\n');

// Start each service
services.forEach((service, index) => {
  const child = spawn(service.script, [], {
    shell: true,
    stdio: 'pipe',
    cwd: __dirname
  });

  // Handle output
  child.stdout.on('data', (data) => {
    process.stdout.write(`[${service.name}] ${data}`);
  });

  child.stderr.on('data', (data) => {
    process.stderr.write(`[${service.name}] ERROR: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`[${service.name}] exited with code ${code}`);
  });

  // Add delay between service starts
  setTimeout(() => {}, index * 1000);
});

console.log('\n✅ All services started!');
console.log('📱 API Gateway: http://localhost:3000');
console.log('📊 Sales Service: http://localhost:3001');
console.log('💰 Accounts Service: http://localhost:3002');
console.log('🚚 Logistics Service: http://localhost:3003');
console.log('🔔 Notifications Service: http://localhost:3005');
console.log('👑 Admin Service: http://localhost:3004');
console.log('\nPress Ctrl+C to stop all services');

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down services...');
  process.exit(0);
});
