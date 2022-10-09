function Fibonacci(n)
{
    // write code here
    if(n <= 2){
        return 1;
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}