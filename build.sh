#!/bin/sh

# ../bernhackt2018-aldente-backend/proto/tdi
# todo: store .proto files in this repo
basedir="$(dirname $(dirname $(realpath "$0")))/bernhackt2018-aldente-backend/proto/tdi"

protocol-buffers "$basedir/VersionTdi.proto" -o pbf/VersionTDI.js
# todo: more
