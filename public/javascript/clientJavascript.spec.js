
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    it('should return 4', function(){
        expect(gradeToNumber("A")).toEqual(4);
    })

    it('should return 3', function(){
        expect(gradeToNumber("B")).toEqual(3);
    })

    it('should return 0', function(){
        expect(gradeToNumber("F")).toEqual(0);
    })
});

