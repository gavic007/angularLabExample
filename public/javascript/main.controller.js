var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'},
            {text: "GPA Calculator", link: '/gpa'}
        ];
    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "kittens"},
           {text: "snake"},
           {text: "badger"},
           {text: "puppies"}
       ];

       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };
    });

    mainApp.controller('gpaCtrl', function($scope) {
        console.log("controller loaded!");

        $scope.textFields = {
            Field1:"",
            Field2:"",
            Field3:""
        };
        $scope.data1 = [

        ];

        $scope.addGpaData = function(){
            if($scope.textFields.Field1.length >= 1 && $scope.textFields.Field2.length >= 1 && $scope.textFields.Field3.length >= 1) {
                $scope.data1.push({class:$scope.textFields.Field1, grade: $scope.textFields.Field2, credit: $scope.textFields.Field3} );
                $scope.textFields = {
                    Field1:"",
                    Field2:"",
                    Field3:""
                };
            }
        };

        $scope.removeGpaData = function(index){
            $scope.data1.splice(index, 1);
        };

    });
