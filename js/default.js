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
         tmpCom = c;
         $scope.ComName = tmpCom.name;
         $scope.ComRef = tmpCom.ref;
         $scope.ComLogo = tmpCom.logo;
         $scope.ComDes = tmpCom.description;
    };
    
    $scope.onClickOKCoporation = function(){
        tmpCom.name = $scope.ComName;
        tmpCom.ref = $scope.ComRef;
        tmpCom.logo = scope.ComLogo;
        tmpCom.description = $scope.ComDes;
    };
    
    $scope.onClickAddCoporation = function(){
        $scope.profile.experience.coporations.push({
          name: "New Corporation",
          description: "About corporation",
          ref:"http://www.TheirWebSite.com",
          logo: "./img/logoSample.png"
        });
    };
    
    
    
    
});