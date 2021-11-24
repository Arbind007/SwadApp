#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n,sum = 0,count = 0;
    string str;
    cin >> n >> str;
    for(int i=0;i<n;i++){
        if(str[i] == 'x'){
            count++;
        }
        else{
            if(count > 2){
                sum += (count-2);
            }
            count = 0;
        }
    }
    if(count > 2){
        sum += (count-2);
    }
    cout << sum;
    return 0;
}
