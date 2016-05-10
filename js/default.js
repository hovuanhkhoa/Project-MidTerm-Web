var App = angular.module('App', ['firebase']);
var webApp = "https://khoaho.firebaseio.com/";

App.controller('profileController', function($scope, $firebase) {
    
    var ref = new Firebase(webApp);
    var sync = $firebase(ref);
    
    $scope.profile = sync.$asObject();
    
    $scope.autoExpand = function(e) {
        var element = typeof e === 'object' ? e.target : document.getElementById(e);
        element.style.height =  element.scrollHeight + "px";    
    };
    
    
     $scope.onClickEditImg = function(){
        $scope.ImgRef = $scope.profile.image;
    };
    
    $scope.onClickOKImg = function(){
        $scope.profile.image = $scope.ImgRef;
        $scope.onSave();
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
        $scope.onSave();
    };
    
     $scope.onClickEditJob = function(){
        $scope.job = $scope.profile.job;
    };
    
    $scope.onClickOKJob = function(){
        $scope.profile.job = $scope.job;
        $scope.onSave();
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
        $scope.onSave();
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
        $scope.onSave();
    };
    
     $scope.onClickEditSummary = function(){
         $scope.summary= $scope.profile.summary.text;
    };
    
    $scope.onClickOKSummary = function(){
       $scope.profile.summary.text = $scope.summary;
        $scope.onSave();
        //$scope.testtest = angular.toJson($scope.profile, true);
    };
    
     $scope.onClickEditExperience = function(){
         $scope.Exjob= $scope.profile.experience.job;
         $scope.ExDes= $scope.profile.experience.description;
    };
    
    $scope.onClickOKExperience = function(){
        $scope.profile.experience.job = $scope.Exjob;
        $scope.profile.experience.description = $scope.ExDes;
        $scope.onSave();
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
        $scope.tmpCom.logo = $scope.ComLogo;
        $scope.tmpCom.description = $scope.ComDes;
        $scope.onSave();
    };
    
    $scope.onClickAddCoporation = function(){
        if (typeof $scope.profile.experience.coporations === 'undefined')
            $scope.profile.experience.coporations = [];
        $scope.profile.experience.coporations.push({
          name: "New Corporation",
          description: "About corporation",
          ref:"http://www.TheirWebSite.com",
          logo: "./img/logoSample.png"
        });
        $scope.onSave();
    };
    
    $scope.onClickRemoveCoporation = function(){
        var t = $scope.profile.experience.coporations;
        for(var i =0; i<t.length ; i++){
            if(t[i].name === $scope.tmpCom.name){
                $scope.profile.experience.coporations.splice(i, 1);
                break;
            }
        }
        $scope.onSave();
    };
    
    $scope.onClickAddProject = function(){
        if (typeof $scope.profile.projects === 'undefined')
            $scope.profile.projects = [];
        $scope.profile.projects.push({
            name: "New Project",
            description: "About this project!",
            developers: []
        });
        $scope.onSave();
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
        $scope.onSave();
    };
    
    $scope.onClickRemoveProject = function(){
        var t = $scope.profile.projects;
        for(var i = 0;i<t.length;i++){
            if(t[i].name === $scope.tmpProject.name){
                t.splice(i, 1);
                break;
            }
        }
        $scope.onSave();
    };

    $scope.onClickAddDev = function(){
        if (typeof $scope.tmpProject.developers === 'undefined')
            $scope.tmpProject.developers = [];
        $scope.tmpProject.developers.push({      
            "image": "./img/newmember.png",
            "fbref":"https://www.facebook.com/Facebook",
            "name": "New Member"
        });
        $scope.onSave();
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
        $scope.onSave();
    };
    
    $scope.onClickRemoveDev = function(){
        var t = $scope.tmpProject.developers;
        for(var i = 0;i<t.length;i++){
            if(t[i].name === $scope.tmpDev.name){
                t.splice(i, 1);
                break;
            }
        }
        $scope.onSave();
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
        $scope.onSave();
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
        $scope.onSave();
    };
    
    $scope.onClickRemoveMainSkill = function(){
        for(var i =0;i<$scope.profile.skillboard.length;i++){
            if($scope.profile.skillboard[i].name === $scope.tmpSkill.name){
                $scope.profile.skillboard.splice(i, 1)
                break;
            }
        }
        $scope.onSave();
    };
    
    
    $scope.onClickEditEducations = function(){

    };
    
    $scope.onClickAddEducation = function(){
        if (typeof $scope.profile.educations === 'undefined')
            $scope.profile.educations = [];
        $scope.profile.educations.push({
        name: "School's name",
        description: "About this School",
        ref:"http://www.TheirSite.com/",
        logo: "./img/logoSample.png" 
        });
        $scope.onSave();
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
        $scope.onSave();
    };
    
    $scope.onClickRemoveEducation = function(){
        for(var i = 0;i<$scope.profile.educations.length;i++){
            if($scope.profile.educations[i].name === $scope.tmpEducation.name){
                $scope.profile.educations.splice(i, 1);
                break;
            }
        }
        $scope.onSave();
    };
    $scope.onSave = function(){
      $scope.profile.$save();  
    };
    
});