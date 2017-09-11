# GreeterJS

Mini language library for says formal and informal 'greetings' in many (40) languages!

## How to install

```
npm install greeterjs --save
```

or

```
yarn add greeterjs
```

## Features
* Easy to use.
* Support greetings in 40 language
* Simple shortcut using _G
* Easy to integrate with JQuery selector using HTMLGreet()

## Usage / Examples

```
// Example

// Instantiate new object "without new"
var g = _G('John', 'Doe');

// chainable methods
g.greet().setLanguage('jp').greet(true);


//  With Jquery example
$('#login').click(function() {
   
    var greeting = _G('John', 'Doe');
    
    greeting.setLanguage($('#lang').val()).HTMLGreet('#greet', true);
    
});
```

