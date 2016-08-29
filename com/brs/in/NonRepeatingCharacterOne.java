package com.helical.efw.cache;

public class NonRepeatingCharacterOne {

    public static char findNonRepeatingFirstChar(String word) {
        if (word == null || "".equals(word.trim())) {
            //Nothing to find
            return ' ';
        }

        boolean isCharFound = false;
        int length = word.length();

        for (int index = 0; index < length; index++) {
            char ch = word.charAt(index);

            for (int innerIndex = 0; innerIndex < length; innerIndex++) {
                if ((index != innerIndex) && ch == word.charAt(innerIndex)) {
                    // Found repeating character. Break
                    isCharFound = false;
                    break;
                }
                //Completed the looping from start to end. No repetition
                isCharFound = true;
            }

            if (isCharFound) {
                //Found a char that does not repeat
                return ch;
            }
        }
        //Nothing to find
        return ' ';
    }
}
