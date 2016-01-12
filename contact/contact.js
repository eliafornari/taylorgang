angular.module('myApp')

.controller('contactCtrl',['$scope','$location','$rootScope','getService','$sce','$routeParams', function($scope, $location, $rootScope, getService, $sce, $routeParams) {





    //setting an animation class for this specific page
    $scope.pageClass = 'page-contact';



    $scope.success = false;
    $scope.error = false;


    // create a blank object to hold our form information
    // $scope will allow this to pass between controller and view
  $scope.contactMobileOutsideLink = function(){
    $window.open('http://www.taylorgng.com/', '_blank');
  }


  $scope.formData = {};


    // process the form
    $scope.processForm = function() {

      // $scope.contactForm.$invalid = true;
      $scope.formData.mandrill_subject = $scope.formData.subject.toUpperCase() + " REQUEST FROM TAYLORGANG.COM"



       var mandrill = {
            "key": "kgS1hoQnJBhbLYF0v9jYXQ",
            "message": {
                "html": $scope.formData.body,
                "text": $scope.formData.body,
                "subject": $scope.formData.mandrill_subject,
                "from_email": $scope.formData.email,
                "from_name": $scope.formData.name,
                "to": [
                    {
                        "email": "contact@taylorgang.com",
                        "name": "TAYLORGANG.COM",
                        "type": "to"
                    }
                ],
                "headers": {
                    "Reply-To": $scope.formData.email
                }

            }
        }




      $http({
        method  : 'POST',
        dataType: 'JSON',
        url     : 'https://mandrillapp.com/api/1.0/messages/send.json',
        data    : mandrill  // pass in data as strings
       })


      .success(function (data) {

          	$scope.success = true;
          	$scope.formdata = {};
            $scope.hideContact = true;
            // $scope.formData.name ={};
            // $scope.formData.email ={};
            // $scope.formData.subject ={};
            // $scope.formData.body ={};

      })
      .error(function (data) {
        	$scope.error = true;
          $scope.hideContact = true;
      });
    };


      // jQuery(".form-control-dropdown").select2({
      //   minimumResultsForSearch: Infinity,
      //   placeholder: "SUBJECT"
      // });
      $rootScope.pageLoading = false;






  //....mobile
  $scope.contactMobileOutsideBackLink = function(){

    $window.location.reload();
  }






}]);
