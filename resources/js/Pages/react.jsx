import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function React(props) {
    let cardDeck = [];
    // Spade = S, Heart = H, Diamond = D, Club = C
    const pips = ["S", "H", "D", "C"];

    // Card 2 to 9 are, as it is, 1=A,10=X,11=J,12=Q,13=K
    const number = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "X",
        "J",
        "Q",
        "K",
    ];

    const generateCardDeck = () => {
        cardDeck = pips
            .map((card) => {
                return number.map((n) => {
                    return `${card}-${n}`;
                });
            })
            .flat();
    };

    generateCardDeck();

    const randomPlayer = (max) => {
        return Math.floor(Math.random() * max);
    };

    const createPlayers = (numberOfPlayers) => {
        let players = [];
        for (let i = 0; i < Number(numberOfPlayers); i++) {
            players[i] = [];
        }
        return players;
    };

    const distributeCard = (event) => {
        event.preventDefault();

        let numberOfPlayers = document.querySelector("#player-input").value;

        if (numberOfPlayers <= 0 || numberOfPlayers === "") {
            document.querySelector("#error").innerHTML =
                "Input value does not exist or value is invalid";
            document.querySelector("#result").innerText = "";
            document.querySelector("#play-btn").disabled = true;
        } else {
            document.querySelector("#error").innerHTML = "";
            document.querySelector("#play-btn").disabled = false;
        }

        let players = createPlayers(numberOfPlayers);

        cardDeck.forEach((card) => {
            players[randomPlayer(Number(numberOfPlayers))].push(card);
        });

        document.querySelector("#result").innerText = players.join("\r");
    };

    const onHandleChange = (event) => {
        if (event.target.value) {
            document.querySelector("#error").innerHTML = "";
            document.querySelector("#play-btn").disabled = false;
        }
    };

    return (
        <div className="p-12">
            <h1>React Programming Assessment A by Norfaizad</h1>
            <p>Please enter number of player</p>
            <p id="error" className="text-red-600"></p>
            <input id="player-input" type="number" onChange={onHandleChange} />
            <button
                id="play-btn"
                className="p-2 bg-gray-500 text-white"
                onClick={distributeCard}
            >
                DISTRIBUTE CARD
            </button>
            <pre id="result" class="w-100 text-start px-4 bg-green-200"></pre>
        </div>
    );
}
