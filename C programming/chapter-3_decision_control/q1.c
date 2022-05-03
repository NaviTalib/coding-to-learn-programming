#include <conio.h>
#include <stdio.h>
int main()
{
    float cost_price, selling_price,profit,loss;
    printf("Enter The Cost price of item:");
    scanf("%f", &cost_price);
    printf("Enter The Selling price of item:");
    scanf("%f", &selling_price);
    

    if(cost_price<=selling_price)
    { 
        profit=selling_price-cost_price;
        printf("Made profit of %f ",profit);
    }
    else{
        loss=cost_price-selling_price;
        printf("Made loss of %f",loss);
    }
    return 0;

}