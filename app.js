$(() => {
    console.log("App loaded.")
    //1X2hR4X7WmiT7h0S2j5r6qL9eLrkJL87
    // console.warn("Due to APIs being a cross-resource, please install:\n\"https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related\"")
    //Using a pretty an extension in the warning above for CORS
    $("#activator").click(function(){
        console.log("Clicked")
    // $.getJSON("https://api.behance.net/v2/projects?q=cat&client_id=1X2hR4X7WmiT7h0S2j5r6qL9eLrkJL87", function(data){
    //     console.log(data)
    //     $("#cat-images").empty()
    //     data.projects.map((project) => {
    //         $("#cat-images").append(`
    //             <img src="${project.covers["404"]}"></img>
    //         `)
    //     })
    // })

    console.warn("Without the filter, you're at risk of inappropiate images")
    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=edf8b307e2ee5f62a98b0fbe0d0b78ab&format=json&nojsoncallback=1&tags=cat&safe_search=3&extras=url_o", function(data){
        console.log(data)
        $("#cat-images").empty()
        data.photos.photo.map((object) => {
            if(object.url_o && (object.height_o <= 1.05*object.width_o && object.height_o >= 0.95*object.width_o)  || object.height_o <= 1.1*object.width_o){
                $("#cat-images").append(`\
                <img src="${object.url_o}"></img>
                `)
            }
        })
    })
})
})