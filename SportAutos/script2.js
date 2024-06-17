document.addEventListener("DOMContentLoaded", function () {
  
  const carModels = {
    BMW: ["M5", "M4"],
    Mercedes: ["CLS", "C63"],
    Porsche: ["911", "Taycan"],
    Audi: ["A5", "A4"],
  };

  const images = {
    BMW: {
      M5: {
        Neuwagen: "https://cdn.bimmertoday.de/wp-content/uploads/2022/04/Manhart-MH5-800-BMW-M5-F90-Tuning-Black-Edition-05.jpg",
        Gebraucht: "https://www.gebraucht-kaufen.de/sh-img/5e5970225b4e2d6c6b9dfcdcfbf45abe_bmw%2Be39%2Bm5.jpg",
        Unfallauto: "https://th.bing.com/th/id/R.a09c14b0e325bb31d2599400d7d5a9de?rik=3OonwhwxDSdkRg&riu=http%3a%2f%2fimages.hgmsites.net%2flrg%2f2013-bmw-m5-crash-on-german-autobahn_100388716_l.jpg&ehk=HU0fi2P0aU1%2f9ULx8fWzjOsRsi82hG0g465UQQCQ34Q%3d&risl=&pid=ImgRaw&r=0",
      },
      M4: {
        Neuwagen: "https://s1.cdn.autoevolution.com/images/news/gallery/new-2023-bmw-m4-csl-enters-the-tuning-arena-with-more-power-and-enhanced-looks_3.jpg",
        Gebraucht: "https://vehicle.img.symfio.de/1600x,q90/vehicle/luCx8b/61033db177790000ee0046c6/611586607452e4.36263174.jpg",
        Unfallauto: "https://media.tag24.de/951x634/g/y/gyizjmmtjsd6yzx8xjaanikd6hh20bj5.jpg",
      },
    },
    Mercedes: {
      CLS: {
        Neuwagen: "https://i.pinimg.com/originals/c1/43/85/c143856f4f82164d467975c1f33a3fac.jpg",
        Gebraucht: "https://vehicle.img.symfio.de/1600x,q90/vehicle/luCx8b/5f546d5d9df20504ac00614e/5f546d6aed7ef0.52935941.jpg",
        Unfallauto: "https://www.stuttgarter-zeitung.de/media.media.dbfd14cd-b6c5-4792-a2e8-30df0fafa3fb.original1920.jpg",
      },
      C63: {
        Neuwagen: "https://wheelsandmore.de/wp-content/uploads/2018/07/tuning-felgen-c63amg.jpg?gid=207",
        Gebraucht: "https://www.njuskalo.hr/image-w920x690/auti/mercedes-c-180-cdi-avangarde-slika-114317284.jpg",
        Unfallauto: "https://th.bing.com/th/id/R.9267ea48dfcbb3423e376e5aa7ec4f2c?rik=ruiHYQ1Cr4NzfQ&riu=http%3a%2f%2fwww.crash-sportwagen.de%2fwp-content%2fuploads%2f2018%2f04%2fUnfallwagen-Mercedes-AMG-C63-Frontschaden-crash-sportwagen.de_-1024x683.jpg&ehk=MTjibTBt1c71BKtJSqMfXEF0T2RL8COKk4nWSWY5nbA%3d&risl=&pid=ImgRaw&r=0",
      },
    },
    Porsche: {
      911: {
        Neuwagen: "https://s1.cdn.autoevolution.com/images/news/this-mansory-tuned-porsche-911-has-become-an-internet-sensation-do-you-dig-the-looks-220499-7.jpg",
        Gebraucht: "https://cdn.elferspot.com/wp-content/uploads/2020/12/Porsche-911-Cabrio-gebraucht-kaufen.jpg",
        Unfallauto: "https://media.tag24.de/951x634/8/x/8xssgpjpvtsk51tnqd679c6ve67r6m22.jpg",
      },
      Taycan: {
        Neuwagen: "https://www.hdcarwallpapers.com/download/mansory_porsche_taycan_turbo_s_2021_5k-3840x2160.jpg",
        Gebraucht: "https://images.finder.porsche.com/bcb387bc-be12-4034-9087-773e80fdef5c/960",
        Unfallauto: "https://www.hna.de/bilder/2021/06/28/90828448/26408344-zu-einem-schweren-unfall-ist-es-am-eisenberg-mit-einem-geliehenen-porsche-taycan-turbo-gekommen-1dfe.jpg",
      },
    },
    Audi: {
      A5: {
        Neuwagen: "https://i.pinimg.com/originals/97/e6/c3/97e6c32c4246477178d790e14ad3067e.jpg",
        Gebraucht: "https://vehicle.img.symfio.de/1600x,q90/vehicle/LtMOp/5cd6b629a842f1054b247d19/5f2a8223dc89f6.31800148.jpeg",
        Unfallauto: "https://th.bing.com/th/id/R.7b2ac7a5ac458b1f94850bdbd2a902d0?rik=8oR6emrPT7QONQ&riu=http%3a%2f%2fi.dailymail.co.uk%2fi%2fpix%2f2012%2f07%2f25%2farticle-2178811-143710B2000005DC-402_634x454.jpg&ehk=XaekCI9Yy9GoExFwUPfLfHHkni%2bP9D9nS%2b8OKRW847k%3d&risl=&pid=ImgRaw&r=0",
      },
      A4: {
        Neuwagen: "https://www.tuningblog.eu/wp-content/uploads/2016/10/Audi-A4-S4-B8-Tuning-M621-Airride-5.jpg",
        Gebraucht: "https://img-eu-c1.autohero.com/img/cf0a32e54d3d2fad5389e4ea6e661322fb03bde2280681ff51b617438cd7c19c/exterior/1/768x432-22bc8d23c9684cfe8c75a64f1d9ce492.jpg",
        Unfallauto: "https://www.hersfelder-zeitung.de/bilder/2020/03/22/13609032/952410184-unfall-anroechte-toedlich-2CTp8WtuIUf9.jpg",
      },
    },
  };

  document.getElementById("Automarke").addEventListener("change", function () {
    const automarke = this.value;
    const modellSelect = document.getElementById("Modell");
    const zustandSelect = document.getElementById("Zustand");
    const autofarbeSelect = document.getElementById("Autofarbe");
    const motorLeistungSelect = document.getElementById("MotorLeistung");

    // Reset der Dropdown-Menüs
    modellSelect.innerHTML = '<option value="">Wählen</option>';
    modellSelect.disabled = true;
    zustandSelect.disabled = true;
    zustandSelect.selectedIndex = 0;
    autofarbeSelect.disabled = true;
    motorLeistungSelect.disabled = true;

    // Falls eine Automarke ausgewählt wurde, Modell-Dropdown wird ausgefüllt
    if (automarke) {
      carModels[automarke].forEach(function (modell) {
        const option = document.createElement("option");
        option.value = modell;
        option.text = modell;
        modellSelect.appendChild(option);
      });
      modellSelect.disabled = false;

      // Auswahl des Modells
      modellSelect.addEventListener("change", function () {
        const zustandSelect = document.getElementById("Zustand");
        const autofarbeSelect = document.getElementById("Autofarbe");
        const motorLeistungSelect = document.getElementById("MotorLeistung");

        // Zustand-Dropdown aktivieren, falls ein Modell ausgewählt wurde
        if (this.value) {
          zustandSelect.disabled = false;

          // Auswahl des Zustands hinzufügen
          zustandSelect.addEventListener("change", function () {
            const automarke = document.getElementById("Automarke").value;
            const modell = document.getElementById("Modell").value;
            const zustand = this.value;
            const displayImage = document.getElementById("displayImage");
            const autofarbeSelect = document.getElementById("Autofarbe");
            const motorLeistungSelect =
              document.getElementById("MotorLeistung");

            // Bild aktualisieren basierend auf Marke, Modell und Zustand
            if (automarke && modell && zustand) {
              displayImage.src = images[automarke][modell][zustand];
            } 

            // Auto Farbe und Motorleistung Dropdowns aktivieren, falls Neuwagen
            if (zustand === "Neuwagen") {
              autofarbeSelect.disabled = false;
              motorLeistungSelect.disabled = false;

              // Autofarbe hinzufügen
              autofarbeSelect.addEventListener("change", function () {
                const selectedColor = autofarbeSelect.value;
                let imageUrl;

                switch (selectedColor) {
                  case "Schwarz":
                    imageUrl = "https://th.bing.com/th/id/OIF.86O73hJFlnZoziJkgDKzSg?rs=1&pid=ImgDetMain";
                    break;
                  case "Grau":
                    imageUrl = "https://th.bing.com/th/id/OIP.bqkzpVl_mYh4UTncuhZ_3QHaFf?rs=1&pid=ImgDetMain";
                    break;
                  case "Weiß":
                    imageUrl = "https://th.bing.com/th/id/OIP.hFMOVBFnuCaTfBFrKiTTjAHaFj?rs=1&pid=ImgDetMain";
                    break;
                  case "Dunkelrot":
                    imageUrl = "https://th.bing.com/th/id/R.24475d2ec786117f2b07ac12ba14531d?rik=0mW7%2fZEGuMdEpw&riu=http%3a%2f%2fwww.curbsideclassic.com%2fwp-content%2fcomment-image%2f518370-tn.jpg&ehk=ZlwLu%2bn%2blGTNN4Hy5d9p%2fg5adpiNJtWD%2fhLL5Ulxoyc%3d&risl=&pid=ImgRaw&r=0";
                    break;
                  case "Dunkelgrün":
                    imageUrl = "https://www.familybedding.com/img/p/l/f/0/8/3/131279/Hunter_Green_Solid_Color_Twin_Comforter.jpg";
                    break;
                  case "Dunkelgelb":
                    imageUrl = "https://th.bing.com/th/id/R.a09482ccef07b0ad0db813057ca2a734?rik=gtTL%2bBh9DRQ04A&riu=http%3a%2f%2fwww.solidbackgrounds.com%2fimages%2f1920x1080%2f1920x1080-dark-yellow-solid-color-background.jpg&ehk=YKRFut1sueuxjaJ7pbJuBqntWlJpzGUUetFTJtsRrjA%3d&risl=&pid=ImgRaw&r=0";
                    break;
                  default:
                    imageUrl = "https://th.bing.com/th/id/OIP.9w-UjIZ5xS24v7LmR0a43QAAAA?w=328&h=288&rs=1&pid=ImgDetMain";
                    break;
                }
                displayImage1.src = imageUrl;
              });

              // Motorleistung hinzufügen
              motorLeistungSelect.addEventListener("change", function () {
                const selectedPower = motorLeistungSelect.value;
                let textToShow;

                switch (selectedPower) {
                  case "150PS":
                    textToShow =
                      "Motorleistung: 150 PS, 0-50m: 4.5s, 0-100m: 7.5s";
                    break;
                  case "250PS":
                    textToShow =
                      "Motorleistung: 250 PS, 0-50m: 3.5s, 0-100m: 5.8s";
                    break;
                  case "450PS":
                    textToShow =
                      "Motorleistung: 450 PS, 0-50m: 2.8s, 0-100m: 4.2s";
                    break;
                  case "750PS+":
                    textToShow =
                      "Motorleistung: 750 PS+, 0-50m: 2.0s, 0-100m: 3.5s";
                    break;
                  default:
                    textToShow = "Leistung nicht bekannt";
                    break;
                }
                motorDaten.textContent = textToShow;
              });
            } else {
              autofarbeSelect.disabled = true;
              motorLeistungSelect.disabled = true;
              autofarbeSelect.selectedIndex = 0;
              motorLeistungSelect.selectedIndex = 0;
            }
          });
        } else {
          zustandSelect.disabled = true;
          zustandSelect.selectedIndex = 0;
          autofarbeSelect.disabled = true;
          motorLeistungSelect.disabled = true;
        }
      });
    }
  });

  const kaufenButton = document.getElementById("kaufenButton");

  kaufenButton.addEventListener("click", function () {
    const automarke = document.getElementById("Automarke").value;
    const modell = document.getElementById("Modell").value;
    const zustand = document.getElementById("Zustand").value;
    const autofarbe = document.getElementById("Autofarbe").value;
    const motorLeistung = document.getElementById("MotorLeistung").value;

    // Alle Felder müssen ausgefüllt sein
    if (
      !automarke || !modell || !zustand || (zustand === "Neuwagen" && (!autofarbe || !motorLeistung))
    ) {
      alert("Bitte füllen Sie alle Felder aus, bevor Sie den Kauf tätigen.");
      return;
    }

    // Prüfen, ob Browser Benachrichtigungen unterstützt
    if (!("Notification" in window)) {
      alert("Dein Browser unterstützt keine Benachrichtigungen");
      return;
    }

    // Benachrichtigungsberechtigung anfragen
    if (Notification.permission !== "granted") {
      Notification.requestPermission()
        .then(function (permission) {
          if (permission === "granted") {
            showNotification();
          }
        })
        .catch(function (err) {
          console.error(
            "Fehler bei der Anfrage der Benachrichtigungs-Berechtigung:",
            err
          );
        });
    } else {
      showNotification();
    }

    setTimeout(function () {
      location.reload();
    }, 400);
  });

  function showNotification() {
    const notificationOptions = {
      body: "Die Sache wurde erfolgreich gekauft!",
      icon: "https://example.com/notification-icon.png",
    };

    const notification = new Notification(
      "Kauf erfolgreich",
      notificationOptions
    );

    notification.addEventListener("click", function () {
      window.focus();
      notification.close();
    });
  }
});
