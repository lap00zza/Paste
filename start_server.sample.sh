#!/bin/sh
# This is the port on which Paste will be listening.
export PASTE_PORT=3000

# IP Address to which Paste will be bound. If you want
# Paste to listen to external requests use "0.0.0.0"
export PASTE_HOST="127.0.0.1"

# Config for Postgres.
export PGUSER="PGUSER"
export PGHOST="PGHOST"
export PGPASSWORD="PGPASSWORD"
export PGDATABASE="PGDATABASE"
export PGPORT=PGPORT

# Salt for Hashids.
export SALT="some_salt"

# Start Paste.
node ./dist/server.js
