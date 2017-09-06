# Paste
[![Build Status](https://travis-ci.org/lap00zza/Paste.svg?branch=master)](https://travis-ci.org/lap00zza/Paste)

A lightweight and minimal self hosted pastebin.

## Requirements
* Postgres
* NodeJS 8+
* git

## Steps
```sh
$ git clone https://github.com/lap00zza/Paste.git
$ cd Paste
$ npm install

# Edit init_db.sample.sh and rename it to init_db.sh
# and run it. You only need to run this once.
$ vim init_db.sample.sh
$ chmod u+x init_db.sh
$ ./init_db.sh

# Edit start_server.sample.sh and rename it to start_server.sh
# and run it.
$ vim start_server.sample.sh
$ chmod u+x start_server.sh
$ ./start_server.sh
```
## License
[MIT](https://github.com/lap00zza/Paste/blob/master/LICENSE)

Copyright (c) 2017 Jewel Mahanta
