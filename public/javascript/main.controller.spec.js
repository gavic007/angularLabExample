'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.data.length > 0).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.data.length;
           scope.removeData(1);
           expect(scope.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.data.length;
            scope.textField = "kittens";
            scope.addData();
            expect(scope.data.length > initialLength).toEqual(true);
        });
    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
      expect(scope.pages.length > 0).toEqual(true);
    });

});

//====Testing GPA Functions=======================================
describe('Testing GPA Functions: gpaCtrl', function(){

    beforeEach(module('mainApp'));

    var gpaCtrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaCtrl = $controller('gpaCtrl', {
            $scope: scope
        });
    }));

    it('should send an error', function(){
        scope.textFields.Field2= "fred";
        expect(scope.addGpaData()).toEqual(alert("THIS IS NOT A VALID GRADE!"))
    });

    it('should send an error', function(){
        scope.textFields.Field3= "george";
        expect(scope.addGpaData()).toEqual(alert("THIS IS NOT A VALID CREDIT VALUE!"))
    });

    it('should send an error', function(){
        scope.textFields.Field2= 7;
        expect(scope.addGpaData()).toEqual(alert("THIS IS NOT A VALID GRADE!"))
    });

    it('should equal 4', function(){
        scope.data1.push({class: "test class", grade: "A", credit: 5})
        expect(scope.calculateTotalGpa()).toEqual(4);
    });

    it('should equal red', function(){
        scope.data1.push({class: "test class", grade: "F", credit: 5})
        expect(scope.colorGpa()).toEqual({"color":"Red"});
    });

})