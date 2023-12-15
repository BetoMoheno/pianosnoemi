const teclas = {
    "C": "https://mczak.com/code/piano/assets/midia/261-C.mp3",
    "Cs": "https://mczak.com/code/piano/assets/midia/277-C-sharp.mp3",
    "D": "https://mczak.com/code/piano/assets/midia/293-D.mp3",
    "Ds": "https://mczak.com/code/piano/assets/midia/311-D-sharp.mp3",
    "E": "https://mczak.com/code/piano/assets/midia/329-E.mp3",
    "F": "https://mczak.com/code/piano/assets/midia/349-F.mp3",
    "Fs": "https://mczak.com/code/piano/assets/midia/369F-sharp.mp3",
    "G": "https://mczak.com/code/piano/assets/midia/391-G.mp3",
    "Gs": "https://mczak.com/code/piano/assets/midia/415-G-sharp.mp3",
    "A": "https://mczak.com/code/piano/assets/midia/440-A.mp3",
    "As": "https://mczak.com/code/piano/assets/midia/466-A-sharp.mp3",
    "B": "https://mczak.com/code/piano/assets/midia/495-B.mp3",
    "C2": "https://mczak.com/code/piano/assets/midia/523-C.mp3",
    "C2s": "https://mczak.com/code/piano/assets/midia/545-C-sharp.mp3",
    "D2": "https://mczak.com/code/piano/assets/midia/587-D.mp3",
    "D2s": "https://mczak.com/code/piano/assets/midia/622-D-sharp.mp3",
    "E2": "https://mczak.com/code/piano/assets/midia/659-E.mp3",
    "F2": "https://mczak.com/code/piano/assets/midia/698-F.mp3",
    "F2s": "https://mczak.com/code/piano/assets/midia/698-F-sharp.mp3",
    "G2": "https://mczak.com/code/piano/assets/midia/783-G.mp3",
    "G2s": "https://mczak.com/code/piano/assets/midia/830-G-sharp.mp3",
    "A3": "https://mczak.com/code/piano/assets/midia/880-A.mp3",
    "A3s": "https://mczak.com/code/piano/assets/midia/932-A-sharp.mp3",
    "B3": "https://mczak.com/code/piano/assets/midia/987-B.mp3",
    
};

document.querySelectorAll('.tecla').forEach(tecla => {
    tecla.addEventListener('click', () => {
        const noteId = tecla.id;
        if (teclas[noteId]) {
            const audio = new Audio(teclas[noteId]);
            audio.play();
        }
    });
});
