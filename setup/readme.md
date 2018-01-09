# Setup
A guide on how to setup Firewrite.

# Guides
1. Create your own firebase realtime database
2. Export Firebase Service Account (`Settings > Project Settings > Service Accounts > Generate New Private Key`)
3. Move the downloaded service account key into this directory.
4. Rename the service account key file into `serviceAccountKey.json`
5. Change the url on line 6
6. Install dependencies
7. Run the script

## Command Line Tips
```
$ mv ~/Downloads/FILE_NAME.json .
$ mv FILE_NAME.json serviceAccountKey.json
$ npm install
$ npm start
```

After running this script, the auth node will exist on your database. After that, let's just say you won't need this directory anymore. Just do `cd ..`.

> You're done here, go back to the main repo.
