# KAI camera

# How to run project with dropbox and netlify:

## required accounts:
1. github.com (gitlab) ###DOES! NOT! WORK! WITH! GITLAB!!######
2. netlify.com
3. dropbox

## netlify
1. get account on www.netlify.com
1. click "new site from git"
2. select your git account with 'kai-camera' repo in it, wait for deploy
3. go Overview > Site settings > Functions, press 'Edit settings', type './functions' in field 'Functions Directory', then press 'Save'.
4. go Overview > Site settings > Build & deploy, and there go:
5. Build hooks: press 'Add build hook'. type NETLIFY_BUILD_HOOK_URL and press 'Save'. copy build hook URL to clipboard. in root folder of kai-camera repository find "/functions/dropbox-webhook.js", and there on line 5 paste URL like this:
```
const NETLIFY_BUILD_HOOK_URL = '<YOUR-BUILD-HOOK-URL>'
```
5. Environment > Environment variables: click 'Edit variables'. Type NETLIFY_BUILD_HOOK_URL as a 'key' and paste value from clipboard as a variable's 'value'

## dropbox

1. go to https://www.dropbox.com/developers
2. click "App Console" button (top right corner)
3. click "Create App" button
4. Choose an API: select 'Dropbox API'
5. Choose the type of access you need: select 'App folder'
6. Name your app: type your app name
7. click 'Create app' button
8. Find string 'Generated access token' and click 'generate'. copy generated token in clipboard
9. in root folder of kai-camera repository find file "gatsby-config.js", and there on line 4 paste URL like this:
```
const DBX_ACCESS_TOKEN = '<your-token>'
```
10. Netlify: go Overview > Site settings > Build & deploy > Environment > Environment variables: click 'Edit variables'. Type DBX_ACCESS_TOKEN as a 'key' and paste generated token as a variable's 'value'
11. commit changes and push it in your kai-camera repo


## How to build and run project:

```bash
yarn install
yarn build
```

## How to run project locally:

```bash
yarn install
yarn develop
```
