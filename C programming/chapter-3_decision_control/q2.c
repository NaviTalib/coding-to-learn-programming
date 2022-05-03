#include<conio.h>
#include<stdio.h>
int main(){
    int x;
    printf("Enter any number:");
    scanf("%d",&x);
    if(x%2==0){
        printf("number is even.");

    }
    else{
        printf("Number is odd.");
    }
}