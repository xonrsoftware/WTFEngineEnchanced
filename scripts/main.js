$(function () {

    // Populate using an object literal

    // WTF.init({

    //     heading: [
    //         "It's a fucking",
    //         "Check this shit out, a fucking"
    //     ],
    //     response: [
    //         "Already fucking seen one",
    //         "Give me a-fucking-nother one",
    //         "Don't really give a fuck"
    //     ],
    //     template: [
    //         "Big @color @animal",
    //         "Silly @animal with @color fur"
    //     ],
    //     animal: [
    //         "dog",
    //         "cat",
    //         "rabbit"
    //     ],
    //     color: [
    //         "red",
    //         "blue",
    //         "green",
    //         "yellow"
    //     ]
    // });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    //WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );
    WTF.init({

        heading: [
            "It's a fucking",
            "Check this shit out, a fucking"
        ],
        response: [
            "Already fucking seen one",
            "Give me a-fucking-nother one",
            "Don't really give a fuck"
        ],
        template: [
            //I KNOW IT CAN BE OPTIMIZED, JUST TO MAKE IT EASY TO UNDERSTAND
            //heading AND response COUNTAINS IN wtf.js, NOT INCLUDED IN corpus, USE THIS VARS DIRECTLY (headings, responses)
            `/js/
            console.log(corpus);
            let item = randomItem(corpus['animal']);
            let html;
            let text;
            if(item == 'dog'){
            text = randomItem(responses); 
            html = '<dl>' +
            '<dt>' + randomItem(headings) + '</dt>' +
            '<dd>'+item+' ATTACKED ' + randomItem(corpus['dogtarget']) + '</dd>' +
            '</dl>';
            }else{
                text = randomItem(responses); 
                html = '<dl>' +
                '<dt>' + randomItem(headings) + '</dt>' +
                '<dd>' + item + '</dd>' +
                '</dl>';              
            }
            eval(corpus['executetableafter'][0]);
            `,
            "@color @animal"
        ],
        executetableafter: [ //OPTIONAL, CAN BE SET AS RAW JS IN TEMPLATE
            "dom.generate.text(text);dom.output.html(html);setTimeout(showOutput, 0);hideOutput();" // CAN BE MULTILINE TOO, USE `
        ],
        dogtarget: [
            "toy",
            "blanket",
            "furniture"
        ],
        animal: [
            "dog",
            "cat",
            "rabbit"
        ],
        color: [
            "red",
            "blue",
            "green",
            "yellow"
        ],
        animal: [
            "dog",
            "cat",
            "rabbit"
        ],
        color: [
            "red",
            "blue",
            "green",
            "yellow"
        ]
    });

});