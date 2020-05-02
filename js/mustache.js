function mustache (mustacheData) {
    const elements = document.querySelectorAll('script[data-mustache]');

    for (let i=0; i<elements.length; i++) {
        const elem = elements[i];
        const elemHTMLexample = elem.innerText;
        const elemData = mustacheData[elem.dataset.mustache];

        let HTML = '';
        for (let e=0; e<elemData.length; e++) {
            const keys = Object.keys(elemData[e]);            

            let elemHTML = elemHTMLexample;
            for (let k=0; k<keys.length; k++) {
                const keyTemplate = '{{'+keys[k]+'}}';
                elemHTML = elemHTML.replace(keyTemplate, elemData[e][keys[k]]);
            }
            HTML += elemHTML;
        }
                
        elem.insertAdjacentHTML("afterend", HTML);
        elem.remove();  //pašalina script tagą
    }
    return;
}

export default mustache;