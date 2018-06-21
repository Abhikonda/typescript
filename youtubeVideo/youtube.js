var youtubeVideo = /** @class */ (function () {
    function youtubeVideo(videoTitle, noOfLikes, noOfDislikes, noOfViews, noOfSubscriber, channalName, datePublished, comments) {
        var _this = this;
        this.getvideoTitle = function () {
            return _this.videoTitle;
        };
        this.getnoOfLikes = function () {
            return _this.noOfLikes;
        };
        this.getnoOfDisikes = function () {
            return _this.noOfDislikes;
        };
        this.getnoOfViews = function () {
            return _this.noOfViews;
        };
        this.getdatePublisheds = function () {
            return _this.datePublished;
        };
        this.getchannalName = function () {
            return _this.channalName;
        };
        this.getdatePublished = function () {
            return _this.datePublished;
        };
        this.getcomments = function () {
            return _this.comments;
        };
        this.videoTitle = videoTitle;
        this.noOfLikes = noOfLikes;
        this.noOfDislikes = noOfDislikes;
        this.noOfViews = noOfViews;
        this.noOfSubscriber = noOfSubscriber;
        this.channalName = channalName;
        this.datePublished = datePublished;
        this.comments = comments;
    }
    return youtubeVideo;
}());
var meanStack = new youtubeVideo("Introduction", 2000, 13, 28465, 596849, "Net_Ninja", "24 Feb 2016", "12K");
var channalN = meanStack.getchannalName();
console.log(channalN);
