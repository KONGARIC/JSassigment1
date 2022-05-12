

var data = {
  "images": 
  [
      {
            "bannerImg1": "pic.jpg"
       },

       {
            "bannerImg1" : "pic.jpg"
        },
        {
            "bannerImg1" : "pic.jpg"

        },
        {
            "bannerImg1": "pic.jpg"
       },

       {
            "bannerImg1" : "pic.jpg"
        },
        {
            "bannerImg1" : "pic.jpg"

        }
    ]
};
data.images.forEach( function(obj) {
  var img = new Image();
  img.src = obj.bannerImg1;
  img.setAttribute("class", "banner-img");
  img.setAttribute("alt", "effy");
  document.getElementById("img-container").appendChild(img);
});