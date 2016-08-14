
// typy danych

    // sprawdzane typu danych

    typeof jakasZmienna;
    typeof 1;
    typeof true;
    typeof null;
    typeof "slowo";

    typeof (5 > 7);



    // boolean

    var prawda = true;
    var nieprawda = false;

    if (true) {
        // to sie zawsze wykona
    }

    if (false) {
        // to sie nigdy nie wykona
    }



    // liczbowe

    var wiek = 34;
    var temperatura = 38.1;



    // stringi (lancuchy)

    var imie = "Jadwiga";
    var zdanie = 'Ola ma jabola';
    var sklejonyString = imie + " lubi paracetamol";



    // obiekty

    var czlowiek = {
        imie: "Edek",
        adres: "Z krainy kredek",
        wiek: 40
    };

    var samochod = {
        marka: 'Honda',
        model: 'CRV',
        silnik: {
            pojemnosc: '2.5L',
            paliwo: 'ropa',
            moc: '140 iha'
        },
        wyposazenie: {
            radio: {
                cd: true,
                zmieniarkaCD: false,
                liczbaKanalow: 30
            },
            podgrzewaneFotele: true
        }
    };

    console.log(samochod.marka);
    console.log(samochod.silnik.pojemnosc);
    console.log(samochod.wyposazenie.radio.liczbaKanalow);

    if (samochod.wyposazenie.radio.cd) {
        console.log("obsluguje cd");
    } else {
        console.log("nie obsluguje cd");
    }

    // ustawianie nowej wartosci na istniejacym obiekcie

    samochod.koloZapasowe = true;



    // tablice (listy, Array)

    var liczby = [1, 5, 20];

    console.log(liczby[2]);  // wydrukuje 20

    // sprawdzanie gługości tablicy

    console.log(liczby.length);

    // dodawanie czegos do istniejacej tablicy

    liczby.push(44); // wstawi liczbe 44 na koncu tablicy

    var listaRoznychRzeczy = [true, 'apoco', 56, null, {jeszczeObiekt: 'tak'}];






// podmiana zawartości HTML w elemencie

// czysty JS
document.querySelector("button").innerHTML = "cos innego";

// jQuery
$("button").html("cos innego");
