#!/bin/bash
cd $(dirname $0)

echo '[' > index.json
for filename in *.json; do
    echo "\"${filename/.json/}\"," >> index.json 
done
# remove ",\n" from the file:
truncate --size=-2 index.json 
echo '' >> index.json
echo ']' >> index.json
