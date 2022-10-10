function jumpFloor(number)
{
    // write code here
    if(number <= 2){
        return number
    }
    return jumpFloor(number-1) + jumpFloor(number-2)
}



console.log(jumpFloor(3))