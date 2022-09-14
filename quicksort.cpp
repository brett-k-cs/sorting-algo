#include <iostream>
#include <cstdlib>
#include <cstring>
using namespace std;

void quicksort(std::string a[], int size, int left, int right)
{
  int i = left;
  int j = right;
  std::string pivot = a[(left+right)/2];
  std::string temp;
  while (i <= j)
    {
      while (a[i] < pivot) i++;
      while (a[j] > pivot) j--;
      if (i <= j)
	{
	  temp = a[i];
	  a[i] = a[j];
	  a[j] = temp;
	  i++;
	  j--;
	}
    }

  if (i < right)
    quicksort(a, size, i, right);
  if (j > left)
    quicksort(a, size, left, j);
}

int main()
{
  std::string a[105000];
  int n = 0;
  
  for (std::string line; std::getline(std::cin, line);) {
    if(line.length() == 0) break;
    a[n] = line;
    n += 1;
  }
  
  quicksort(a, n, 0, n-1);
  cout << endl;
  cout << "The sorted elements are: " << endl;
  for (int i = 0; i < n; i++)
    cout << a[i] << endl;
  cout << endl;

  return 0;

}
