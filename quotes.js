var quotes=[
'Do or do not, there is no try. - Joda',
'Don\'t let anyone dull your sparkle. -?',
'To infinity and beyond. - Toy Story',
'Be yourself; everyone else if already taken - Oscar Wilde',
'I never look back, darling! It distracts me from the now. - Edna Mode',
'It does not dwell on the dream and forget to live. - Albus Dumbledore',
'Do one thing every day that scare you. - Eleanor Rososevelt'
]

function randomQuote(){
var rannum = Math.floor(Math.random() * (quotes.length));
document.getElementByID('RandomQuote').innerHTML = quotes[rannum];
}



