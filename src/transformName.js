export default function transformName(input) {
    let processedString = input.name.replace(/\s+/g, '');
    if (/^\d|\W/.test(processedString)) {
        processedString = 'a' + processedString;
    }
    return processedString.toLowerCase();
}