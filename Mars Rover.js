//This is the main class Rover
class rover
{
    //These are two dictionaries that help us in the command (R) and command (L)
     right_transformer= {
        "NORTH":"EAST",
        "WEST":"NORTH",
        "SOUTH":"WEST",
        "EAST":"SOUTH"
    };
    left_transformer= {
        "NORTH":"WEST",
        "WEST":"SOUTH",
        "SOUTH":"EAST",
        "EAST":"NORTH"
    };
    //This is a parameterized constructor to use if needed,it takes the X-axis,Y-axis and the Direction
    constructor(x,y,d)
    {
        this.x=x;
        this.y=y;
        this.d=d;

    }
     //This function is to use if u need the user to enter the command himself
     read(){
     let command  = window.prompt("Enter the command: ");
     console.log("Command is",command);
     }

     //This is the function that takes the command and moves the rover in specific direction according to the command
    move(command){
        for (let i = 0; i < command.length; i++) {
           if(command[i]==='F'){
               this.x=this.x+1;
           }else if (command[i]==='B'){
               this.x=this.x-1;
           }else if (command[i]==='R'){
               this.d=this.right_transformer[this.d];

           }else {
               this.d=this.left_transformer[this.d];

           }

        }
        console.log(this.x,this.y,this.d);

    }

}

//Here I made assumption that the rover start position is (1,1,NORTH)
//Then called function move with the command,you can also use command read to take it from user
let r=new rover(1,1,"NORTH");
r.move("RLFF");
