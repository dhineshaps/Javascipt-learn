export default function playGuitar() {
    return 'Playing Guitar';
}

const shredding = () => {
    return 'Shredding some licks !';
};

const plucking = () => {
    return 'Plucking the strings';
};

//exporting the functions - other ways
/*
export default playGuitar; */
export {shredding, plucking};
