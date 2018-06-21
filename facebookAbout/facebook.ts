class facebookAbout{
       private  name : string
       private  gender : string
       private  birthDate : string
       private  work : string
       private  education : string
       private  hometown : string
       private  siblings : number
       private  friends : number
    
        constructor(name : string,gender : string,birthDate : string,work : string,education : string,hometown : string,siblings : number,friends : number){
            this.name = name
            this.gender = gender
            this.birthDate = birthDate
            this.work = work
            this.education = education
            this.hometown = hometown
            this.siblings = siblings
            this.friends = friends
        }
    
        getName = ()=>{
            return this.name
        }
        getGender = ()=>{
            return this.gender
        }
        getBirthDate = ()=>{
            return this.birthDate
        }
        getWork = ()=>{
            return this.work
        }
        getEducation = ()=>{
            return this.education
        }
        getHometown = ()=>{
            return this.hometown
        }
        getSiblings = ()=>{
            return this.siblings
        }
        getFriends = ()=>{
            return this.friends
        }
    }

    let abhiDetails = new facebookAbout("Abhishek Konda","Male","09 sep 1994","TechM","NBN Sinhgad College","solapur",3,556)
    let Edu = abhiDetails.getEducation()
    console.log(Edu)