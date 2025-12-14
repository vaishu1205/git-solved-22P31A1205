/**
 * System Monitoring Script
 * Environment-based monitoring for production and development
 */

const isProduction = process.env.NODE_ENV === 'production';

const monitorConfig = {
  interval: isProduction ? 60000 : 5000,
  alertThreshold: isProduction ? 80 : 90,
  metricsEndpoint: isProduction
    ? 'http://localhost:8080/metrics'
    : 'http://localhost:3000/metrics',
  debugMode: !isProduction
};

console.log('=================================');
console.log('DevOps Simulator - Monitor');
console.log(`Environment: ${isProduction ? 'Production' : 'Development'}`);
console.log('=================================');

function checkSystemHealth() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Checking system health...`);

  const cpuUsage = Math.random() * 100;
  const memUsage = Math.random() * 100;
  const diskUsage = Math.random() * 100;

  console.log(`CPU Usage: ${cpuUsage.toFixed(2)}%`);
  console.log(`Memory Usage: ${memUsage.toFixed(2)}%`);
  console.log(`Disk Usage: ${diskUsage.toFixed(2)}%`);

  if (!isProduction) {
    console.log('Debug Mode: Enabled');
  }

  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > monitorConfig.alertThreshold) {
    console.log('Status: WARNING');
  } else {
    console.log('Status: HEALTHY');
  }
}

console.log(`Monitoring every ${monitorConfig.interval} ms`);
setInterval(checkSystemHealth, monitorConfig.interval);
checkSystemHealth();
