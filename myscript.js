var searchFor = /\bshe\b|\bhe\b|\bms\b|\bmrs\b|\bmr\b|woman|\bman\b|women|\bmen\b|\bfemale|\bmale\b|\bmales\b|\bgirl\b|\bboy\b|\bgirls\b|\bboys\b|\bgirly\b|\bboyish\b|\bgirlhood\b|\bboyhood\b|\bgirlfriend|\bboyfriend|\bwife|\bhusband\b|\bwives\b|\bhusbands\b|daughter|\bson\b|\bsons\b|\bsister|\bbrother|\bmother|grandmother|godmother|stepmother|father|\baunt\b|\buncle\b|\baunts\b|\buncles\b|\bniece\b|\bnephew\b|\bnieces\b|\bnephews\b|\bherself\b|\bhimself\b|\blady|\bladies\b|\bgentlemen\b|\bgentleman\b|\bmom\b|\bdad\b|\bmoms\b|\bdads\b|mommy|daddy|mommies|daddies|ladiez|\bmenz\b|\bmanly\b|\bmanliness\b|\bmanhood\b|\bmankind\b|\bfemini|\bmasculi|\bguy\b|\bguys\b|\bdude\b|\bdudes\b|\bdudely\b|\bmaternity\b|\bpaternity\b|\bmaternal\b|\bpaternal\b|\bmatroniz|\bpatroniz|klansman|airman|airmen|alderman|aldermen|anchorman|anchormen|assemblyman|assemblymen|bogeyman|bogeymen|bondsman|bondsmen|businessman|businessmen|cameraman|cameramen|caveman|cavemen|chairman|clergyman|congressman|congressmen|councilman|councilmen|countryman|countrymen|craftsman|craftsmen|doorman|doormen|fireman|firemen|fisherman|fishermen|foreman|foremen|freshman|freshmen|garbageman|garbagemen|handyman|handymen|hangman|henchman|henchmen|journeyman|kinsman|kinsmen|layman|laymen|madman|madmen|mailman|mailmen|marksman|middleman|middlemen|milkman|milkmen|nobleman|noblemen|ombudsman|policeman|policemen|postman|postmen|repairman|repairmen|salesman|salesmen|sandman|serviceman|servicemen|showman|snowman|spaceman|spacemen|spokesman|spokesmen|sportsman|statesman|superman|supermen|unman\b|watchman|watchmen|weatherman|weathermen|workman|workmen|hero\b|heroes|heroine\b|heroines|\bmaleness|whitemaleness|misogyn|misandr|dudebro|laydeez|d00dz|\bfem\b|\bradfem\b|\bwidow\b|\bwidower\b|\bfiance\b|\bfiancee\b|\bpapa\b|\bmama\b|\bpoppa\b|\bmomma\b|\bgod\b|\bgoddess\b|\bbride|\bgroom|\bgodliness\b|\bgodhead\b|\bgodhood\b|\bgodly\b|\bgal\b|\bsir\b|\bma\'am\b|\bgrandson|\bpatriar|\bmatriar|\bantifeminist|stepbrother|stepsister|\blord\b|\blords\b|\bking\b|\bkings\b|\bqueen\b|\bqueens\b|\bprince\b|\bprinces\b|\bprincess\b|\bprincesses\b|\bemperor\b|\bemperors\b|\bempress\b|\bempresses\b|\bgirlier\b|\bgirliest\b|\bdudelier\b|\bdudeliest\b|\bactor\b|\bactors\b|\bactress\b|\bactresses/gi;


