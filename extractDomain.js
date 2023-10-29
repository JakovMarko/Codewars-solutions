// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url){
    let firstDot = url.indexOf('.');
    let lastDot = url.indexOf('.', firstDot+1);
   if(url.includes('www.')){
    let urlDomain = url.slice(firstDot+1, lastDot);
    return urlDomain;
} else if (url.includes('://')){
    let firstBackslash = url.indexOf('//')
    let urlDomain = url.slice(firstBackslash+2, firstDot);
    return urlDomain;
} else {
    let urlDomain = url.slice(0, firstDot);
    return urlDomain;
}
    
  }