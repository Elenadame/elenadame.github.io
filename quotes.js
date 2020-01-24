var quotes=[
'Do. Or do not. There is no try. - Joda',
'To infinity and beyond. - Toy Story',
'Be yourself; everyone else is already taken - Oscar Wilde',
'I never look back, darling! It distracts me from the now. - Edna Mode',
'It does not dwell on the dream and forget to live. - Albus Dumbledore',
'Do one thing every day that scares you. - Eleanor Rososevelt',
'While it is great to believe in one self, a little help from others can be a great blessing. -Iroh'
]

function randomQuote(){
var rannum = Math.floor(Math.random() * (quotes.length));
document.getElementById('RandomQuote').innerHTML = quotes[rannum];
}



