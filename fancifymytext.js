function myFunction()
{
    alert("Hello, world!");
}
function increaseFontSize(textAreaId)
{
    var textArea = document.getElementById(textAreaId);
    textArea.style.fontSize = 24 + 'pt';
}
function convertToUpperCase(textAreaId)
{
    var textarea = document.getElementById(textAreaId);
    var text = textarea.value;
    text = text.toUpperCase();
    
    // Split text into sentences using a regular expression
    var sentences = text.split(".");
    
    // Add "-Moo" to the last word of each sentence
    for (var i = 0; i < sentences.length; i++)
    {
        var sentence = sentences[i];
        var words = sentence.split(" ");
        var lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord + "-Moo";
        sentences[i] = words.join(" ");
    }
    
    
    // Join the modified sentences and update the textarea
    textarea.value = sentences.join(". ");
    if(textarea.value.charAt(textarea.value.length-5) != ".")
    {
        textarea.value = textarea.value.substring(0, textarea.value.length - 4);
    }
}
document.addEventListener('DOMContentLoaded', function()
{
    const fancyButton = document.getElementById('fancy');
    const boringButton = document.getElementById('boring');
    const textarea = document.getElementById('myTextArea');

    fancyButton.addEventListener('change', function()
    {
        if (this.checked)
        {
          textarea.style.fontWeight = 'bold';
        }
    });
    boringButton.addEventListener('change', function()
    {
        if (this.checked)
        {
          textarea.style.fontWeight = 'normal';
        }
    });
});