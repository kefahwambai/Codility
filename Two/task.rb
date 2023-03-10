def ordered_count_of_characters(str)
    char_count = Hash.new(0)
    str.each_char { |char| char_count[char] += 1 }
    char_count.sort_by { |char, count| str.index(char) }.map(&:to_a)
end