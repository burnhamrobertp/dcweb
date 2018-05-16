ssh-keyscan $PRODUCTION_IP >> ~/.ssh/known_hosts

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/build travis@robotofham.com:/opt/dcweb