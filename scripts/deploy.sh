yarn build

rsync -e "ssh -o StrictHostKeyChecking=no" -r --delete-after --quiet $TRAVIS_BUILD_DIR/build/* travis@robotofham.com:/opt/dcweb