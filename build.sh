#!/bin/sh

# ../bernhackt2018-aldente-backend/proto/tdi
# todo: store .proto files in this repo
basedir="$(dirname $(dirname $(realpath "$0")))/bernhackt2018-aldente-backend/proto/tdi"
ls "$basedir"

pbf "$basedir/VersionTdiArray.proto" >pbf/VersionTdiArray.js
# pbf "$basedir/VersionTdi.proto" >pbf/VersionTdi.js

# todo: more
