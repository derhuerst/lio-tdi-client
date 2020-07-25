#!/bin/sh

set -e
set -x

cd "$(dirname $(realpath "$0"))"

basedir="bernhackt2018-aldente-backend/proto/tdi"

pbf "$basedir/VersionTdiArray.proto" >pbf/VersionTdiArray.js

# todo: more
