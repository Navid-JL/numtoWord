const inputTxt = document.getElementById('inputTxt');
const lanList = document.getElementById('lanList');
const UIform = document.getElementById('UIform');
const result = document.getElementById('result');

// Add event listener to form
UIform.addEventListener('click', calcValue);

function calcValue(e) {
    if (e.target.classList.contains('btn')) {

        // get the inputTxt value
        let input = parseInt(inputTxt.value.trim());

        // Create a textarea tag
        const textarea = document.createElement('textarea');
        textarea.cols = 65;
        textarea.rows = 10;
        textarea.style.resize = 'none';
        textarea.style.padding = '1rem 2rem';
        textarea.style.fontSize = '16px';

        switch (lanList.value) {
            case 'en':
                result.textContent = '';
                textarea.textContent = n2words(input, {
                    lang: 'en'
                });
                result.append(textarea);
                break;
            case 'de':
                result.textContent = '';
                textarea.textContent = n2words(input, {
                    lang: 'de'
                });
                result.append(textarea);
                break;
            case 'es':
                result.textContent = '';
                textarea.textContent = n2words(input, {
                    lang: 'es'
                });
                result.append(textarea);
                break;
            case 'fr':
                result.textContent = '';
                textarea.textContent = n2words(input, {
                    lang: 'fr'
                });
                result.append(textarea);
                break;
            case 'it':
                result.textContent = '';
                textarea.textContent = n2words(input, {
                    lang: 'it'
                });
                result.append(textarea);
                break;
            default:
                break;
        }
        e.preventDefault();
    }
}