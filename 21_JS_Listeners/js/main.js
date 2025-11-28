//listener

const view = document.querySelector('#view2');
console.log(view);
// also log a string snapshot of the view if you want text/html
console.log('view.innerHTML:', view.innerHTML);

const div = view.querySelector('div');
const h2 = div.querySelector('h2');

console.log(h2);
// log the h2's text as a plain string
console.log('h2 textContent:', h2.textContent);

//syntax : addEventListener( event, function, useCapture)

//creating function

const dosomething = () => {
    alert('You clicked me!');
};

/*
// h2.addEventListener('click', dosomething, false);

//remove
// h2.removeEventListener('click', dosomething, false);

// Replace anonymous listener with a named handler and add comments
const handleH2Click = (event) => {
    // `event` is the Event object passed by the browser for this click.
    // `event.target` is the element that was clicked (here the h2).
    console.log(event.target); // logs the clicked element
    // change the element's visible text
    event.target.textContent = 'Clicked!';
};

// attach the named handler
h2.addEventListener('click', handleH2Click);

// If you later want to remove it:
// h2.removeEventListener('click', handleH2Click);
*/

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState == 'complete') {
        console.log('readyState: complete');
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector('#view2');
    // scope the div to the view so we target the right element
    const div = view.querySelector('div');
    const h2 = div.querySelector('h2');

    view.addEventListener('click', (event) => {
        // set the view's background color via its style object
        view.style.backgroundColor = 'purple';
    });

    div.addEventListener('click', (event) => {
        view.style.backgroundColor = 'blue';
    });

    h2.addEventListener('click', (event) => {
        // log the text before change (string)
        console.log('before click text:', event.target.textContent);
        // change the visible text
        event.target.textContent = 'Clicked!';
        // log the text after change (string)
        console.log('after click text:', event.target.textContent);
    });
};