var map = {
    "she" : "he",
    "he" : "she",
    "ms" : "mr",
    "mrs" : "mr",
    "mr" : "ms",
    "woman" : "man",
    "man" : "woman",
    "women" : "men",
    "men" : "women",
    "female" : "male",
    "male" : "female",
    "males" : "females",
    "girl" : "boy",
    "boy" : "girl",
    "girls" : "boys",
    "boys" : "girls",
    "girly" : "boyish",
    "boyish" : "girly",
    "girlhood" : "boyhood",
    "boyhood" : "girlhood",
    "girlfriend" : "boyfriend",
    "boyfriend" : "girlfriend",
    "wife" : "husband",
    "husband" : "wife",
    "wives" : "husbands",
    "husbands" : "wives",
    "daughter" : "son",
    "son" : "daughter",
    "sons" : "daughters",
    "sister" : "brother",
    "brother" : "sister",
    "mother" : "father",
    "father" : "mother",
    "grandmother" : "grandfather",
    "godmother" : "godfather",
    "stepmother" : "stepfather",
    "aunt" : "uncle",
    "uncle" : "aunt",
    "aunts" : "uncles",
    "uncles" : "aunts",
    "niece" : "nephew",
    "nephew" : "niece",
    "nieces" : "nephews",
    "nephews" : "nieces",
    "herself" : "himself",
    "himself" : "herself",
    "ladies" : "gentlemen",
    "gentlemen" : "ladies",
    "lady" : "gentleman",
    "gentleman" : "lady",
    "mom" : "dad",
    "dad" : "mom",
    "moms" : "dads",
    "dads" : "moms",
    "mommy" : "daddy",
    "daddy" : "mommy",
    "mommies" : "daddies",
    "daddies" : "mommies",
    "ladiez" : "menz",
    "menz" : "ladiez",
    "manly" : "womanly",
    "manliness" : "womanliness",
    "manhood" : "womanhood",
    "mankind" : "womankind",
    "femini" : "masculi",
    "masculi" : "femini",
    "guy" : "gal",
    "guys" : "gals",
    "dude" : "girl",
    "dudes" : "girls",
    "dudely" : "girly",
    "maternal" : "paternal",
    "paternal" : "maternal",
    "maternity" : "paternity",
    "paternity" : "maternity",
    "matroniz" : "patroniz",
    "patroniz" : "matroniz",
    "klansman" : "klanswoman",
    "airman" : "airwoman",
    "airmen" : "airwomen",
    "alderman" : "alderwoman",
    "aldermen" : "alderwomen",
    "anchorman" : "anchorwoman",
    "anchormen" : "anchorwomen",
    "assemblyman" : "assemblywoman",
    "assemblymen" : "assemblywomen",
    "bogeyman" : "bogeywoman",
    "bogeymen" : "bogeywomen",
    "bondsman" : "bondswoman",
    "bondsmen" : "bondswomen",
    "businessman" : "businesswoman",
    "businessmen" : "businesswomen",
    "cameraman" : "camerawoman",
    "cameramen" : "camerawomen",
    "caveman" : "cavewoman",
    "cavemen" : "cavewomen",
    "chairman" : "chairwoman",
    "chairmen" : "chairwomen",
    "clergyman" : "clergywoman",
    "clergymen" : "clergywomen",
    "congressman" : "congresswoman",
    "congressmen" : "congresswomen",
    "councilman" : "councilwoman",
    "councilmen" : "councilwomen",
    "countryman" : "countrywoman",
    "countrymen" : "countrywomen",
    "craftsman" : "craftswoman",
    "craftsmen" : "craftswomen",
    "doorman" : "doorwoman",
    "doormen" : "doorwomen",
    "fireman" : "firewoman",
    "firemen" : "firewomen",
    "fisherman" : "fisherwoman",
    "fishermen" : "fisherwomen",
    "foreman" : "forewoman",
    "foremen" : "forewomen",
    "freshman" : "freshwoman",
    "freshmen" : "freshwomen",
    "garbageman" : "garbagewoman",
    "garbagemen" : "garbagewomen",
    "handyman" : "handywoman",
    "handymen" : "handywomen",
    "hangman" : "hangwoman",
    "hangmen" : "hangwomen",
    "henchman" : "henchwoman",
    "henchmen" : "henchwomen",
    "journeyman" : "journeywoman",
    "journeymen" : "journeywomen",
    "kinsman" : "kinswoman",
    "kinsmen" : "kinswomen",
    "layman" : "laywoman",
    "laymen" : "laywomen",
    "madman" : "madwoman",
    "madmen" : "madwomen",
    "mailman" : "mailwoman",
    "mailmen" : "mailwomen",
    "marksman" : "markswoman",
    "marksmen" : "markswomen",
    "middleman" : "middlewoman",
    "middlemen" : "middlewomen",
    "milkman" : "milkwoman",
    "milkmen" : "milkwomen",
    "nobleman" : "noblewoman",
    "noblemen" : "noblewomen",
    "ombudsman" : "ombudswoman",
    "ombudsmen" : "ombudswomen",
    "policeman" : "policewoman",
    "policemen" : "policewomen",
    "postman" : "postwoman",
    "postmen" : "postwomen",
    "repairman" : "repairwoman",
    "repairmen" : "repairwomen",
    "salesman" : "saleswoman",
    "salesmen" : "saleswomen",
    "sandman" : "sandwoman",
    "sandmen" : "sandwomen",
    "serviceman" : "servicewoman",
    "servicemen" : "servicewomen",
    "showman" : "showwoman",
    "showmen" : "showwomen",
    "spaceman" : "spacewoman",
    "spacemen" : "spacewomen",
    "spokesman" : "spokeswoman",
    "spokesmen" : "spokeswomen",
    "sportsman" : "sportswoman",
    "sportsmen" : "sportswomen",
    "statesman" : "stateswoman",
    "statesmen" : "stateswomen",
    "superman" : "superwoman",
    "supermen" : "superwomen",
    "unman" : "unwoman",
    "watchman" : "watchwoman",
    "watchmen" : "watchwomen",
    "weatherman" : "weatherwoman",
    "weathermen" : "weatherwomen",
    "workman" : "workwoman",
    "workmen" : "workwomen",
    "hero" : "heroine",
    "heroes" : "heroines",
    "heroine" : "hero",
    "heroines" : "heroes",
    "maleness" : "femaleness",
    "whitemaleness" : "whitefemaleness",
    "misogyn" : "misandr",
    "misandr" : "misogyn",
    "dudebro" : "galpal",
    "laydeez" : "d00dz",
    "d00dz" : "laydeez",
    "fem" : "masc",
    "radfem" : "radmasc",
    "widow" : "widower",
    "widower" : "widow",
    "fiance" : "fiancee",
    "fiancee" : "fiance",
    "papa" : "mama",
    "mama" : "papa",
    "poppa" : "momma",
    "momma" : "poppa",
    "god" : "goddess",
    "godliness" : "goddessliness",
    "godhead" : "goddesshead",
    "godhood" : "goddesshood",
    "godly" : "goddessly",
    "goddess" : "god",
    "bride" : "groom",
    "groom" : "bride",
    "gal" : "fellow",
    "sir" : "ma'am",
    "ma'am" : "sir",
    "grandson" : "granddaughter",
    "patriar" : "matriar",
    "matriar" : "patriar",
    "antifeminist" : "antimasculist",
    "stepsister" : "stepbrother",
    "stepbrother" : "stepsister",
    "lord" : "lady",
    "lords" : "ladies",
    "king" : "queen",
    "kings" : "queens",
    "queen" : "king",
    "queens" : "kings",
    "prince" : "princess",
    "princes" : "princesses",
    "princess" : "prince",
    "princesses" : "princes",
    "emperor" : "empress",
    "emperors" : "empresses",
    "empress" : "emperor",
    "empresses" : "emperors",
    "girlier" : "dudelier",
    "girliest" : "dudeliest",
    "dudelier" : "girlier",
    "dudeliest" : "girliest",
    "actor" : "actress",
    "actors" : "actresses",
    "actress" : "actor",
    "actresses" : "actors",
};

