class youtubeVideo{
    private videoTitle:string;
    private noOfLikes:number;
    private noOfDislikes:number;
    private noOfViews:number;
    private noOfSubscriber:number;
    private channalName:string;
    private datePublished:string;
    private comments:string;
    
   constructor(videoTitle:string,noOfLikes:number,noOfDislikes:number,noOfViews:number,noOfSubscriber:number,channalName:string,datePublished:string,comments:string){
    this.videoTitle=videoTitle;
    this.noOfLikes=noOfLikes;
    this.noOfDislikes=noOfDislikes;
    this.noOfViews=noOfViews;
    this.noOfSubscriber=noOfSubscriber;
    this.channalName=channalName;
    this.datePublished=datePublished;
    this.comments=comments;
   }
   getvideoTitle=()=>{
       return this.videoTitle;
   }
   getnoOfLikes=()=>{
    return this.noOfLikes;
   }
   getnoOfDisikes=()=>{
    return this.noOfDislikes;
   }
   getnoOfViews=()=>{
    return this.noOfViews;
   }
   getdatePublisheds=()=>{
    return this.datePublished;
   }
   getchannalName=()=>{
    return this.channalName;
   }
   getdatePublished=()=>{
    return this.datePublished;
   }
   getcomments=()=>{
    return this.comments;
   }
}
let meanStack=new youtubeVideo("Introduction",2000,13,28465,596849,"Net_Ninja","24 Feb 2016","12K")
let channalN = meanStack.getchannalName();
console.log(channalN);