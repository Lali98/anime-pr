function Animes() {
    return (animeList.map((anime, index) => (<Anime key={index} anime={anime}/>)))
}

function Anime({anime}) {
    return (
        <div className="card m-1 p-2" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={anime.image} className="img-fluid rounded-start" alt={anime.title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{anime.title}</h5>
                        <p className="card-text" style={{whiteSpace: 'break-spaces'}}>{anime.synopsis}</p>
                        <p className="card-text"><small className="text-muted">{anime.writtenBy}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Animes;

const animeList = [{
    title: "Peter Grill to Kenja no Jikan: Super Extra",
    image: "https://cdn.myanimelist.net/images/anime/1702/128716l.jpg",
    synopsis: "Second season of Peter Grill to Kenja no Jikan.",
    writtenBy: ""
}, {
    title: "KanColle: Itsuka Ano Umi de",
    image: "https://cdn.myanimelist.net/images/anime/1996/128721l.jpg",
    synopsis: "The dawn of a decisive battle nears in Leyte Gulf against the Abyssal Fleet, the mysterious enemies that occupy the sea. As the only ones capable of fighting them, Kanmusu—young girls possessing the souls of warships—reorganize in preparation. The Shiratsuyu-class destroyer Shigure is assigned to the First Striking Force, Third Section—also known as 1YB3H.\n\nUnfortunately for Shigure, 1YB3H consists of the remaining few Kanmusu and serves as a diversionary fleet. Needing to confront the Abyssal Fleet head-on, it may well be their first and final mission together. Even so, Shigure refuses to let the enemy take another comrade from her. As they advance toward Leyte Gulf during this suicidal mission, the members of 1YB3H must support each other and persevere to prove their worth as competent ships.",
    writtenBy: "Written by MAL Rewrite"
}, {
    title: "Koukyuu no Karasu",
    image: "https://cdn.myanimelist.net/images/anime/1932/127228l.jpg",
    synopsis: "Among the royal court, there is an individual feared as much as revered: the Raven Consort Ryuu Jusetsu. Residing in her jet-black palace and isolated from the emperor, she is the subject of countless rumors. Claimed to possess mystic abilities, she is said to take on any request—from finding lost items to inflicting curses. While some call her an immortal sage, others believe her to be a terrifying revenant. But such comments fail to faze Jusetsu, who prefers to spend her days in quiet solitude. That is, until the emperor, Ka Koushun, barges into her court and asks for her assistance with a mysterious case.\n\nThe young emperor's request requires Jusetsu to step out of her palace for the first time. Despite Ka Koushun's frequent visits annoying her to no end, she cannot bring herself to turn him away. Her predecessor's teachings echo in her ears: the Raven Consort is destined to remain forever alone and never desire anything. Yet Jusetsu finds herself making the first of several bonds when she asks Jiujiu, an innocently inquisitive court girl, to be her sole attendant.\n\nTogether, they begin fulfilling requests from the people of the palace. However, unknown perils lurk in the outside world, and drawing attention to herself may bring Jusetsu face-to-face with a past that is better left undisturbed.",
    writtenBy: "Written by MAL Rewrite"
}, {
    title: "Mushikaburi-hime",
    image: "https://cdn.myanimelist.net/images/anime/1008/128710l.jpg",
    synopsis: "For generations, the Bernstein family has been recognized as a house of nobles who favor books over everything else. Elianna Bernstein, daughter of a baron of the Sauslind Kingdom, is no different. But instead of being called a bookworm, she is known as the Bibliophile Princess.\n\nFour years ago, the crown prince, Christopher Selkirk Asherald, offered Elianna a special arrangement: if she would become his fiancée, he promised that she could continue to spend all her free time reading. Despite having to inherit a title of great responsibility, she agreed to the proposal, enticed by the prospect of gaining access to the royal archives housing a wide selection of books.\n\nTo this day, Elianna firmly believes that her engagement is void of romantic sentiment. When she notices Christopher's interactions with another girl, she presumes that the days she spends with him will soon reach an end. Yet, during this period of uncertainty, Elianna and Christopher open a new chapter in their relationship, gradually uncovering their genuine feelings as they grow to better understand each other.",
    writtenBy: "Written by MAL Rewrite"
}, {
    title: "IDOLiSH7 Third Beat! Part 2",
    image: "https://cdn.myanimelist.net/images/anime/1458/125998l.jpg",
    synopsis: "IDOLiSH7 is more successful than ever, but no one is smiling because a new threat has taken the stage: the debuting idol group ŹOOĻ. Managed by the nefarious entertainment executive Ryou Tsukumo, they will stop at nothing to get their way, resorting to all kinds of underhanded tactics to bring down their rivals. TRIGGER's image has already been ruined by scandal, and IDOLiSH7 and Re:vale are headed for the same fate—or worse.\n\nMeanwhile, Zero, the legendary idol who disappeared 15 years ago, continues to haunt the present through those he left behind. His manager seems to be in contact with Tsukumo for his own schemes, and Zero's songwriter reveals himself in a letter after having been missing for years. IDOLiSH7 finds an ally in Re:vale to thwart ŹOOĻ's plans while trying to make sense of Zero's colleagues' actions, but it may be impossible for everyone to emerge unscathed.",
    writtenBy: "Written by MAL Rewrite"
}, {
    title: "Chainsaw Man",
    image: "https://cdn.myanimelist.net/images/anime/1806/126216l.jpg",
    synopsis: "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.\n\nRemarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.",
    writtenBy: "Written by MAL Rewrite"
}, {
    title: "Chiikawa",
    image: "https://cdn.myanimelist.net/images/anime/1783/121944l.jpg",
    synopsis: "What's a Chiikawa? No one really knows, but everyone can see they're small, they're cute, and they're always having a fun time! Join them as they explore their surreal world with the sharp humor and clever antics that make the Chiikawa irresistible.",
    writtenBy: "Source: HIDIVE, edited"
}, {
    title: "Fuufu Ijou, Koibito Miman.",
    image: "https://cdn.myanimelist.net/images/anime/1595/123471l.jpg",
    synopsis: "Third-year high school student Jirou Yakuin is in love with his childhood friend and classmate, Shiori Sakurazaka. Thus, he hopes to be paired with her for the \"marriage practical\": their school's practice of randomly selecting boy-girl pairs to live as pretend married couples while monitoring and rating them on how close they have gotten. Meanwhile, the lively Akari Watanabe wants to be assigned to her crush, the popular and good-looking Minami Tenjin.\n\nMuch to their dismay, Jirou and Akari find out that not only have they been paired together, but so have Shiori and Minami! Determined to be with their crushes, Jirou and Akari strive to earn as many points as possible, as the top 10 pairs earn the right to switch their partners—so long as both couples agree.",
    writtenBy: ""
}, {
    title: "Uzaki-chan wa Asobitai! Double",
    image: "https://cdn.myanimelist.net/images/anime/1539/128058l.jpg",
    synopsis: "During the summer holidays, energetic Hana Uzaki spent most of her time accompanying her lonesome upperclassman, Shinichi Sakurai. Now that school has resumed, Uzaki's teasing continues to ramp up, much to Sakurai's constant annoyance. Nevertheless, no amount of ridicule can damage the pair's relationship—which only seems to be getting better as their college days fly by!",
    writtenBy: "Written by MAL Rewrite"
}, {
    title: "Urusei Yatsura (2022)",
    image: "https://cdn.myanimelist.net/images/anime/1418/123904l.jpg",
    synopsis: "When aliens known as the Oni threaten to invade the Earth, they promise to leave under one condition—a randomly-chosen human must win a one-on-one game of tag against Lum, the beautiful daughter of the Oni leader. The \"lucky\" person selected happens to be the lustful and unlucky high schooler Ataru Moroboshi. Given 10 days to attempt to grab Lum's horns, Ataru realizes how impossible the challenge is as he is faced with Lum's extraterrestrial powers.\n\nMotivated by a promise of marriage from his childhood friend Shinobu Miyake, Ataru manages to catch Lum off guard. He mistakenly grabs hold of her bikini top first, but he eventually achieves his true goal. Although the game is over, Lum misunderstands that she is the one whom Ataru wants to marry, and she decides to move in with him. The poor student constantly tries to shake off the clingy Lum while doing his best to reconcile with his desired fiancée. After Ataru's heroic feat results in such a disastrous outcome, it is questionable whether luck will ever be on his side.",
    writtenBy: "Written by MAL Rewrite"
}, {
    title: "Akuyaku Reijou nano de Last Boss wo Kattemimashita",
    image: "https://cdn.myanimelist.net/images/anime/1648/126110l.jpg",
    synopsis: "Aileen Lauren Dautriche's life changes forever on the day her engagement with the crown prince Cedric Jeanne Elmir is nullified so he can be together with Lilia Rainworth. The event triggers Aileen's memories from her past life—she has been reincarnated in an otome game as the villainess, who is destined to die in the final act. To prevent her predetermined demise, Aileen has only one option: to court the game's last boss, Claude Jeanne Elmir—the proclaimed \"Demon King\" and Cedric's half-brother—and marry him.\n\nHowever, it is easier said than done, as Claude distrusts her intentions. Instead of giving up, Aileen adamantly tries to win his heart by helping Claude fulfill his wish: to build peace between humankind and demonic beasts. But time is running out, and it is up to Aileen to change the course of not only her tragic ending but Claude's as well.",
    writtenBy: "Written by MAL Rewrite"
}, {
    title: "Romantic Killer",
    image: "https://cdn.myanimelist.net/images/anime/1676/128173l.jpg",
    synopsis: "Anzu Hoshino needs only three things in her life: video games, chocolate, and her beloved cat. Unlike other high school girls, Anzu has no time for or interest in romance. But as she begins playing a poorly programmed 3D otome game, a bizarre flying wizard named Riri emerges from the screen and calls Anzu \"subject one,\" the first person who will experience a dating game harem storyline in real life.\n\nDespite Anzu's fiery protests, Riri confiscates her favorite things to force her to focus on love. Riri orchestrates a series of unlucky incidents and romantic cliches that lead her to meet Tsukasa Kazuki, one of the most attractive boys in her school. Still enraged, Anzu is adamant about resisting Tsukasa's charm. As all the ridiculous fabricated scenarios help Anzu warm up to Tsukasa's pleasant nature, Riri throws other stereotypical pretty boys her way—and avoiding romance quickly becomes almost impossible.",
    writtenBy: "Written by MAL Rewrite"
}]