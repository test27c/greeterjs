;(function(global, $){

  // 'new' an object
  var Greeter = function(firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };

  // list of supported language
  var supportedLanguages = ['af', 'al', 'sa', 'az', 'ba', 'bg', 'hr', 'cz', 'de', 'en', 
                            'ee', 'fj', 'fr', 'de', 'gr', 'hu', 'id', 'ie', 'it', 'jp', 'ca', 
                            'kr', 'lv', 'lt', 'mk', 'my', 'mt', 'cn', 'no', 'pl', 'pt',
                            'ro', 'ru', 'rs', 'sk', 'es', 'se', 'th', 'vn', 'il'
                          ];

  // list of informal greetings  
  var greetings = {
    af: 'Hallo',        // Afrikaans
    al: 'Mirë dita',    // Albanian
    sa: 'Heita',        // South Africa
    az: 'Салам',        // Azerbaijani
    ba: 'Zdravo',       // Bosnian
    bg: 'Здравей',      // Bulgarian      
    hr: 'Bok',          // Croatian
    cz: 'Ahoj',         // Czech
    de: 'Grüß dich',    // Dutch
    en: 'Hi',           // English
    ee: 'Tere',         // Estonian
    fj: 'Bula',         // Fijian
    fr: 'Bonjour',      // French
    de: 'Hallo',        // German
    gr: 'Γεια σου',     // Greek
    hu: 'Sziasztok',    // Hungarian
    id: 'Hai',        // Indonesian
    ie: 'Dia dhaoibh',  // Irish 
    it: 'Ciao',        // Italian
    jp: 'おはよう',     // Japanese
    ca: 'Namaskār',     // Kannada
    kr: '안녕하세요',     // Korean 
    lv: 'Sveiki',       // Latvian
    mk: 'Добар ден',    // Macedonian 
    my: 'Selamat tengah hari', // Malaysian
    mt: 'Ħelow',        // Maltese 
    cn: '你好',         // Chinese
    no: 'Hei',          // Norweigan
    pl: 'Cześć',        // Polish
    pt: 'Oi',           // Portuguese
    ro: 'Alo',          // Romanian
    ru: 'Здравствуйте', // Russian
    rs: 'Здраво',       // Serbian
    sk: 'Ahoj',         // Slovak
    es: 'Hola',         // Spanish
    se: 'Hallá',        // Swedish
    th: 'สวัสดีค่ะ',       // Thailand
    vn: 'Xin chào',     // Vietnamese
    il: 'שלום'          // Hebrew
  };

  // list of formal greetings
  var formalGreetings = {
    af: 'Goeie dag',
    al: 'Tungjatjeta',
    sa: 'Sawubona',
    az: 'Necəsiniz',
    ba: 'Dobar dan',
    bg: 'Здравейте',
    hr: 'Dobar Dan',
    cz: 'Dobrý den',
    de: 'Hallo',
    en: 'Hello',  
    en: 'Greetings',
    ee: 'Tervist',
    fj: 'Ni sa bula',
    fr: 'Bonjour à vous',
    de: 'Hallo',
    gr: 'Καλημέρα',
    hu: 'tiszteletem',
    id: 'Hallo',
    ie: 'Dia dhuit',
    it: 'Salve',
    jp: 'おはようございます',
    ca: 'susvāgata',
    kr: '안녕하십니까',
    lv: 'Sveiki',
    mk: 'Здраво',
    mt: 'Selamat pagi',
    cn: '您好',
    no: 'Goddag',
    pl: 'Siemano',
    pt: 'Ola',
    ro: 'Salut',
    ru: 'Здра́вствуйте',
    rs: 'Здраво',
    sk: 'Dobry den',
    es: 'Saludos',
    se: 'God dag',
    th: 'สวัสดี ครับ',
    vn: 'Chào chị',
    il: 'שַׁבָּת שָׁלוֹם'
  }

  // Prototpe to holds method (save memory space using proto)
  Greeter.prototype = {

    // this.refer to the calling object at exec time
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      // Check if inputed language is valid (on the supported langs)
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw "Language not supported";
      }
    },

    greeting: function() {
      return greetings[this.language] + ', ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    // Chainable methods return their own containing object
    greet: function(formal) {
      var msg;

        // if undefined or null will be coerced to "false"
        if (formal) {
          msg = this.formalGreeting();
        } else {
          msg = this.greeting();
          
        }
        
        // Log massage to console
        if(console) {
          console.log(msg);
        }

        // 'this' refer to the calling object at exec time, to make method chainable
        return this;
    },

    setLanguage: function(language) {
      // Set the selected language
      this.language = language;
      // validate
      this.validate();
      // make chainable
      return this;
    },

    HTMLGreet: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded!';
      }

      if (!selector) {
        throw 'Missing jQuery selector!';
      }

      // determine the message
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      // inject the message in the chosen place in the DOM
      $(selector).html(msg);

      // make chainable
      return this;
    }

  };

  // Thhe actual object is created here, allowing us to 'new' an object calling 'new' an object without calling 'new'
  Greeter.init = function(firstName, lastName, language) {

    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

  };

  // initialize so we don't need to use "new"
  Greeter.init.prototype = Greeter.prototype;

  // Attach _G to the global object
  global._G = global.GreeterJS = Greeter;

})(window, jQuery);