
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "You Movies - Search and Watch Movies",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Srimanthudu Telugu Full Movie | Mahesh Babu | Shruti Haasan | Jagapathi Babu | Latest Telugu Movies                              :               :                                                                                                                                                                       YouMovies                                26 May 2019                                                                                                                                                                                                                                                                                                                  Shathamanam Bhavathi | Telugu Full Movie 2017 | With Subtitles | Sharwanand, Anupama Parameswaran                              :               :                                                                                                                                                                       YouMovies                                26 May 2019                                                                                                                                                                                        All Stories:                                                                                                     Srimanthudu Telugu Full Movie | Mahesh Babu | Shruti Haasan | Jagapathi Babu | Latest Telugu Movies              :       :                                                                               YouMovies                26 May 2019                                                                                                                                     Shathamanam Bhavathi | Telugu Full Movie 2017 | With Subtitles | Sharwanand, Anupama Parameswaran              :       :                                                                               YouMovies                26 May 2019                                                                                                                                     Rama Rama Krishna Krishna Telugu Full Movie | Ram, Arjun, Priya Anand              :       :                                                                               YouMovies                26 May 2019                                                                                                                                     Nuvvu Naaku Nachav Telugu Full Movie | Venkatesh | Aarthi Agarwal | Trivikram | TVNXT Telugu              :       :                                                                               YouMovies                26 May 2019                                                                                                                                     Mosagallaku Mosagadu Telugu Full Movie | Sudheer Babu, Nandini Rai              :       :                                                                               YouMovies                26 May 2019                                                                                                                                     Gautam SSC Telugu Full Movie | Telugu Full Movies | Navadeep, Sindhu Tolani, Madhu Sharma              :       :                                                                               YouMovies                26 May 2019                                               &laquo; Prev       1        2        3      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://localhost:4000/page3/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 7,
    "url": "http://localhost:4000/srimanthudu/",
    "title": "Srimanthudu Telugu Full Movie | Mahesh Babu | Shruti Haasan | Jagapathi Babu | Latest Telugu Movies",
    "body": "2019/05/26 - "
    }, {
    "id": 8,
    "url": "http://localhost:4000/shatamanambhavathi/",
    "title": "Shathamanam Bhavathi | Telugu Full Movie 2017 | With Subtitles | Sharwanand, Anupama Parameswaran",
    "body": "2019/05/26 - "
    }, {
    "id": 9,
    "url": "http://localhost:4000/ramaramakrishnakrishna/",
    "title": "Rama Rama Krishna Krishna Telugu Full Movie | Ram, Arjun, Priya Anand",
    "body": "2019/05/26 - "
    }, {
    "id": 10,
    "url": "http://localhost:4000/nuvvunaakunachav/",
    "title": "Nuvvu Naaku Nachav Telugu Full Movie | Venkatesh | Aarthi Agarwal | Trivikram | TVNXT Telugu",
    "body": "2019/05/26 - "
    }, {
    "id": 11,
    "url": "http://localhost:4000/mosagallagimosagadu/",
    "title": "Mosagallaku Mosagadu Telugu Full Movie | Sudheer Babu, Nandini Rai",
    "body": "2019/05/26 - "
    }, {
    "id": 12,
    "url": "http://localhost:4000/gowtamssc/",
    "title": "Gautam SSC Telugu Full Movie | Telugu Full Movies | Navadeep, Sindhu Tolani, Madhu Sharma",
    "body": "2019/05/26 - "
    }, {
    "id": 13,
    "url": "http://localhost:4000/bahubali-the-conclusion/",
    "title": "Bluff Master Telugu Full Movie || Satya Dev, Nandita Swetha || Gopi Ganesh",
    "body": "2019/05/26 - "
    }, {
    "id": 14,
    "url": "http://localhost:4000/readyMoviebacktoback/",
    "title": "Back to Back Best Comedy Scenes | Ready Telugu Movie | Ram | Brahmanandam | Sunil | Genelia D'Souza",
    "body": "2019/05/26 - "
    }, {
    "id": 15,
    "url": "http://localhost:4000/ravitejaComedy/",
    "title": "Ravi Teja Tell About His Outside City Culture In Side Village Culture - Comedy Kings",
    "body": "2019/05/26 - "
    }, {
    "id": 16,
    "url": "http://localhost:4000/brahmanandamLatestComedy/",
    "title": "Brahmanandam Latest Comedy Scenes | Volga Videos",
    "body": "2019/05/26 - "
    }, {
    "id": 17,
    "url": "http://localhost:4000/adhursMoviebacktoback/",
    "title": "Adhurs Back to Back Comedy Scenes P1 - Jr. NTR, Nayanthara, Sheela",
    "body": "2019/05/26 - "
    }, {
    "id": 18,
    "url": "http://localhost:4000/Taken(2008)/",
    "title": "Taken (2008) HD Full Movie In English | Liam Neeson | New Hollywood Action-Thriller- Adventure | IOF",
    "body": "2019/05/26 - "
    }, {
    "id": 19,
    "url": "http://localhost:4000/Aladdin-animation/",
    "title": "New Animation Movies 2019 Full Movies English - ALADDIN | 2019 - Kids Movies HD",
    "body": "2019/05/26 - "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});