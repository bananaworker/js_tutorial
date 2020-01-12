// Splits email into component parts
function email (emailString) {
  // Converts the emailString into lowercase
  let processedContent = emailString.toLowerCase();

  // Splits the emailString at '@' and '.'
  // Then picks the first 2 indexes of the array (Third one is 'com' - not needed)
  return processedContent.split(/[@.]/g).slice(0,2);
}
