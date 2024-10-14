document.getElementById('cell1').addEventListener('click', function () {
    const code = `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

    const button = document.getElementById('cell1');
    const copyButton = document.getElementById('copy-code-1');

    if (button.innerText.includes("Hello World")) {
        button.innerHTML = `
            <pre>${code}</pre>
            <button class="copy-button" id="copy-code-1">Copy Code</button>
        `;
        button.style.whiteSpace = 'pre-wrap';
        button.style.fontSize = '12px';
        document.getElementById('copy-code-1').style.display = 'inline';
    } else {
        button.innerHTML = '"Hello World"';
        button.style.fontSize = '16px';
    }

    document.getElementById('copy-code-1').addEventListener('click', function (e) {
        e.stopPropagation();
        const codeToCopy = code.trim();
        navigator.clipboard.writeText(codeToCopy).catch(err => {
            console.error('Failed to copy code: ', err);
        });
    });
});