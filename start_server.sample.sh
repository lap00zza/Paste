#!/bin/sh
# Remember to fill in these before starting Paste.
# Also, you might want to copy the content of this
# file to a separate file 'start_server.sh'
PGUSER=USER \
PGHOST=HOST \
PGPASSWORD=PASSWORD \
PGDATABASE=DATABASE \
PGPORT=PORT \
SALT=SALT_FOR_HASHID \
node ./dist/server.js
