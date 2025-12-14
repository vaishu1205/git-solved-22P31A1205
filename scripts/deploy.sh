#!/bin/bash

set -e

ENVIRONMENT=$1

echo "====================================="
echo "DevOps Simulator Deployment"
echo "====================================="

if [ -z "$ENVIRONMENT" ]; then
  echo "Usage: ./deploy.sh [production|development]"
  exit 1
fi

echo "Environment: $ENVIRONMENT"

# Pre-deployment checks
if [ ! -f "config/app-config.yaml" ]; then
  echo "Error: Configuration file not found!"
  exit 1
fi

if [ "$ENVIRONMENT" = "production" ]; then
  APP_PORT=8080
  echo "Starting production deployment..."

  echo "Installing production dependencies..."
  npm install --only=production

  echo "Building application..."
  npm run build

  echo "Starting production server..."
  npm start

  echo "Application available at: https://app.example.com"

elif [ "$ENVIRONMENT" = "development" ]; then
  APP_PORT=3000
  echo "Starting development deployment..."

  echo "Installing dependencies..."
  npm install

  echo "Running tests..."
  npm test

  echo "Starting development server..."
  npm run dev

  echo "Application available at: http://localhost:$APP_PORT"

else
  echo "Invalid environment: $ENVIRONMENT"
  exit 1
fi

echo "Deployment completed successfully"