function capitalise(string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1);
}

// 'map' excludes UPPERCASE & Capitalised words, so automatically figure out what those are
for( old in map ) {
    // replace all lowercase with UPPERCASE
    map[old.toUpperCase()] = map[old].toUpperCase();
    // ... and Capitalised
    map[capitalise(old)] = capitalise(map[old]);
}

// If there's a swap a → b, then also add b → a
for ( a in map ) {
    b = map[a];
    map[b] = a;
}



function genderswap(text){
    text = text.replace(searchFor, function(match) {
        var replacement;
        replacement = map[match];
        return replacement ? replacement : match;
    });

    return (text);
}


function jailbreak(node){
    var treeWalker = document.createTreeWalker(  
        node,  
        NodeFilter.SHOW_TEXT,  
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },  
        false  
    ); 
    while(treeWalker.nextNode()) {
       treeWalker.currentNode.textContent = genderswap(treeWalker.currentNode.textContent);
       treeWalker.currentNode.textContent = treeWalker.currentNode.textContent
.replace(/\bher\b(?=\.|\,|\;|\:|\]|\}|\)|\?)/g,"fdgsghjkhgfdsfghjhim")
.replace(/\bher\sher\b/g,"fdgsghjkhgfdsfghjhim fdgsghjkhgfdsfghjhis")
.replace(/\bher\b(?=\s(?=a\b|an\b|the\b|some\b|any\b|0|1|2|3|4|5|6|7|8|9|one|two|three|thirt|four|five|fift|six|seven|eight|nine|ten|eleven|twelve|twenty))/g, "fdgsghjkhgfdsfghjhim")
.replace(/\bher\b(?=\s(?=aboard|about|above|across|after|against|along|amid|among|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but\b|by\b|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in\b|inside|into|like|minus|of\b|off\b|often|on\b|onto|opposite|outside|over|past|per\b|plus|regarding|since\b|than\b|through|to\b|toward|towards|under\b|underneath|unlike|until|up\b|upon|versus|via\b|with\b|within|without|not|and\b|feel\b))/g,"fdgsghjkhgfdsfghjhim")
.replace(/\bit\sher\sall\b/g,"it fdgsghjkhgfdsfghjhis all")
.replace(/\bher\sall\b/g,"fdgsghjkhgfdsfghjhim all")
.replace(/\bher\b/g,"fdgsghjkhgfdsfghjhis")
.replace(/\bhers\b/g,"fdgsghjkhgfdsfghjhis")
.replace(/\bHer\b(?=\.|\,|\;|\:|\]|\}|\)|\?)/g,"fdgsghjkhgfdsfghjHim")
.replace(/\bHer\sher\b/g,"fdgsghjkhgfdsfghjHim fdgsghjkhgfdsfghjHis")
.replace(/\bHer\b(?=\s(?=a\b|an\b|the\b|some\b|any\b|many\b|0|1|2|3|4|5|6|7|8|9|one|two|three|thirt|four|five|fift|six|seven|eight|nine|ten|eleven|twelve|twenty))/g, "fdgsghjkhgfdsfghjHim")
.replace(/\bHer\b(?=\s(?=aboard|about|above|across|after|against|along|amid|among|around|as|at|before|behind|below|beneath|beside|besides|between|beyond|but\b|by\b|concerning|considering|despite|down|during|except|excepting|excluding|following|for|from|in\b|inside|into|like|minus|of\b|off\b|often|on\b|onto|opposite|outside|over|past|per\b|plus|regarding|since\b|than\b|through|to\b|toward|towards|under\b|underneath|unlike|until|up\b|upon|versus|via\b|with\b|within|without|not|and\b|feel\b))/g,"fdgsghjkhgfdsfghjHim")
.replace(/\bit\sHer\sall\b/g,"it fdgsghjkhgfdsfghjHis all")
.replace(/\bHer\sall\b/g,"fdgsghjkhgfdsfghjHim all")
.replace(/\bHer\b/g,"fdgsghjkhgfdsfghjHis")
.replace(/\bHers\b/g,"fdgsghjkhgfdsfghjHis")
.replace(/\bhim\b/g,"her")
.replace(/\bhis(?=\.|\,|\;|\:|\)|\]|\)|\?)/g,"hers")
.replace(/\bhis\b/g,"her")
.replace(/\bHim\b/g,"Her")
.replace(/\bHis(?=\.|\,|\;|\:)/g,"Hers")
.replace(/\bHis\b/g,"Her")
.replace(/\bfdgsghjkhgfdsfghjhim\b/g,"him")
.replace(/\bfdgsghjkhgfdsfghjhis\b/g,"his")
.replace(/\bfdgsghjkhgfdsfghjHim\b/g,"Him")
.replace(/\bfdgsghjkhgfdsfghjHis\b/g,"His")
.replace(/\b([a-z]+[,;:'".]*)\s+Miss(?= [A-Z][a-z])/g, "$1 Mr.");
    }
}


chrome.extension.sendRequest({checkPaused: "hello"}, function(response) {
    if (response.maybePaused!="yes") {
    jailbreak(document.body);

    document.body.addEventListener('DOMNodeInserted', function(event) {
        jailbreak(event.target);
    });
}
});