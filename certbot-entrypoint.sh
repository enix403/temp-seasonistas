#!/bin/sh

trap exit TERM
while :; do
  if [ ! -f /etc/letsencrypt/live/seasonistas.com/fullchain.pem ]; then
    certbot certonly --webroot -w /var/www/certbot \
    --email admin@seasonistas.com --agree-tos --no-eff-email \
    -d seasonistas.com -d www.seasonistas.com -d api.seasonistas.com
  fi
  sleep 12h & wait $!
done
