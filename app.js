const Express=require('express');
var app=new Express();
books=[
    {
        title:"Into the Water",
        author:"Paula Hawkins",
        publisher:"X[press",
        date_of_publication:"7/09/2010",
        distributor:"DC Books",
        price:525,
        Description:"English Novel"


    },
    {
        title:"Attitude Is Everything: Change Your Attitude ... Change Your Life!",
        author:"Jeff Keller",
        publisher:"Xpress",
        date_of_publication:"/4/1997",
        distributor:"DC Books",
        price:324,
        Description:"English Novel"

    },
    {
        title:"The Complete Novels of Sherlock Holmes",
        author:"Arthur Conan Doyle",
        publisher:"Xpress",
        date_of_publication:"10/12/2005",
        distributor:"DC Books",
        price:765,
        Description:"English Novel"
    },
    {
        title:"Life is What You Make It",
        author:"Preeti Shenoy",
        publisher:"Xpress",
        date_of_publication:"3/04/2001",
        distributor:"DC Books",
        price:225,
        Description:"English Novel"

    },
    {
        title:"The Power of your Subconscious Mind",
        author:"Joseph Murphy",
        publisher:"Xpress",
        date_of_publication:"1/07/1996",
        distributor:"DC Books",
        price:119,
        Description:"English Novel"

    },
    {
        title:"The Alchemist",
        author:" Paulo Coelho",
        publisher:"DC Books",
        date_of_publication:"5/08/2001",
        distributor:"DC Books",
        price:237,
        Description:"Novel"
    },
    {
        title:"Half Girlfriend",
        author:"Chetan Bhagat",
        publisher:"DC Books",
        date_of_publication:"4/04/2015",
        distributor:"DC Books",
        price:225,
        Description:" EnglishNovel"

    },
    {
        title:" Who Will Cry When You Die?",
        author:" Robin Sharma",
        publisher:"DC Books",
        date_of_publication:"1/1/2017",
        distributor:"DC Books",
        price:225,
        Description:"Novel"

    },
    {
        title:"One Indian Girl",
        author:"Chetan Bhagat",
        publisher:"DC Books",
        date_of_publication:"3/08/2007",
        distributor:"DC Books",
        price:225,
        Description:"English Novel"
    },
    {
        title:"You are the Best Friend",
        author:"Ajay K. Pandey",
        publisher:"Nation publishers",
        date_of_publication:"6/062012",
        distributor:"DC Books",
        price:456,
        Description:"English Novel"
    }];
    app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('add');
});
app.get('/view',(req,res)=>{
    res.render('view',books);
});

app.listen(3000,()=>{
    console.log("Server is running");
});