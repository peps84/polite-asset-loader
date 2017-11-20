# Polite Asset Loader

When passed an id, class or any CSS selector this script will add all instances of what is passed to an object. The object will then be looped through and any data-attributes with the key `data-src` will have it's value copied to the src attribute loading the asset.


## How to use

```sh
 var pal = require('polite-asset-loader');
 ```
#### Polite loads all elements that share this class:
```sh
 pal.load('.class');
 ```
#### Polite loads element with unique id:
```sh
 pal.load('#id');
 ```
 #### Polite loads the third image tag that is a direct child of body:
```sh
 pal.log('body > img:nth-child(3)');
 ```