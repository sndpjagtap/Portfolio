/**
 * Created by Sandeep on 6/5/18.
 */


var https = require('https');

function fetchData(substr) {
    pageNum = 1;



//primary function
function getNumberOfMovies(substr) {


    let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr ;
    https.get(url, (res) => {
        res.setEncoding('utf8');
    res.on('data', function(body) {
        let dataRec = JSON.parse(body);
        let page = dataRec.page;
        let per_page = dataRec.per_page;
        let total = dataRec.total;
        let total_pages = dataRec.total_pages;
        let data = dataRec.data;

    })
)

    console.log(total)
}

}

