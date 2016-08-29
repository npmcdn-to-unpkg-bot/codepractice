package com.helical.efw.cache;

import java.util.LinkedHashMap;
import java.util.Map;


public class NonRepeatingCharacter {

    private Map<Character, Integer> countMap = new LinkedHashMap<>();
    private String word;

    public NonRepeat(String word) {
        this.word = word;
    }

    public Character findNonRepeatingChar() {
        int length = this.word.length();

        for (int index = 0; index < length; index++) {
            Integer count = this.countMap.get(word.charAt(index));
            if (count == null) {
                this.countMap.put(word.charAt(index), 1);
            } else {
                this.countMap.put(word.charAt(index), count + 1);
            }
        }

        for (Map.Entry<Character, Integer> entry : countMap.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }

        return null;
    }
}
