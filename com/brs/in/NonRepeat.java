package com.brs.in;

public class NonRepeatingCharacter {

	public static void main(String[] args) {
		findNonRepeatingFirstChar("stress");
	}

	public static char findNonRepeatingFirstChar(String word) {
		if (word == null || "".equals(word.trim())) {
			throw new IllegalArgumentException("Invalid Input!!");
		}

		boolean isCharFound = false;

		for (int index = 0; index < word.length(); index++) {
			char ch = word.charAt(index);

			for (int innerIndex = 0; innerIndex < word.length(); innerIndex++) {
				if ((index != innerIndex) && ch == word.charAt(innerIndex)) {
					// Found repeating character. Break
					isCharFound = false;
					break;
				}
				isCharFound = true;
			}

			if (isCharFound) {
				System.out.println("First non repeating character is " + ch);
				return ch;
			}
		}

		return ' ';
	}
}
