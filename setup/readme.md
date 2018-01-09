# Setup
A guide on how to setup Firewrite.

# Guides
1. Create your own firebase realtime database
2. Export Firebase Service Account (`Settings > Project Settings > Service Accounts > Generate New Private Key`)
3. Move the downloaded service account key into this directory.
4. Rename the service account key file into `serviceAccountKey.json`
5. Install dependencies
6. Run the script

## Command Line Tips
```
$ mv ~/Downloads/FILE_NAME.json .
$ mv FILE_NAME.json serviceAccountKey.json
$ npm install
$ npm start
```

## Data Path
```json
{
  "rootRef" : {
    "auth" : {
      // auth > username & password
    },
    "posts" : {
	// posts
    }
  }
}
```
