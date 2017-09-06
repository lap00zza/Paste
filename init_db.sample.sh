#!/bin/sh
# Remember to fill in these before starting Paste.
# and rename it to 'init_db.sh'. You only need to
# run this script once.
PGUSER=USER \
PGHOST=HOST \
PGPASSWORD=PASSWORD \
PGDATABASE=DATABASE \
PGPORT=PORT \
SALT=SALT_FOR_HASHID \
node ./scripts/init_db.js
