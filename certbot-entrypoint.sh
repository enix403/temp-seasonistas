#!/bin/sh
set -e

# Check if certificates already exist
if [ ! -f /etc/letsencrypt/live/seasonistas.com/fullchain.pem ]; then
  echo "Certificates not found. Attempting to generate..."
  certbot certonly --webroot -w /var/www/certbot \
    --email admin@seasonistas.com --agree-tos --no-eff-email \
    -d seasonistas.com -d www.seasonistas.com -d api.seasonistas.com
else
  echo "Certificates already exist. Skipping generation."
fi

echo "Certbot process complete. Exiting."
