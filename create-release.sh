yarn install
yarn run build:css
yarn run build:js
zip -r "v$1.zip" templates snippets layout assets sections

