#include<iostream>

int main(){
    int arr[10]; // Declaram un arry ci 10 elemente 
    int n = 10; // Memoram dimensiunea arryului intr-o lista
    int aux ; // Aux este o variabila auxileara care are scopul de a memora numere

    for(int i = 0 ; i < 10 ; i++) // Este un loop ce se va repeta de 10 ori
        std::cin>>arr[i]; // Citim de la tastatura elementele ce dorim sa le sortam 

    // De aici incepe algoritmul de sortare 

    for(int i = 0 ; i < n - 1 ; i++) // Repetam procesul urmator de n - 1 ori
    {
        for(int j = 0 ; j < n - 1 ; j++)// parcurgem fiecare element din Arry si il coparam cu urmatorul
        {                               // daca urmatorul element este mai mic ii interschimbam
            if(arr[j] > arr[j + 1])//Facem comparatia
            {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    //Aici se termina sortarea 

    //Afisam rezultatul 
    for(int i = 0 ; i < n ; i++)
        std::cout<<arr[i]<<' ';
    
}