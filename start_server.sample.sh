#!/bin/sh
# Remember to fill in these before starting Paste
# and rename it to 'start_server.sh'
PGUSER=USER \
PGHOST=HOST \
PGPASSWORD=PASSWORD \
PGDATABASE=DATABASE \
PGPORT=PORT \
SALT=SALT_FOR_HASHID \
node ./dist/server.js
