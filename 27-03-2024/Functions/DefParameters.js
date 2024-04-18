// Default Parameters -- ES6 -- 2015

function movie(name, language, budget='200cr') 
{
    console.log("Movie details are "+name+" --> "+language+" --> "+budget);

    // console.log(arguments);
}
movie('kantaara', 'kannada', undefined)