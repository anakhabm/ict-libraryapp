const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors=[
        {
            name:'Joseph Barbera',
            period:'1911-2006',
            genre:'Cartoon',
            desc:'Joseph Roland Barbera (/bɑːrˈbɛərə, ˈbɑːrbərə/ bar-BAIR-ə, BAR-bər-ə, Italian: [barˈbɛːra]; March 24, 1911 – December 18, 2006) was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide for much of the 20th century.He was born to Italian immigrants in New York City, where he lived, attended college and began his career through his young adult years. After working odd jobs and as a banker, Barbera joined Van Beuren Studios in 1932 and subsequently Terrytoons in 1936. In 1930, he moved to California and while working at Metro-Goldwyn-Mayer (MGM), Barbera met William Hanna. The two men began a collaboration that was at first best known for producing Tom and Jerry. In 1957, after MGM dissolved their animation department, they co-founded Hanna-Barbera, which became the most successful television animation studio in the business, producing programs such as The Flintstones, Yogi Bear, Scooby-Doo, Top Cat, The Smurfs, Huckleberry Hound, and The Jetsons. In 1967, Hanna-Barbera was sold to Taft Broadcasting for $12 million, but Hanna and Barbera remained heads of the company. In 1991, the studio was sold to Turner Broadcasting System, which in turn was merged with Time Warner, owners of Warner Bros., in 1996; Hanna and Barbera stayed on as advisors.',
            img:'barbera.jpg'
        },
        {
            name:'J K Rowling',
            period:'1997-Present',
            genre:'Fantasy',
            desc:'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling; born 31 July 1965), better known by her pen name J. K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,becoming the best-selling book series in history.The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films.She also writes crime fiction under the pen name Robert Galbraith.',
            img:'rowling.jpg'
        },
        {
            name:'Paulo Coelho',
            period:'1974-Present',
            genre:'Fantasy',
            desc:'Paulo Coelho de Souza (/ˈkwɛl.juː, kuˈɛl-, -joʊ/;[1] Portuguese: [ˈpaw.lu kuˈeʎu]; born 24 August 1947) is a Brazilian lyricist and novelist, best known for his novel The Alchemist. In 2014, he uploaded his personal papers online to create a virtual Paulo Coelho Foundation. In 1982, Coelho published his first book, Hell Archives, which failed to make a substantial impact. In 1986 he contributed to the Practical Manual of Vampirism, although he later tried to take it off the shelves since he considered it "of bad quality" . After making the pilgrimage to Santiago de Compostela in 1986, Coelho wrote The Pilgrimage, published in 1987.',
            img:'coelho.jpg'
        }]
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("author",
        {
            nav,
            title:'Library',
            author:authors[id]
        });
    });

    return authorsRouter;
}

module.exports=router;