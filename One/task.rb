def no_ifs_no_buts(a, b)
    comparison = (a <=> b)
    case comparison
    when 1
      "#{a} is greater than #{b}"
    when -1
      "#{a} is less than #{b}"
    else
      "#{a} is equal to #{b}"
    end
  end