var eventTitleText = ["iOS Foundation Program","Indonesia Knowledge Forum VII","Microsoft Innovation Summit 2019"];

var textDesc = ["One month program held by Binus University associated with Apple Academy in Indonesia. This program teach us about the foundation of developing application in Apple product.",
"Annual event held by the Learning and Development Division of PT. Bank Central Asia through the bca learning service. This event is a national forum that discusses digital innovation and transformation.",
"In the age of business transformation, connecting people, products, ecosystems, and ideas is vital to success and technology plays a critical role. Microsoft Innovation Summit is your opportunity to pose the tough questions you have always wanted to ask and get insights directly from technology, industry, and solution experts."
];


$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    var item = $('.carousel-item').get();
    for(var i=0;i<item.length;i++){
        if(item[i].classList.contains('active')){
            $('#eventTitle').text(eventTitleText[i]);
            $("#eventDesc").text(textDesc[i]);
            break;
        }
    }
  })