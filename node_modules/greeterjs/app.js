// Example

// Instantiate new object "without new"
var g = _G('John', 'Doe');

// chainable methods
g.greet().setLanguage('es').greet(true);


//  With Jquery example
$('#login').click(function() {
   
    var greeting = _G('John', 'Doe');
    
    greeting.setLanguage($('#lang').val()).HTMLGreet('#greet', true);
    
});