// Crée un nouveau composant NavBar qui contient les boutons "prédédent" et "suivant".
// Le composant NavBar doit donc recevoir des props pour permettre le fonctionnement des boutons.

// function NavBar({ decrement, increment }) {
//     <div>
//         <button onClick={decrement}>Previous</button>
//         <button onClick={increment}>Next</button>
//     </div>
// }

function NavBar({decrement, increment}) {
    <div>
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
    </div>
}

export default NavBar;