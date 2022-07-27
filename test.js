const Mars=require('./Mars Rover');
//This file contain some unit test cases
describe('get command',()=>{
    it('Convert command into direction',()=>{
        expect(r.move("FLFFFRFLB").to.Equal(5,1,"WEST")),
        expect(r.move("FLFFRR").to.Equal(4,1,"EAST")),
        expect(r.move("RLFF").to.Equal(3,1,"NORTH"))
    })
})