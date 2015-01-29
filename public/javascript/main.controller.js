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
            if($scope.textFields.Field2 == "A" ||
               $scope.textFields.Field2 == "B" ||
               $scope.textFields.Field2 == "C" ||
               $scope.textFields.Field2 == "D" ||
               $scope.textFields.Field2 == "F") {

            }else{
                alert("THIS IS NOT A VALID GRADE!");
                return;
            }
            if($scope.textFields.Field3 > 0 && $scope.textFields.Field3 < 5) {

            }else{
                alert("THIS IS NOT A VALID CREDIT AMOUNT!");
                return;
            }

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

        $scope.calculateTotalGpa = function(){
            if($scope.data1.length == 0){
                return 0;
            }
            var totalScore = 0;
            var totalCredits = 0;
            for (i = 0; i < $scope.data1.length; i++){
                var grade = $scope.data1[i].grade;
                var credit = parseInt($scope.data1[i].credit);
                var gradeNumber = gradeToNumber(grade);
                totalScore += credit*gradeNumber;
                totalCredits += credit;
            }
            return (totalScore/totalCredits);
        }

        $scope.colorGpa = function(){
            var gpa = $scope.calculateTotalGpa();
            if(gpa == 4){
                return {"color":"Purple"}

            }
            else if(gpa < 4 && gpa >= 3){
                return {"color":"Green"}

            }
           else  if(gpa < 3 && gpa >= 2){
                return {"color":"Blue"}

            }
            else if(gpa < 2 && gpa >= 1){
                return {"color":"Orange"}

            }
            else if(gpa < 1 && gpa >= 0){
                return {"color":"Red"}

            }

        }
    });
