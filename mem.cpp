#include <iostream>
using namespace std;
int main() {
    int* num = new int(10);
    cout << "Number: " << *num << endl;
    delete num; // Manual deallocation.
    return 0;
}
