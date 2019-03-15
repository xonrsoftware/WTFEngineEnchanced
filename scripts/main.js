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
            //1 EXAMPLE WITH SELECT OF TEMPLATES, 2 WITH JUST CUSTOM JS, 3 SIMPLE
            `/js/
            if(!$( "#appendradioselect" ).length )
            $( "aside" ).append(\`<div id="appendradioselect">Select desired templates:<br>
            <input type="checkbox" name="0" checked>
            <label for="contactChoice1">Cats</label>
            <input type="checkbox" name="1" checked>
            <label for="contactChoice2">Dogs</label>
          </div>
            \`);
            else if(!$( "#appendradioselect" ).offsetParent == 0) $( "#appendradioselect" ).show();
            dom.generate.off('click').click(function () {
                let randomidea = randomItem(templates);
                if(randomidea != templates[0]) // REPLACE THIS TEMPLATE INDEX IN TEMPLATE ARRAY IF YOU MOVE IT
                if($( "#appendradioselect" ).offsetParent != 0)
                $( "#appendradioselect" ).hide();
                generate(randomidea);
                return false;
            });
            let templateslist = [\`/js/
            let text = randomItem(responses); 
            let html = '<dl>' +
            '<dt>' + randomItem(headings) + '</dt>' +
            '<dd>Cat ' + randomItem(corpus['cats']) + ' did MEOW</dd>' +
            '</dl>';              
            eval(corpus['executetableafter'][0]);
            \`,\`/js/
            let text = randomItem(responses); 
            let html = '<dl>' +
            '<dt>' + randomItem(headings) + '</dt>' +
            '<dd>Dog ' + randomItem(corpus['dogs']) + ' did woof</dd>' +
            '</dl>'; 
            eval(corpus['executetableafter'][0]);
            \`];
            let selected = [];
            $('#appendradioselect input:checked').each(function() {
                selected.push($(this).attr('name'));
            });
            console.log(selected.lenght);
            if(typeof selected != "undefined" && selected != null && selected.length != null && selected.length > 0){
                if(selected.lenght == 1) generate(templateslist[selected[0]]);
                else generate(templateslist[randomItem(selected)]);
            }else alert("Select atleast one template.");
            `,
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
        cats: [
            "meow1",
            "meow2"
        ],
        dogs: [
            "dogs1",
            "dogs2"
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