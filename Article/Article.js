/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'We Are the Crystal Gems',
    date: 'Feb 29th, 2',
    firstParagraph: `Umami pitchfork semiotics blue bottle gluten-free aesthetic tumblr paleo ramps XOXO cold-pressed affogato helvetica roof party. Health goth aesthetic squid four loko, deep v cred pop-up roof party selvage offal lo-fi. Ramps wolf pabst irony, fingerstache intelligentsia franzen. Hashtag gluten-free bitters 3 wolf moon, gastropub twee schlitz taxidermy narwhal thundercats mustache. Taxidermy asymmetrical synth craft beer meh. Four loko whatever quinoa food truck irony microdosing bushwick fanny pack. `,

    secondParagraph: 'Organic chartreuse whatever, scenester synth direct trade keytar flexitarian offal vegan. Hell of succulents flannel pour-over hella salvia, truffaut polaroid deep v vexillologist pug scenester. Meh fingerstache slow-carb, direct trade normcore semiotics sustainable. IPhone tbh mumblecore, ramps tilde green juice bushwick marfa 3 wolf moon fashion axe shabby chic austin. Chambray polaroid art party hell of vaporware kitsch. Food truck lumbersexual biodiesel chia tattooed.',

    thirdParagraph: `Tumeric farm-to-table vegan PBR&B vinyl green juice polaroid next level succulents williamsburg biodiesel sriracha prism knausgaard chia. Trust fund pickled chambray echo park, meh authentic whatever chicharrones taxidermy. Tilde sriracha portland semiotics biodiesel normcore. Narwhal fixie banjo fanny pack tote bag yr cloud bread etsy. Roof party kinfolk paleo, slow-carb letterpress try-hard cronut pug mlkshk. Blog man braid wolf lo-fi, cray shoreditch fanny pack listicle squid.`
  },
  {
    title: 'Extraneous Article',
    date: 'March 1st, 7',
    firstParagraph: `Celiac chillwave air plant velit, yr pug blog irure live-edge four dollar toast wayfarers. Raw denim af ullamco, voluptate fam chicharrones banh mi four loko cloud bread. Leggings activated charcoal freegan, normcore affogato single-origin coffee ut velit ex kinfolk. Cliche vice yuccie nisi, pug blue bottle DIY portland you probably haven't heard of them anim pickled truffaut neutra pour-over. Cardigan reprehenderit vaporware, incididunt aute 3 wolf moon cred helvetica chillwave woke photo booth sunt offal thundercats wolf.`,

    secondParagraph: `Bicycle rights shoreditch fixie tacos raclette keytar everyday carry tempor. Kinfolk wolf direct trade ennui tilde green juice. Humblebrag stumptown master cleanse DIY aesthetic. Ugh bicycle rights vice, ut echo park irony whatever typewriter DIY waistcoat hell of raclette. Viral before they sold out meditation activated charcoal chartreuse VHS pinterest lorem.`,

    thirdParagraph: `Subway tile labore occupy coloring book hella la croix aliquip. Dolor cornhole PBR&B ut humblebrag post-ironic consequat, dolore flannel XOXO waistcoat in ullamco vexillologist magna. Tempor skateboard tilde laborum deserunt. Hell of in try-hard waistcoat biodiesel enim. Microdosing hell of polaroid, dolore pariatur cornhole vape consectetur stumptown readymade hashtag letterpress literally narwhal. Kickstarter wolf tempor tousled synth photo booth in four loko brunch cornhole jean shorts sriracha banh mi.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article"> 
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each object and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

*/

function newComponent(attr) {
  const newComp = document.createElement('div')
  newComp.classList.add('article')

  const title = document.createElement('h2')
  title.textContent = attr.title
  newComp.appendChild(title)

  const date = document.createElement('p')
  date.textContent = attr.date
  date.classList.add('date')
  newComp.appendChild(date)
  
  const p1 = document.createElement('p')
  p1.textContent = attr.firstParagraph
  newComp.appendChild(p1)

  const p2 = document.createElement('p')
  p2.textContent = attr.secondParagraph
  newComp.appendChild(p2)

  const p3 = document.createElement('p')
  p3.textContent = attr.thirdParagraph
  newComp.appendChild(p3)

  const expButton = document.createElement('span')
  expButton.classList.add('expandButton')
  expButton.textContent ='Keep Reading'

  expButton.addEventListener("click", (event) => {
    newComp.classList.toggle('article-open')
  })

  newComp.appendChild(expButton)

  console.log(`New component created`)
  return newComp
}

const artSection = document.querySelector('.articles')

data.forEach((arrItem) => {
  let newArticle = newComponent(arrItem)
  
  artSection.appendChild(newArticle)
})

