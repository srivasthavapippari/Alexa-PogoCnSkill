/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
var card_text_pogo='POGO PLAYLIST   Chhota Bheem, Doraemon, Krishna Balram, Mighty Raju, Mr. Bean Animated, Oggy and the cockraoches, The Pink Panther, Bob the Builder, Noddy, Timon Pumbaa \new';
var card_text_cn='CARTOON PLAYLIST   Pokemon, Dragon BALL Z, Naruto, ScooobyDoo, Ben 10, Courage the stupid dog, Ed Edd n Eddy, Power puff girls, Teen Titans, Tom and Jerry, Kids Next Door, billymandy' ;
var card_text_cn1='one)Pokemon \n two)Dragon BALL Z \n three)Naruto \n four)ScooobyDoo \n five)Ben 10 \n six)Courage the stupid dog \n seven)Ed Edd n Eddy \n eight)Power puff girls \n nine)Teen Titans \n ten)Tom and Jerry \n eleven)Kids Next Door';
var car = 'POGO'
var res = 'do you want to listen another song! please select any of your favourite song'
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the world of POGO and CARTOON NETWORK!. Enjoy the theme songs of your favourite t. v shows \n ask help for me i will give you the list of the songs near me \n' + card_text_pogo + card_text_cn;
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const chhotabheem = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'chhotabheem';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Chhota+Bheem+Title+Song+in+HD+(256++kbps)+(YoutubeToAny.com).mp3"/>';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const doraemon = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'doraemon';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Doraemon+hindi+theme+song.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const krishnabalram = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'krishnabalram';
  },
  handle(handlerInput) {
   const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Krishna+Balram+-+Krishna+Balaram+Title+Song.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const mightyraju = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'mightyraju';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Mighty+Raju+Title+Song.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const mrbeananimated = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'mrbeananimated';
  },
  handle(handlerInput) {
   const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Mr+bean+song+theme+old+and+mr+bean+song+new.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const oggyandthecockraoches = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'oggyandthecockraoches';
  },
  handle(handlerInput) {
     const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Oggy+And+The+Cockroaches++Song+2.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const thepinkpanther = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'thepinkpanther';
  },
  handle(handlerInput) {
   const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/The+Pink+Panther+Theme+Song+(Original+Version).mp3"/> ';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const bobthebuilder  = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'bobthebuilder';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Bob+The+Builder+-+Theme+Song+(With+Lyrics).mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const noddy = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'noddy';
  },
  handle(handlerInput) {
     const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Make+Way+for+Noddy+OpeningTitles.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const timonpumbaa = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'timonpumbaa';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Timon++Pumbaa+-+Title+Song+%5BEnglish+Version%5D.mp3"/> ';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const pokemon = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'pokemon';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Pok%C3%A9mon+Theme+Song+(Music+Video).mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const billymandy = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'billymandy';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/The+Grim+Adventures+of+Billy++Mandy++Theme+Song++Cartoon+Network.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const dragonballz = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'dragonballz';
  },
  handle(handlerInput) {
   const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Dragon+Ball+Z+Opening+Theme+Song+++Rock+the+Dragon+720p+HD)+++YouTube.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const naruto = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'naruto';
  },
  handle(handlerInput) {
   const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Naruto+Soundtrack+-+The+Raising+Fighting+Spirit.mp3"/> ';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};

const scooobydoo = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'scooobydoo';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Scooby+Doo+Theme+Song.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const benten = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'benten';
  },
  handle(handlerInput) {
   const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Ben+10+Theme+Song.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const couragethestupiddog = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'couragethestupiddog';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Courage+the+Cowardly+Dog+Cartoon+Intro++Opening++Theme+(1999).mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};
const ededdneddy = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'ededdneddy';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Ed+Edd+n+Eddy++Theme+Song++Cartoon+Network.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};const powerpuffgirls = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'powerpuffgirls';
  },
  handle(handlerInput) {
   const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Powerpuff+girls+Theme+Song+HD+Lyrics.mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};const teentitans = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'teentitans';
  },
  handle(handlerInput) {
    const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Teen+Titans+-+Intro+%5B1080p%5D.mp3"/> ';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};const tomandjerry = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'tomandjerry';
  },
  handle(handlerInput) {
     const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Tom+And+Jerry+Theme+Tune.mp3"/> ';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};const kidsnextdoor = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'kidsnextdoor';
  },
  handle(handlerInput) {
   const speechText = '<audio src="https://s3.amazonaws.com/pogocnthemesongs/Codename++Kids+Next+Door+Theme+(IntroOpening).mp3"/> ';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(res)
      .withSimpleCard('POGO', car)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = card_text_pogo + card_text_cn ;

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt('I can help you ')
      .withSimpleCard('I can help you', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Good Bye!', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    kidsnextdoor,
    tomandjerry,
    pokemon,
    powerpuffgirls,
    dragonballz,
    couragethestupiddog,
    scooobydoo,
    mrbeananimated,
    doraemon,
    benten,
    noddy,
    bobthebuilder,
    oggyandthecockraoches,
    thepinkpanther,
    krishnabalram,
    chhotabheem,
    billymandy,
    teentitans,
    powerpuffgirls,
    ededdneddy,
    naruto,
    mightyraju,
    timonpumbaa,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
