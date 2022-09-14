#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <algorithm>
#include <string.h>
#include <fstream>
#include <sstream>

using namespace std;

char alphabet [27] = {'\'', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

bool check_key(unordered_map<char, vector<string>> m, char key)
{
  // Key is not present
  if (m.find(key) == m.end())
    return false;
  return true;
}

void doAlgoOnPart(vector<string> words, int num) {
  unordered_map<char, vector<string>> map;
  for(string word : words) {
    string wordCopy = word;
    for_each(wordCopy.begin(), wordCopy.end(), [](char & c){
      c = ::tolower(c);
    });
    if(wordCopy.size() <= num) {
      cout << word << endl;
      continue;
    };
    char letter = wordCopy.at(num);
    if (check_key(map, letter))
      {
	map[letter].push_back(word);
      }
    else
      {
	vector<string> newWords = {word};
	if(word.length() > num) map[letter] = newWords;
	else cout << word << endl;
      }
  }

  for(int i = 0; i < 27; i++) {
    char letter = alphabet[i];
    if(check_key(map, letter)) {
      if(map[letter].size() > 1) {
	doAlgoOnPart(map[letter], num + 1);
      } else {
	cout << map[letter][0] << endl;
      }
    }
  }
}

int main() {
  //  cout << "Please enter the words you want to compare! When you are done, input a blank line." << endl;

  vector<string> words = {};

  for (std::string line; std::getline(std::cin, line);) {
    if(line.length() == 0) break;
    words.push_back(line);
  }

  cout << endl << "HELLO!" << endl << endl;
  
  doAlgoOnPart(words, 0);
  
  return 0;
}
