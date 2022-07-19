// module.exports=getDate;  //If we want only one function to bind with export
exports.getDay=getDay; //module.exports=.exports
module.exports.getDate= function() 
{
    const options = { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric',timeZone: 'Asia/Kolkata'};
    var date=new Date();
    return date.toLocaleDateString('en-us',options);
}

function getDay()
{
    const options = {weekday: 'long'};
    var date=new Date();
    return date.toLocaleDateString('en-us',options);
}
