// Week 5 classroom form. Notes stay in this browser; no server is used.
const form = document.querySelector('#feedback-form');
const list = document.querySelector('#saved-notes');
const status = document.querySelector('#form-status');
const clearButton = document.querySelector('#clear-notes');
const storageKey = 'wilson-week5-feedback';

function getNotes() {
    try { return JSON.parse(localStorage.getItem(storageKey)) || []; }
    catch (error) { return []; }
}

function showNotes() {
    const notes = getNotes();
    list.replaceChildren();
    if (notes.length === 0) {
        const item = document.createElement('li');
        item.textContent = 'No notes saved yet.';
        list.append(item);
    }
    notes.forEach(note => {
        const item = document.createElement('li');
        const name = document.createElement('strong');
        name.textContent = note.name + ' (' + note.topic + '): ';
        const email = document.createElement('span');
        email.textContent = note.email ? ' — ' + note.email + ': ' : ' '; 
        item.append(name, email, document.createTextNode(note.message));
        list.append(item);
    });
}

form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const note = {
        name: String(data.get('name')).trim(),
        email: String(data.get('email')).trim(),
        topic: String(data.get('topic')),
        message: String(data.get('message')).trim()
    };
    try {
        const notes = getNotes();
        notes.unshift(note);
        localStorage.setItem(storageKey, JSON.stringify(notes.slice(0, 5)));
        form.reset();
        status.textContent = 'Your note was saved in this browser. Thank you!';
        showNotes();
    } catch (error) {
        status.textContent = 'This browser could not save the note. Please check its storage settings.';
    }
});

clearButton.addEventListener('click', () => {
    localStorage.removeItem(storageKey);
    status.textContent = 'Saved notes were cleared.';
    showNotes();
});
showNotes();
