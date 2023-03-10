function noIfsNoButs(a, b) {
    const comparison = Math.sign(a - b);
    switch (comparison) {
      case 1:
        return `${a} is greater than ${b}`;
      case -1:
        return `${a} is less than ${b}`;
      default:
        return `${a} is equal to ${b}`;
    }
}