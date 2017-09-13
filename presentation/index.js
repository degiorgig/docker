// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Image,
  Appear,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  docker: require("../assets/docker2.png"),
  gio: require("../assets/gio.jpg"),
  lopo: require("../assets/lopo.jpg"),
  cont_standard: require("../assets/cont_standard.png"),
  house: require("../assets/house.png"),
  condo: require("../assets/condo.png"),
  vm: require("../assets/vm.png"),
  container: require("../assets/container.png"),
  datacenter: require("../assets/datacenter.png"),
  container2: require("../assets/container2.png"),
  bind: require("../assets/bind.png"),
  network: require("../assets/network.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["slide"]} bgColor="secondary" notes="F11 full screen, http://localhost:3000/#/30?presenter">
          <Layout>
            <Fill>
              <Image src={images.docker.replace("/", "")} margin="0 100px 0 0" height="400" />
            </Fill>

            <Fill >
              <Heading size={3} textColor="primary" margin="0 0 0 100px">
                Valida alternativa alle macchine virtuali
              </Heading>
            </Fill>
          </Layout>
          <br />
          <Text size={6} textColor="tertiary">Giovanni Degiorgi, Luca Lopomo <br />
            CSI - Bellinzona</Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" notes="F11 full screen">
          <Layout>
            <Fill>
              <Image src={images.gio.replace("/", "")} margin="0 100px 0 0" height="300" />
            </Fill>

            <Fill>
              <Text size={5} textColor="primary">
                Giovanni Degiorgi
            </Text>

              <Text textColor="tertiary" textAlign="left">
                <br />linkedin.com/in/degiorgi <br /><br />
                twitter.com/leader80 <br /><br />
                nextpark.ch<br />
              </Text>

            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary" notes="F11 full screen">
          <Layout>
            <Fill>
              <Image src={images.lopo.replace("/", "")} margin="0 100px 0 0" height="300" />
            </Fill>

            <Fill>
              <Text size={5} textColor="primary">
                Luca Lopomo
            </Text>
              <Text textColor="tertiary" textAlign="left">
                <br />linkedin.com/in/lucalopomo <br /><br />
                twitter.com/neuromancer977 <br />
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">Agenda</Heading>
          <List>
            <Appear><ListItem>Panoramica su Docker</ListItem></Appear>
            <Appear><ListItem>Virtualizzazione vs Container</ListItem></Appear>
            <Appear><ListItem>Installazione del Docker</ListItem></Appear>
            <Appear><ListItem>Amministrare Docker</ListItem></Appear>
            <Appear><ListItem>Dockerfile e docker-compose</ListItem></Appear>
            <Appear><ListItem>Tools</ListItem></Appear>
            <Appear><ListItem>Q&A</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>PANORAMICA SU DOCKER</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="tertiary" size={1} bold>
            Perché virtualizzare un'intera macchina, quando sarebbe possibile virtualizzare solamente una piccola parte di essa?
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="Con cgroups, si ricrea un contesto di esecuzione isolato, con un alto livello di astrazione. Una sorta di sistema operativo semplificato e virtualizzato che sta alla base di tutte Ie applicazioni.">
          <Text textColor="primary" size={1} bold>
            Questa domanda ha portato gli sviluppatori di Google ad estendere il kernel di Linux con Ie librerire <Text textColor="tertiary">cgroups</Text> successivamente integrate ufficialmente nel kernel Linux.
          </Text>

          <Cite>https://en.wikipedia.org/wiki/Cgroups</Cite>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="">
          <Text textColor="primary" size={1} bold>
            Piattaforma open-source per la creazione di containers portabili, leggeri, autosufficienti per eseguire applicazioni
          </Text>
          <Cite> "Configure once... run everywhere!"</Cite>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="proprio per la sua capacita' di trasportare ogni cosa si e' preso spunto dai container marittimi">
          <Text textColor="primary" size={1} bold>
            Il nome Docker significa:
          </Text>
          <Cite> Scaricatore </Cite>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="">
          <Text textColor="primary" size={1} bold>
            Storia
          </Text>

          <Cite> Rilasciato Open Source nel marzo del 2013 </Cite>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="">
          <Text textColor="primary" size={1} bold>
            Technology Radar
          </Text>
          <List>
            <Appear><ListItem>2014-01: Assess</ListItem></Appear>
            <Appear><ListItem>2014-07: Trial</ListItem></Appear>
            <Appear><ListItem>2016-04: Adopt</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="By June 2015, just a couple short years later, Docker donated the specification and runtime code now known as runC, to the Open Container Initiative (OCI)">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Container Standards and Industry Leadership
          </Heading><br />
          <Image src={images.cont_standard.replace("/", "")} margin="0 100px 0 0" height="500" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="tertiary" size={5} bold>
            Quali sono le differenze fra container <br />e <br />macchine virtuali (VM)?
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Virtualizzazione vs Container</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Layout>
            <Fill>
              <Image src={images.house.replace("/", "")} height="300" />
              <Text size={5}>
                Macchine virtuali (VM)
              </Text>
            </Fill>

            <Fill>
              <Image src={images.condo.replace("/", "")} height="300" />
              <Text size={5}>
                Container
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Layout>
            <Fill>
              <Image src={images.vm.replace("/", "")} height="300" align="bottom" />
              <Text size={5} textColor="primary">
                Macchine virtuali (VM)
              </Text>
            </Fill>

            <Fill>
              <Image src={images.container.replace("/", "")} width="300" margin="90px 0 0 0" />
              <Text size={5} textColor="primary"  >
                Container
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" notes="Docker Datacenter vs Docker Virtuale">
          <Image src={images.datacenter.replace("/", "")} height="400" align="bottom" />
          <Text size={5} textColor="primary">
            Docker Datacenter vs Docker Virtuale
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary" size={5} bold>
            Ma i container possono dialogare con i servizi offerti dalIa macchina che Ii ospita?
          </Text>
          <Appear><Text textColor="tertiary" size={5} bold>
            <br />Sì certamente, in ogni momento! Vi è sempre condivisione di risorse
          </Text></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">Vantaggi</Heading><br />
          <Text textColor="tertiary" size={5} textAlign="left" margin="0 0 0 100px">
            Deployment <br />
            Disponibilità rapida <br />
            Controllo più granulare <br />
            Amministrazione dei cicli di rilascio delle applicazioni <br />
            Attività di testing <br />
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="Pacchetto standardizzato contenente software e dipendenze, Isola l'applicazione dal resto del sistema, Condivide lo stesso kernel del sistema operativo, Funziona sulla maggior parte delle distribuzioni linux, Nativo da Windows Server 2016">
          <Text size={3} textColor="secondary" fill margin="50 0px 50px 0">
            Il docker container
          </Text>
          <Image src={images.container2.replace("/", "")} margin="0 50px 0 0" height="500" />
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Installare DOCKER</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="La miglior esperienza su Windows, sfortunatamente è disponibile solo nelle versioni Pro ed Enterprise. ">
          <Text textColor="primary" size={3} bold>
            Windows
          </Text>
          <Appear><Text textColor="tertiary" size={5} bold>
            <br />Installer per Windows 10 <br />(Pro or Enterprise)
          </Text></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="La miglior procedura per utilizzare Docker su un sistema Linux è installarlo da terminale con il comando:">
          <Text textColor="primary" size={3} bold>
            Installare su linux (Kernel version >= 3.10)
          </Text>
          <Appear><Text textColor="tertiary" size={5} bold>
            <br />curl –sSL https://get.docker.com/ I sh <br />
          </Text></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Amministrare DOCKER</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="RECAP! <br /><br /> Docker Image Rappresenta la base di un Docker container, contiene l'intera applicazione. <br/ ><br/ > Docker Container: L'unità standard nella quale l’applicazione vive e viene eseguita.<br/ ><br/ > Docker Engine: II motore di Docker che organizza, avvia, ferma i container permettendo la comunicazione e la condivisione delle risorse tra macchine virtuali e host.<br/ ><br/ > Registry Service: II servizio, cloud o locale, dove si registrano e si distribuiscono Ie immagini di Docker (Docker HUB o Docker Trusted Registry).">          <Heading size={2} textColor="primary">Terminologia</Heading><br />
          <Text textColor="tertiary" size={5} textAlign="left" margin="0 0 0 100px">
            <br />
            <Appear><ListItem>Docker Image</ListItem></Appear>
            <Appear><ListItem>Docker Container </ListItem></Appear>
            <Appear><ListItem>Docker Engine</ListItem></Appear>
            <Appear><ListItem>Registry Service</ListItem></Appear>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="I comandi di docker  sono strutturati in: <br /><br />docker <comandoPrincipale> <comandoSecondario> [parametri]<br /><br />la lista dei comandi si può ottenere semplicemente col comando:<br /><br />docker<br /><br />la versione di docker installata sui sistema e ottenibile da:<br /><br />docker version<br /><br />oppure una versione semplificata:<br /><br />docker -v<br /><br />docker --version<br /><br />Per avere informazioni sull'installazione di docker sulla macchina<br /><br />docker info">
          <Text textColor="primary" size={5} bold>
            I comandi di docker  sono strutturati in:
          </Text>
          <Text textColor="tertiary" size={5} fit>
            <br /> docker -comandoPrincipale -comandoSecondario [parametri]
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="Per vedere Ie immagini in cache locale: <br /><br />docker image ls<br /><br />Per scaricare un'immagine dal docker hub:<br /><br />docker pull <nomeImmagine><br /><br />Per cancellare un’immaigne:<br /><br />docker image rm <nomelmmagine><br /><br />Per rimuovere le immagini non usate:<br /><br />docker image prune<br /><br /> docker image --help">
          <Text textColor="primary" size={5} bold>
            Immagini
          </Text>
          <Text textColor="tertiary" size={3} fit>
            <br /> sono costruite sui cambiamenti del file system, <br /> generalmente da un'immagine di partenza <br /> ed arricchite da metadati
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="Comando principale per gestire i container: <br /><br />docker container <comandoPrincipale><br /><br />Per vedere i container attivi:<br /><br />docker container ls<br /><br />e tutti quelli sulla macchina:<br /><br />docker container ls –a<br /><br />Tutti i comandi:<br /><br />docker container --help<br /><br />">
          <Text textColor="primary" size={3} bold>
            Container
          </Text>
          <Text textColor="tertiary" size={5} fit>
            <br /> Il container è l’istanza di un'immagine<br /> il cui stato può essere salvato.<br />
            Per i dati tuttavia è opportuno creare dei volumi dedicati.<br />
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="Come faccio a persistere i dati di un database che lavora in un container?">
          <Text textColor="primary" size={3} bold>
            I container sono solitamente immutabili ed effimeri, ma come fare a mantenere le informazioni nel tempo?
          </Text><br />
          <Appear><Text textColor="tertiary" size={5} fill>
            2 modi per farlo:
            <Text textColor="tertiary" size={5}>Volumi e Bind Mounts </Text>
          </Text></Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="">
          <Text textColor="primary" size={3} bold>
            Volume
          </Text>
          <Text textColor="tertiary" size={5} fit>
            <br /> Spazio "speciale" al di fuori del filesystem del container in uso
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="Creare un volume: <br /><br />docker volume create <volumeName><br />Elencare i volumi sulla macchina:<br />docker volume ls<br />Eliminare i volumi non usati:<br />docker volume prune<br />Eliminare un volume:<br />docker volume rm<br />Ottenere dettagli sui volume:<br />docker volume inspect <volumeName | ID><br />">
          <Text size={3} textColor="secondary" fill margin="50 0px 50px 0">
            Volume
          </Text>
          <Image src={images.bind.replace("/", "")} margin="0 50px 0 0" height="500" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="Per creare una rete in fase di run usare I'attributo network: <br />docker network create [parametri] <nomeRete><br />Per ispezionare una rete usare:<br />docker network inspect <nomeRete>">
          <Text textColor="primary" size={3} bold>
            Reti
          </Text>
          <Text textColor="tertiary" size={5} fit>
            <br /> Docker permette comodamente di creare e gestire delle sottoreti.<br />
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="Per creare una rete in fase di run usare I'attributo network: <br /><br />docker network create [parametri] <nomeRete><br /><br />Per ispezionare una rete usare:<br /><br />docker network inspect <nomeRete>">
          <Text size={3} textColor="secondary" fill margin="50 0px 50px 0">
            Rete: bridge e portmapping
          </Text>
          <Image src={images.network.replace("/", "")} margin="0 50px 0 0" height="500" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Dockerfile e DOCKER-Compose</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="">
          <Text textColor="primary" size={3} bold>
            Dockerfile
          </Text>
          <Text textColor="tertiary" size={5} fit>
            <br /> II Dockerfile è un file ben preciso che ci permette di creare un'immagine, <br />
            eseguendo una serie di comandi, specificando eventualmente delle opzioni, <br />  che risulterebbero scomode da scrivere su una sola riga in console.<br />
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="Permette il settaggio di: variabili, variabili d'ambiente, porte,referenze ad altri container,volumi,reti,">
          <Text textColor="primary" size={3} bold>
            Docker-compose
          </Text>
          <Text textColor="tertiary" size={5} fit>
            <br /> II docker-compose.yml e un file ben preciso <br />scritto in yaml, <br />che ci permette di creare un ambiente operativo a partire da uno o più container.
            <br />
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Talk is cheap </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Tools</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary" notes="">
          <Text textColor="primary" size={2} bold>
            Tools
          </Text>
          <Text textColor="tertiary" size={5} textAlign="left" margin="0 0 0 100px" fit>
            <br />
            <Appear><ListItem>Docker Hub</ListItem></Appear>
            <Appear><ListItem>Docker VS Code extension </ListItem></Appear>
            <Appear><ListItem>Kinematic (MAC)</ListItem></Appear>
            <Appear><ListItem>Kubernetes</ListItem></Appear>
            <Appear><ListItem>VMware Enterprise Container Infrastructure</ListItem></Appear>
            <Appear><ListItem>Rancher</ListItem></Appear>
            <Appear><ListItem>http://training.play-with-docker.com/</ListItem></Appear>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Q&A</Quote>
          </BlockQuote>
        </Slide>

      </Deck >
    );
  }
}
