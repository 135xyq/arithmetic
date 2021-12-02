#include <stdio.h>
int main(void)
{

    int N = 0;
    int n = 0;
    scanf("%d", &N);
    while (N--)
    {
        int nums[10000] = {0};
        int k[10000] = {0};
        int flag = 0;
        int t[1000] = {0};
        scanf("%d", &n);
        for (int i = 0; i < n; i++)
        {
            scanf("%d", &nums[i]);
            k[i] = i + 1;
        }
        int f = 0;
        for (int j = 0; j < n; j++)
        {
            int m;
            for(m =0 ;m<f;m++){
                if(nums[j] == t[m]){
                    break;
                }
                
            }
            printf("%d %d %d\n",m,f,nums[j]);
            if(m < f){

                                if(nums[j] != t[f-1]){
                    flag  =1;
                    break;
                }
            }else{
                nums[j] = -1;
                for(int l = 0;  l < nums[j]; l++){
                    if(nums[j] != -1){
                    t[f+l] = nums[j];
                    f++;
                    nums[l] = -1;
                    }
                }
            }
        }
        if(flag == 1){
            printf("No\n");
        }else{
            printf("Yes\n");
        }
    }
}