import { Selector } from 'testcafe';

fixture`Test formulaire nom`
    .page`http://localhost:8000/index.html`;

test('Le nom saisi est bien affiché en majuscule', async t => {
    const inputNom = Selector('#nom');
    const bouton = Selector('button');
    const titre = Selector('h1');

    const nom = 'hugo';
    const nomMajuscule = nom.toUpperCase();

    await t
        .typeText(inputNom, nom)
        .click(bouton)
        .expect(titre.innerText)
        .eql(`Bonjour, ${nomMajuscule} !`);
});
