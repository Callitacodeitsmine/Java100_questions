document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Checker').addEventListener('click', function () {
        const inputString = document.getElementById('String').value;
        
        const totalLength = reverseString(inputString);
        const wordCount = countWords(inputString);
        const lineCount = countLines(inputString);

        document.getElementById('Total_length').textContent += totalLength;
        document.getElementById('Characters').textContent += totalLength;
        document.getElementById('Words').textContent += wordCount;
        document.getElementById('Lines').textContent += lineCount;
    });

    function reverseString(str) {
        return str.length;
    }

    function countLines(str) {
        return str.split(/\r\n|\r|\n/).length;
    }

    function countWords(str) {
        const words = str.trim().split(/\s+/);
        return words.length;
    }
});
