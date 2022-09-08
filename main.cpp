#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <algorithm>
#include <string.h>
#include <fstream>
#include <sstream>

using namespace std;

char alphabet [27] = {'-', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

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
	vector<string> currentWords = map[letter];
	currentWords.push_back(word);
	map[letter] = currentWords;
      }
    else
      {
	vector<string> newWords = {word};
	if(word.length() > num) map[letter] = newWords;
	else cout << word << endl;
      }
  }

  for(int i = 0; i < 27; i++) {
    if(check_key(map, alphabet[i])) {
      if(map[alphabet[i]].size() > 1) {
	doAlgoOnPart(map[alphabet[i]], num + 1);
      } else {
	cout << map[alphabet[i]][0] << endl;
      }
    }
  }
}

int main() {
  //  cout << "Please enter the words you want to compare! When you are done, input a blank line." << endl;

  vector<string> words = {};
  
  ifstream fin;
  string line;
  
  fin.open( ( "wordlist.txt" ) );

  if ( fin.is_open())
    {
      while ( getline ( fin, line ))
	{
	  stringstream ss;
	  ss << line;

	  if ( getline ( ss, line, ','))
	    {
	      words.push_back( line );
	    }
	}
    }
  
  doAlgoOnPart(words, 0);
  
  return 0;
}
