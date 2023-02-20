#include <iostream>
#include <string>
#include <cmath>
using namespace std;

void amogus(string sussybaka = "red"){
  if(sussybaka != "yellow") {
    cout << sussybaka + " is sus\n";
  } else {
    cout << "yellow is never sus. i promise i am not impostor.\n - yellow\n";
  }
}

int main() {
  string input;
  cin >> input;
  amogus(input);
  return 0;
}