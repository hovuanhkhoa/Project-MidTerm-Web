var App = angular.module('App', []);

App.controller('profileController', function($scope, $http) {
  $http.get('./data/profile.json').then(function(res){
    $scope.profile = res.data;   
  });
    
    $scope.autoExpand = function(e) {
        var element = typeof e === 'object' ? e.target : document.getElementById(e);
        element.style.height =  element.scrollHeight + "px";    
    };
    
     $scope.onClickEditName = function(){
        $scope.firstname = $scope.profile.name.firstname;
        $scope.middlename = $scope.profile.name.middlename;
        $scope.lastname = $scope.profile.name.lastname;
    };
    
    $scope.onClickOKName = function(){
        $scope.profile.name.firstname = $scope.firstname;
        $scope.profile.name.middlename = $scope.middlename;
        $scope.profile.name.lastname = $scope.lastname;
    };
    
     $scope.onClickEditJob = function(){
        $scope.job = $scope.profile.job;
    };
    
    $scope.onClickOKJob = function(){
        $scope.profile.job = $scope.job;
    };
    
     $scope.onClickEditNation = function(){
        $scope.nation = $scope.profile.nation.name;
        $scope.nationRef = $scope.profile.nation.ref;
        $scope.industry = $scope.profile.industry.name;
        $scope.industryRef = $scope.profile.industry.ref;
    };
    
    $scope.onClickOKNation = function(){
        $scope.profile.nation.name = $scope.nation;
        $scope.profile.nation.ref = $scope.nationRef;
        $scope.profile.industry.name =  $scope.industry;
        $scope.profile.industry.ref = $scope.industryRef;
    };
    
     $scope.onClickEditContact = function(){
        $scope.email = $scope.profile.email;
        $scope.facebook = $scope.profile.facebook;
        $scope.phone = $scope.profile.phone;
    };
    
    $scope.onClickOKContact = function(){
        $scope.profile.email= $scope.email;
        $scope.profile.facebook= $scope.facebook;
        $scope.profile.phone= $scope.phone;
    };
    
     $scope.onClickEditSummary = function(){
         $scope.summary= $scope.profile.summary.text;
    };
    
    $scope.onClickOKSummary = function(){
       $scope.profile.summary.text = $scope.summary;
    };
    
     $scope.onClickEditExperience = function(){
         $scope.Exjob= $scope.profile.experience.job;
         $scope.ExDes= $scope.profile.experience.description;
    };
    
    $scope.onClickOKExperience = function(){
        $scope.profile.experience.job = $scope.Exjob;
        $scope.profile.experience.description = $scope.ExDes;
    };
    
    $scope.tmpCom;
    
     $scope.onClickEditCoporation = function(c){
         $scope.tmpCom = c;
         $scope.ComName = $scope.tmpCom.name;
         $scope.ComRef = $scope.tmpCom.ref;
         $scope.ComLogo = $scope.tmpCom.logo;
         $scope.ComDes = $scope.tmpCom.description;
    };
    
    $scope.onClickOKCoporation = function(){
        $scope.tmpCom.name = $scope.ComName;
        $scope.tmpCom.ref = $scope.ComRef;
        $scope.tmpCom.logo = scope.ComLogo;
        $scope.tmpCom.description = $scope.ComDes;
    };
    
    $scope.onClickAddCoporation = function(){
        $scope.profile.experience.coporations.push({
          name: "New Corporation",
          description: "About corporation",
          ref:"http://www.TheirWebSite.com",
          logo: "./img/logoSample.png"
        });
    };
    
    $scope.onClickRemoveCoporation = function(){
        var t = $scope.profile.experience.coporations;
        for(var i =0; i<t.length ; i++){
            if(t[i].name === tmpCom.name){
                $scope.profile.experience.coporations.splice(i, 1);
                break;
            }
        }
    };
    
    $scope.onClickAddProject = function(){
        $scope.profile.projects.push({
            name: "New Project",
            description: "About this project!",
            developers: [
            {
                image: "./img/myImage.png",
                fbref:"https://www.facebook.com/ho.v.khoa",
                name: "Ho Vu Anh Khoa"
            }
            ]
        });
    };
    $scope.tmpProject;
    $scope.tmpDev;
    
    $scope.onClickEditOneProject = function(p){
         $scope.tmpProject = p;
         $scope.ProjectName = $scope.tmpProject.name;
         $scope.ProjectDes = $scope.tmpProject.description;
    };
    
    $scope.onClickOKOneProject = function(){
        $scope.tmpProject.name = $scope.ProjectName;
        $scope.tmpProject.description = $scope.ProjectDes;
    };
    
    $scope.onClickRemoveProject = function(){
        var t = $scope.profile.projects;
        for(var i = 0;i<t.length;i++){
            if(t[i].name === $scope.tmpProject.name){
                t.splice(i, 1);
                break;
            }
        }
    };

    $scope.onClickAddDev = function(){
        $scope.tmpProject.developers.push({      
            "image": "./img/myImage.png",
            "fbref":"https://www.facebook.com/ho.v.khoa",
            "name": "Ho Vu Anh Khoa"
        });
    };
    
    $scope.onClickEditDev = function(p,d){
         $scope.tmpProject = p;
         $scope.tmpDev = d;
         $scope.DevName = $scope.tmpDev.name;
         $scope.DevImg = $scope.tmpDev.image;
         $scope.DevFacebook = $scope.tmpDev.fbref;
    };
    
    $scope.onClickOKDev = function(){
         $scope.tmpDev.name = $scope.DevName;
         $scope.tmpDev.image = $scope.DevImg;
         $scope.tmpDev.fbref = $scope.DevFacebook;
    };
    
    $scope.onClickRemoveDev = function(){
        var t = $scope.tmpProject.developers;
        for(var i = 0;i<t.length;i++){
            if(t[i].name === $scope.tmpDev.name){
                t.splice(i, 1);
                break;
            }
        }
    };
    
    $scope.onClickEditMainSkills = function(){
    };
    
    $scope.onClickOKMainSkills = function(){
        $scope.profile.skillboard.push({
            name: $scope.MainSkill,
            skill: [
          "Eating",
                "Sleeping"
        ]
        });
    };
    
    $scope.tmpSkill;
    
    
    $scope.onClickEditSkill = function(s){
        $scope.tmpSkill = s;
        $scope.Skill = "";
        for(var i =0;i<$scope.tmpSkill.skill.length;i++){
            $scope.Skill += $scope.tmpSkill.skill[i] +"; ";
        }
    };
    
    $scope.onClickOKSkill = function(){
        $scope.tmpSkill.skill = [];
        var str="";
        for(var i =0;i<$scope.Skill.length;i++){
            if($scope.Skill[i] === ';'){
                $scope.tmpSkill.skill.push(str);
                str=""
            }
            else{
                str+=$scope.Skill[i];
            }
        }
    };
    
    $scope.onClickRemoveMainSkill = function(){
        for(var i =0;i<$scope.profile.skillboard.length;i++){
            if($scope.profile.skillboard[i].name === $scope.tmpSkill.name){
                $scope.profile.skillboard.splice(i, 1)
                break;
            }
        }
    };
    
    
    $scope.onClickEditEducations = function(){

    };
    
    $scope.onClickAddEducation = function(){
        $scope.profile.educations.push({
        name: "School's name",
        description: "About this School",
        ref:"http://www.TheirSite.com/",
        logo: "./img/logoSample.png" 
        });
    };
    $scope.tmpEducation;
    
    $scope.onClickEditEducation = function(e){
        $scope.tmpEducation = e;
        $scope.EducationName = $scope.tmpEducation.name;
        $scope.EducationLogo = $scope.tmpEducation.logo;
        $scope.EducationRef = $scope.tmpEducation.ref;
        $scope.EducationDes = $scope.tmpEducation.description;
    };
    
    $scope.onClickOKEducation = function(){
        $scope.tmpEducation.name = $scope.EducationName;
        $scope.tmpEducation.logo = $scope.EducationLogo;
        $scope.tmpEducation.ref = $scope.EducationRef;
        $scope.tmpEducation.description = $scope.EducationDes;
    };
    
    $scope.onClickRemoveEducation = function(){
        for(var i = 0;i<$scope.profile.educations.length;i++){
            if($scope.profile.educations[i].name === $scope.tmpEducation.name){
                $scope.profile.educations.splice(i, 1);
                break;
            }
        }
    };
    
});