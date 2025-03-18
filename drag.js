document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing drag and drop functionality...');
    
    // 定义评论数据
    const commentsData = {
                0: { // Round 1: Actor meeting a woman
                    'positive': [
                        { text: "KeyboardWarrior: Another pointless story, moving on.", likes: 3899 },
                        { text: "Rationa1Waif: This is why I stan him, always working hard!", likes: 3889 },
                        { text: "ViralJunkPot: His guy again? Hollywood really running out of talent.", likes: 2651 },
                        { text: "JusticeWaif: Best actor of our generation, no debates!", likes: 2789 },
                        { text: "HypeBeast: Abhh, I'm so excited for this project!", likes: 1955 },
                        { text: "FakeNewsIf: This is so boring, who even cares?", likes: 1707 },
                        { text: "Opinionat0r: Looks so good even in a casual setting!", likes: 1088 },
                        { text: "ConspiracyOMG: My oppa is so handsome!", likes: 4972 },
                        { text: "HotTakeKitty: I love a hardworking and talented man!", likes: 3293 },
                        { text: "OutrageMac: Who even watches his movies anymore?", likes: 4148 },
                        { text: "AngryTweet: Interesting at all, love seeing these stories.", likes: 1279 },
                        { text: "EchoChamber: I hope this flops, he's beyond annoying.", likes: 1317 }
                        
                    ],
                    'neutral': [
                        { text: "HypeBeast: Are they dating? Spill the tea!", likes: 273 },
                        { text: "JusticeWaif: Is this his new girlfriend?", likes: 249 },
                        { text: "ConspiracyLooks: Suspicious, I wonder what's really happening.", likes: 239 },
                        { text: "HypeBeast: Drama incoming! Let's see how this unfolds.", likes: 236 },
                        { text: "HypeBeast: This looks juicy, tell me more!", likes: 230 },
                        { text: "JusticeWaif: Anyone got more details on this situation?", likes: 223 },
                        { text: "Rationa1Waif: Why does this always happen in cafes?", likes: 185 },
                        { text: "OutrageMac: This will definitely blow up soon.", likes: 160 },
                        { text: "HypeBeast: Ugh, I don't even want to see his face.", likes: 139 },
                        { text: "HotTakeKitty: So annoying, just go away already.", likes: 167 },
                        { text: "DramaLover: I don't get why the media keeps hyping him up.", likes: 119 },
                        { text: "FakeNewsIf: Another overrated celebrity, nothing new.", likes: 92 },
                        { text: "ClickbaitIf: Doubt she's his girlfriend, probably just work-related.", likes: 67 },
                        { text: "Opinionat0r: Maybe they're just discussing business, calm down.", likes: 61 }
                    ],
                    'negative': [
                        { text: "EchoChamber: This guy is such a player. Let's see how this unfolds.", likes: 8062 },
                        { text: "EchoChamber: This guy is such a player. We love to see it!", likes: 5369 },
                        { text: "HotTakeKitty: Does anyone have a clearer angle of this?", likes: 2130 },
                        { text: "DramaLover: Why does he always get caught like this?", likes: 467 },
                        { text: "EchoChamber: Ugh, another trashy actor exposed!", likes: 860 },
                        { text: "EchoChamber: Looks suspicious, I wonder what's really happening.", likes: 664 },
                        { text: "ClickbaitIf: Scandal season has begun!", likes: 143 },
                        { text: "TruthSeek: Why do people still support him?", likes: 750 },
                        { text: "OutrageMac: Another day, another celebrity cheating story.", likes: 587 },
                        { text: "JusticeWaif: This will definitely blow up soon!", likes: 716 },
                        { text: "HypeBeast: Anyone got more details on this situation?", likes: 282 },                        
                        { text: "EchoChamber: He's such a player, always caught in scandals.", likes: 576 },
                        { text: "HypeBeast: Drama incoming! Let's see how this unfolds.", likes: 667 }
                    ]
                },
                1: { // Round 2: Restaurant charity initiative
                    'positive': [
                        { text: "EmpathyFit: A beautiful gesture, respect to the owner.", likes: 1536 },
                        { text: "JusticeNot: sure why this is a big deal?", likes: 899 },
                        { text: "Conspiracy: I think the charity window will make a great help to society!", likes: 724 },
                        { text: "HotTakeKitty: It's wonderful to see businesses giving back to the community!", likes: 542 },
                        { text: "CriticalMore: restaurants should follow this example!", likes: 723 },
                        { text: "HypeBeast: This warms my heart, small acts of kindness matter.", likes: 875 },
                        { text: "EchoChamber: This proves that business can be ethical and caring.", likes: 563 },
                        { text: "JusticeWaif: Such a simple yet impactful way to give back.", likes: 306 },
                        { text: "AngryNet: We need more like this instead of scandals.", likes: 314 },
                        { text: "Opinionat: This kind of generosity inspires others to do good.", likes: 582 },
                        { text: "Opinionat: Humanity at its best, love seeing these stories.", likes: 53 },
                        { text: "OutrageGlad: Great job by the restaurant, truly commendable.", likes: 189 },
                        { text: "HypeBeast: Okay, nice, but what's the big deal?", likes: 890 }
                    ],
                    'neutral': [
                        { text: "Imprejudiced: They said they're closing it, or is this just a rumor?", likes: 3675 },
                        { text: "Critical: Is this real? Why does it seem like the charity window is still working?", likes: 2966 },
                        { text: "Imprejudiced: Something feels off, are they really closing it down?", likes: 1339 },
                        { text: "JusticeNot: I mean more proof before believing this.", likes: 3038 },
                        { text: "JusticeNot: don't I want to buy his face.", likes: 1639 }
                    ],
                    'unprejudiced': [
                        { text: "ViralJunk: People like him should be banned from working in delivery!", likes: 947 },
                        { text: "JusticeNot: This should be fired immediately, no excuse for this behavior.", likes: 916 },
                        { text: "AngryNet: Why does he feel good, he does it really matter?", likes: 129 },
                        { text: "Clickbait: The delivery man hit her and ran away, absolutely terrible!", likes: 768 },
                        { text: "EmpathyTypical: disgusting behavior, he should be punished!", likes: 491 },
                        { text: "ViralJunk: People like him deserve to lose his job!", likes: 594 },
                        { text: "HotTakeKitty: How does the elderly get out in the first place?", likes: 172 },
                        { text: "MedioWav: This is hit-and-run, plain and simple!", likes: 913 },
                        { text: "AngryNet: I saw what he did, and still who cares!", likes: 734 },
                        { text: "OutrageMac: No excuse for leaving an injured old woman behind.", likes: 498 }
                        
                    ],
                    'negative': [
                        { text: "JusticeWaif: What can a restaurant treat people in need like this? Disgusting.", likes: 7146 },
                        { text: "OutrageMac: They should be fired immediately, no excuse for this behavior.", likes: 6535 },
                        { text: "EchoChamber: The staff should be trained better, this is unacceptable.", likes: 6125 },
                        { text: "Imprejudiced: They said they're closing it, or is this just a marketing move?", likes: 4187 },
                        { text: "BiasView: Worst customer service ever!", likes: 4801 },
                        { text: "JusticeNot: Seems like a stunt to get attention, let's see what happens next.", likes: 4276 },
                        { text: "Critical: IT is this real? Why does it seem like the charity window is still working?", likes: 2866 },
                        { text: "JusticeWaif: I need more proof before believing this.", likes: 3038 },
                        { text: "HypeBeast: Why is there so much conflicting information?", likes: 3475 },
                        { text: "OutrageMac: Feels like they're just doing this for publicity.", likes: 1598 },
                        { text: "Sensation: Are they actually stopping it, or is this just a rumor?", likes: 3672 },
                        { text: "AngryNet: If they don't want to help, why even start the charity window?", likes: 1867 },
                        { text: "HotTakeKitty: Treating people like this is disgusting!", likes: 3672 },
                        { text: "JusticeWaif: I would never go to a place like this, they clearly don't care.", likes: 1300 },
                        { text: "BiasView: Just another case of fake kindness for the cameras.", likes: 384 },
                        { text: "EmpathyFit: Businesses like this are so hypocritical!", likes: 515 },
                        { text: "HypeBeast: It instead of pretending.", likes: 750 },
                        { text: "NegativeClip: This is just shameful behavior from the staff!", likes: 4431 },
                        { text: "HotTakeKitty: Worst customer service ever!", likes: 8135 },
                        { text: "Clickbait: I would never go to a place like this, they clearly don't care.", likes: 2123 },
                        { text: "MediaJunk: Just another case of fake kindness for the cameras.", likes: 636 },
                        { text: "OutrageMac: If they don't want to serve charity meals, they should just say so.", likes: 6054 },
                        { text: "BiasView: This is just shameful behavior from the staff!", likes: 6767 },
                        { text: "JusticeNot: Heartless people, they shouldn't even be working in customer service.", likes: 741 },
                        { text: "HotTakeKitty: Absolute disgrace, I hope this business fails!", likes: 6240 },
                        { text: "EchoChamber: Are we sure this isn't just a misunderstanding?", likes: 3744 },
                        { text: "Conspiracy: Not convinced this actually happened the way it's being reported.", likes: 2692 }
                    ]
                },
                2: { // Round 3: Delivery man incident
                    'positive': [
                        { text: "Conspiracy: This delivery guy is so kind-hearted!", likes: 1093 },
                        { text: "EchoChamber: We need more people like him in the world!", likes: 4302 },
                        { text: "AngryNet: True hero, not all heroes wear a kind man.", likes: 856 },
                        { text: "EchoChamber: Respect for this hardworking and kind man!", likes: 545 },
                        { text: "ViralJunk: This made my day, faith in humanity restored!", likes: 581 },
                        { text: "DramaLover: He didn't have to do that, but he chose kindness!", likes: 476 },
                        { text: "Rationa1O: We should appreciate workers like him more!", likes: 420 },
                        { text: "Opinionat: A true role model for society!", likes: 111 },
                        { text: "EmpathyFit: Good people still exist, and he's proof of that!", likes: 1269 },
                        { text: "Opinionat: Who is this elderly lady?", likes: 736 },
                        { text: "EchoChamber: Is there any background on the old woman?", likes: 756 },
                        { text: "TruthSeek: Why was she alone on the street?", likes: 655 },
                        { text: "BiasView: I wonder what happened to the elderly woman after this.", likes: 120 },
                        { text: "EmpathyFit: This news is so boring, anything else happening?", likes: 362 },
                        { text: "FakeNews: Not really interested in this kind of story.", likes: 93 },
                        { text: "OutrageMac: This feel-good piece, but does it really matter?", likes: 933 },
                        { text: "TruthSeek: Alright, cool, now let's talk about something interesting.", likes: 186 }
                    ],
                    'neutral': [
                        { text: "ViralJunk: This news is so boring, anything else happening?", likes: 4206 },
                        { text: "AngryNet: True hero, not all heroes wear a kind man.", likes: 3133 },
                        { text: "Conspiracy: Good people still exist, and he's proof of that!", likes: 2397 },
                        { text: "HypeBeast: The media always manipulates these stories.", likes: 1752 },
                        { text: "HypeBeast: Who is this elderly lady?", likes: 1779 },
                        { text: "JusticeWaif: We need more people like him in the world!", likes: 609 },
                        { text: "Rationa1O: Is there any background on the old woman?", likes: 217 },
                        { text: "MediaWav: Why was she alone on the street?", likes: 205 },
                        { text: "Sensation: I wonder what happened to the elderly woman after this.", likes: 649 },
                        { text: "Rationa1O: Are sure the delivery guy didn't hit her?", likes: 282 },
                        { text: "Keyboard: This looks staged, something feels off.", likes: 432 },
                        { text: "HotTakeKitty: Why is everyone assuming he's innocent?", likes: 736 },  
                        { text: "AngryNet: Another feel-good piece, but does it really matter?", likes: 429 },
                        { text: "Keyboard: Alright, cool, now let's talk about something interesting.", likes: 768 },
                        { text: "Keyboard: Alright, cool, now let's talk about something interesting.", likes: 768 },
                        { text: "Clickbait: The delivery man hit her and ran, he should be punished!", likes: 827 }
                    ],
                    'negative': [
                        { text: "ViralJunk: People like him should be banned from working in delivery services.", likes: 9447 },
                        { text: "EmpathyFit: This is disgusting behavior, he should be punished!", likes: 906 },
                        { text: "Opinionat: How can someone just leave an elderly person like that?", likes: 491 },
                        { text: "Clickbait: This guy deserves to lose his job!", likes: 594 },
                        { text: "FakeNews: How heartless, do you have to be to do this?", likes: 7633 },
                        { text: "MediaWav: This is hit-and-run, plain and simple!", likes: 9943 },
                        { text: "AngryNet: The worst kind of people are those who run from responsibility.", likes: 674 },
                        { text: "EmpathyFit: I saw what he did, and still chose to leave!", likes: 875 },
                        { text: "OutrageMac: No excuse for leaving an injured old woman behind.", likes: 1752 },
                        { text: "Rationa1O: This might not be what it looks like, let's wait for more info.", likes: 4049 },
                        { text: "JusticeWaif: Are sure the delivery guy even hit her?", likes: 552 },
                        { text: "HotTakeKitty: What if she fell before he even got there?", likes: 346 },
                        { text: "MediaWav: Not jumping to conclusions, but the video isn't clear.", likes: 229 },
                        { text: "EchoChamber: Why assume the worst immediately? We need more facts.", likes: 1709 }
                    ],
                    'unprejudiced': [
                        { text: "EchoChamber: Alright, cool, now let's talk about something interesting.", likes: 4206 },
                        { text: "Clickbait: This delivery guy is so kind-hearted!", likes: 3133 },
                        { text: "EmpathyFit: We need more people like him in the world!", likes: 609 },
                        { text: "FakeNews: True hero, not all heroes wear caps!", likes: 2397 },
                        { text: "Opinionat: Good people still exist, and he's proof of that!", likes: 2397 },
                        { text: "ViralJunk: Why was she alone on the street?", likes: 1779 },
                        { text: "MediaWav: I wonder what happened to the elderly woman after this.", likes: 217 },
                        { text: "AngryNet: Are sure the delivery guy didn't hit her?", likes: 205 },
                        { text: "OutrageMac: Why is everyone assuming he's innocent?", likes: 649 },
                        { text: "Rationa1O: The media always manipulates these stories.", likes: 282 },
                        { text: "HotTakeKitty: This looks staged, something feels off.", likes: 432 },
                        { text: "JusticeWaif: This news is so boring, anything else happening?", likes: 736 },
                        { text: "Clickbait: Another feel-good piece, but does it really matter?", likes: 1752 }
                        
                    ]
                },
                3: { // Round 4: Nursing home safety
                    'positive': [
                        { text: "OutrageMac: Glad to see people taking better care of the elderly.", likes: 4234 },
                        { text: "HotTakeKitty: This news is too boring, moving on.", likes: 989 },
                        { text: "Rationa1O: Not really interested in elderly care news.", likes: 899 },
                        { text: "HypeBeast: This will make sure the elderly are safe, great move forward!", likes: 705 },
                        { text: "Critical: Strengthening nursing home management is a good step forward!", likes: 705 },
                        { text: "HotTakeKitty: Finally, some action to protect seniors!", likes: 189 },
                        { text: "HypeBeast: More nursing homes should follow this example.", likes: 494 },
                        { text: "EmpathyFit: This is how elderly care should be handled!", likes: 796 },
                        { text: "HypeBeast: Great initiative, ensuring the elderly are well looked after.", likes: 171 },
                        { text: "Critical: Happy to see stricter measures being taken!", likes: 451 },
                        { text: "JusticeWaif: Respect to the staff for prioritizing safety!", likes: 519 },
                        { text: "Keyboard: This is exactly what we need in all nursing homes!", likes: 491 },
                        { text: "Clickbait: But can we be sure there are no other issues?", likes: 1748 },
                        { text: "JusticeWaif: Is there actual proof that conditions have improved?", likes: 222 },
                        { text: "Sensation: I still have doubts, hope they keep monitoring.", likes: 165 },
                        { text: "EmpathyFit: I will know doubts, hope they show improved!", likes: 67 },
                        { text: "Rationa1O: Will they really maintain these changes, or is it temporary?", likes: 64 },
                       
                        { text: "HypeBeast: Another slow news day, I guess.", likes: 547 },
                        { text: "EchoChamber: Can we get some real news?", likes: 335 }
                    ],
                    'negative': [
                        { text: "ViralJunk: Irresponsible!", likes: 8001 },
                        { text: "Keyboard: Elderly people deserve better than this kind of treatment!", likes: 769 },
                        { text: "EchoChamber: Elderly places only care about money, not the people living there!", likes: 7427 },
                        { text: "HypeBeast: Something about this feels off, is there another side to the story?", likes: 4944 },
                        { text: "ViralJunk: How do we know this news is even real?", likes: 5822 },
                        { text: "BiasView: Could this be exaggerated to stir public outrage?", likes: 3006 },
                        { text: "Conspiracy: There's the actual evidence? I need more facts!", likes: 4727 },
                        { text: "Clickbait: Are we sure this isn't just twisting the story?", likes: 1399 },
                        { text: "HypeBeast: The staff clearly don't care about the elderly's safety!", likes: 874 },
                        { text: "ViralJunk: Another case of mistreatment, when will they learn?", likes: 719 },
                        { text: "TruthSeek: Nursing homes like this should be strictly monitored!", likes: 638 },
                        { text: "Keyboard: Leaving elderly people unattended like this is unforgivable!", likes: 2841 },
                        { text: "Critical: This is why families don't trust nursing homes anymore!", likes: 3641 },
                        { text: "Opinionat: Total incompetence, someone needs to be held accountable!", likes: 2098 },
                        { text: "Conspiracy: What if something worse had happened? Disgraceful!", likes: 2594 },
                        { text: "DramaLover: The management is completely failing at their job!", likes: 4723 },
                        { text: "Sensation: How many times does this need to happen before action is taken?", likes: 623 }
   
                    ],
                    'unprejudiced': [
                        { text: "Keyboard: This will make sure the elderly are safe, great move forward!", likes: 72 },
                        { text: "Critical: Strengthening nursing home management is a good step forward!", likes: 705 },
                        { text: "Clickbait: Glad to see people taking better care of the elderly!", likes: 4234 },
                        { text: "Rationa1O: More nursing homes should follow this example!", likes: 494 },
                        { text: "OutrageMac: Great initiative, ensuring the elderly are well looked after!", likes: 171 },
                        { text: "JusticeWaif: Happy to see stricter measures being taken!", likes: 451 },
                        { text: "HotTakeKitty: Respect to the staff for prioritizing safety!", likes: 519 },
                        { text: "Clickbait: This is exactly what we need in all nursing homes!", likes: 491 },
                        { text: "EchoChamber: Is there actual proof that conditions have improved?", likes: 1748 },
                        { text: "HypeBeast: I still have doubts, hope they keep monitoring!", likes: 222 },
                        { text: "ViralJunk: Will they really maintain these changes, or is it temporary?", likes: 165 },
                        { text: "MediaWav: Not really interested in elderly care news!", likes: 67 },
                        { text: "AngryNet: Another slow news day, I guess!", likes: 989 },
                        { text: "OutrageMac: Can we get some real news?", likes: 899 }
                    ]
                },
                4: { // Round 5: Politician and elder care improvements
                    'positive': [
                        { text: "Opinionat: I fully support improving nursing home policies and services!", likes: 217 },
                        { text: "BiasView: Hope to see more elderly care institutions following this example!", likes: 909 },
                        { text: "HotTakeKitty: Finally, some great step towards better elder care!", likes: 242 },
                        { text: "Clickbait: Elderly people deserve the best care possible, happy to see it!", likes: 2820 },
                        { text: "OutrageMac: We should always support reforms that improve quality of life for seniors!", likes: 141 },
                        { text: "ViralJunk: This is exactly the kind of change we need in senior care!", likes: 761 },
                        { text: "Keyboard: Respect to those working on improving elderly care services!", likes: 605 },
                        { text: "EchoChamber: But do we know this is really happening?", likes: 172 },
                        { text: "OutrageMac: Let's wait and see if this actually leads to real change.", likes: 387 },
                        { text: "BiasView: This is just PR, or are they really making a difference?", likes: 704 },
                        { text: "Critical: I need more solid evidence before believing this.", likes: 795 },
                        { text: "HypeBeast: Can we get some actual interesting news?", likes: 862 },
                        { text: "Rationa1O: Not the kind of thing I want to read about.", likes: 882 },
                        { text: "BiasView: Slow news day, I guess.", likes: 152 }
                    ],
                    'neutral': [
                        { text: "Critical: This supports better policies for elderly care facilities!", likes: 2377 },
                        { text: "OutrageMac: They truly improve services and not just empty promises.", likes: 4392 },
                        { text: "ViralJunk: A positive step for senior care, let's hope it lasts.", likes: 556 },
                        { text: "Rationa1O: Improving elderly care should always be a priority!", likes: 3960 },
                        { text: "Keyboard: But do we know that conditions have really improved?", likes: 1503 },
                        { text: "MediaWav: Sounds nice, but I wonder if the problem still exists.", likes: 1423 },
                        { text: "OutrageMac: Feels like they're just saying this to avoid criticism.", likes: 2061 },
                        { text: "FakeNews: What do the actual residents say about these improvements?", likes: 1800 },
                        { text: "Keyboard: I see good on paper, but reality might be different.", likes: 4878 },
                        { text: "HotTakeKitty: This is so boring, who even cares?", likes: 691 },
                        { text: "Conspiracy: Not really the kind of thing I'm interested in.", likes: 923 },
                        { text: "OutrageMac: Another overhyped piece about nothing.", likes: 312 },
                        { text: "JusticeWaif: Can we get some actual relevant news instead?", likes: 827 }
                    ],
                    'negative': [
                        { text: "Sensation: Another scam to cover up the real issues!", likes: 8800 },
                        { text: "Rationa1O: Can't believe people are still falling for these lies!", likes: 7999 },
                        { text: "EmpathyFit: Hope people wake up and see this deception!", likes: 7942 },
                        { text: "DramaLover: Another corrupt politician making fake promises!", likes: 6258 },
                        { text: "FakeNews: They only care about votes, not real change!", likes: 5183 },
                        { text: "Clickbait: The nursing homes are still full of problems!", likes: 6187 },
                        { text: "Conspiracy: They may have lied to us already!", likes: 7912 },
                        { text: "AngryNet: But do we know this is even true? This is fiction!", likes: 4589 },
                        { text: "EmpathyFit: Sounds fake, they say this every election!", likes: 3670 },
                        { text: "Critical: These politicians never actually care about the elderly!", likes: 4014 },
                        { text: "AngryNet: Why are we even listening to this nonsense?", likes: 186 },
                        { text: "Conspiracy: The whole system is broken, nothing will change!", likes: 1742 },
                        { text: "Clickbait: I'll believe it when I see actual change happening.", likes: 1010 },
                        { text: "FakeNews: Are we sure this isn't just staged for the media?", likes: 3558 }
                    ]
                }
            };
    // Get all thumbnails and editing area clips
    const thumbnails = document.querySelectorAll('.thumbnail');
    const clipSlots = document.querySelectorAll('.clip-slot');
    const editingArea = document.querySelector('.editing-area');
    const clipsContainer = document.querySelector('.clips');
    const reviewingArea = document.querySelector('.reviewing-area');
    const exportButton = document.querySelector('.export-button');
    const previewArea = document.querySelector('.preview-area');
    const backButton = document.querySelector('.back-button');
    const newPostButton = document.querySelector('.new-post-button');

    // Track used thumbnails
    const usedThumbnails = new Set();
    
    // Track current round and funds
    let currentRound = 0;
    let totalFunds = 0;
    
    // 跟踪是否已经开始游戏（是否已经尝试过拖动）
    let gameStarted = false;
    
    // Enable New Post button on initialization
    if (newPostButton) {
        newPostButton.style.opacity = '1';
        newPostButton.style.pointerEvents = 'auto';
        console.log('New Post button enabled');
    }
    
    // Track video sequences for each round
    const roundSequences = [];
    
    // Define video materials for each round
    const roundVideos = {
        0: ['r1c1.mp4', 'r1c2.mp4', 'r1c3.mp4', 'r1c4.mp4'],
        1: ['r2c1.mp4', 'r2c2.mp4', 'r2c3.mp4'],
        2: ['r3c1.mp4', 'r3c2.mp4', 'r3c3.mp4', 'r3c4.mp4'],
        3: ['r4c1.mp4', 'r4c2.mp4', 'r4c3.mp4'],
        4: ['r5c1.mp4', 'r5c2.mp4', 'r5c3.mp4', 'r5c4.mp4']
    };
    
    // Define video descriptions for each round
    const videoDescriptions = {
        0: {
            'r1c1.mp4': 'The actor is having a casual conversation with a lady',
            'r1c2.mp4': 'The lady suddenly spills her coffee',
            'r1c3.mp4': 'The lady starts crying',
            'r1c4.mp4': 'The actor comforts the lady'
        },
        1: {
            'r2c1.mp4': 'The worker asks about the charity meal program',
            'r2c2.mp4': 'The waiter hands a note to the worker',
            'r2c3.mp4': 'The waiter points outside the restaurant'
        },
        2: {
            'r3c1.mp4': 'The elderly person lies motionless on the ground',
            'r3c2.mp4': 'The delivery man brakes suddenly causing the motorcycle to fall',
            'r3c3.mp4': 'Someone reaches out to help the elderly person up',
            'r3c4.mp4': 'The delivery man rides away'
        },
        3: {
            'r4c1.mp4': 'The elderly slowly pushes a walker and exits the nursing home gate.',
            'r4c2.mp4': 'Noticing this, the caregiver gently holds the elderly\'s arm and leads them back.',
            'r4c3.mp4': 'The caregiver asks kindly, gesturing for the elderly to return and rest.'
        },
        4: {
            'r5c1.mp4': 'The candidate enters the nursing home, shaking hands with the staff.',
            'r5c2.mp4': 'The candidate engages in conversation with several elderly residents.',
            'r5c3.mp4': 'In the corner of the hallway, an elderly person sits alone.',
            'r5c4.mp4': 'The candidate speaks: "The improvement of nursing homes will not stop. We will continue our efforts."'
        }
    };
    
    // Define round titles
    const roundTitles = {
        0: "Round1: Actor's scandal",
        1: "Round2: Public welfare illusion",
        2: "Round3: Hospital Incident",
        3: "Round4: Nursing Home Care",
        4: "Round5: Political Visit"
    };

    // Define round facts
    const roundFacts = {
        0: "Actor discusses movie deal with new agent at cafe",
        1: "The restaurant has set up a new \"Charity Window\" where people in need can receive free meals with their meal tickets.",
        2: "The delivery man witnesses an elderly person falling and tries to react.",
        3: "The elderly person who was knocked down had gone missing from a nursing home. He attempted to leave the nursing home once again, and the caregiver tried to bring him back.",
        4: "The mayoral candidate and chairman of a nursing home corporation visits a nursing home as part of his campaign."
    };

    // Define views mapping
    const viewsMapping = {
        // Round 1
        0: {
        '1234': '100',
        '134': '100',
        '1342': '999+',
        '1324': '999+',
        '123': '999+',
        '132': '999+',
        '1432': '9999+',
        '1423': '9999+',
        '143': '9999+',
            '1243': '9999+',
        '124': '9999+',
            '142': '9999+'
        },
        
        // 第二轮
        1: {
        '123': '100',
        '213': '100',
        '231': '100',
        '12': '100',
            '23': '100',
        '13': '9999+',
        '132': '9999+',
            '32': '9999+',
        '312': '100',
        '321': '100',
        '31': '100',
        '21': '100'
        },
        
        // 第三轮
        2: {
            '1234': '100',
            '1243': '999+',
            '2134': '999+',
            '2143': '9999+',
            '2413': '9999+',
            '1324': '100',
            '1342': '100',
            '1423': '100',
            '1432': '100',
            '2314': '100',
            '2341': '100',
            '2431': '100',
            '3124': '100',
            '3142': '100',
            '3214': '100',
            '3241': '100',
            '3412': '100',
            '3421': '100',
            '4123': '100',
            '4132': '100',
            '4213': '100',
            '4231': '100',
            '4312': '100',
            '4321': '100'
        },
        
        // 第四轮
        3: {
            '123': '100',
            '132': '100',
            '312': '100',
            '12': '100',
            '13': '100',
            '231': '9999+',
            '321': '9999+',
            '31': '9999+',
            '21': '9999+',
            '213': '100',
            '23': '100',
            '32': '100'
        },
        
        // 第五轮
        4: {
            '1243': '100',
            '1234': '999+',
            '1342': '9999+',
            '1432': '9999+',
            '1423': '9999+',
            '1324': '9999+'
        }
    };

    // 定义资金映射
    const fundsMapping = {
        // 第一轮
        0: {
            '1234': 1000,
            '134': 1000,
            '1342': 2000,
            '1324': 2000,
            '123': 2000,
            '132': 2000,
            '1432': 4000,
            '1423': 4000,
            '143': 4000,
            '1243': 4000,
            '124': 4000,
            '142': 4000
        },
        
        // 第二轮
        1: {
        '123': 1000,
        '213': 1000,
        '231': 1000,
        '12': 1000,
            '23': 1000,
        '13': 4000,
        '132': 4000,
            '32': 4000,
        '312': 100,
        '321': 100,
        '31': 100,
        '21': 100
        },
        
        // 第三轮
        2: {
            '1234': 1000,
            '1243': 2000,
            '2134': 2000,
            '2143': 4000,
            '2413': 4000,
            '1324': 100,
            '1342': 100,
            '1423': 100,
            '1432': 100,
            '2314': 100,
            '2341': 100,
            '2431': 100,
            '3124': 100,
            '3142': 100,
            '3214': 100,
            '3241': 100,
            '3412': 100,
            '3421': 100,
            '4123': 100,
            '4132': 100,
            '4213': 100,
            '4231': 100,
            '4312': 100,
            '4321': 100
        },
        
        // 第四轮
        3: {
            '123': 1000,
            '132': 1000,
            '312': 1000,
            '12': 1000,
            '13': 1000,
            '231': 4000,
            '321': 4000,
            '31': 4000,
            '21': 4000,
            '213': 100,
            '23': 100,
            '32': 100
        },
        
        // 第五轮
        4: {
            '1243': 1000,
            '1234': 2000,
            '1342': 4000,
            '1432': 4000,
            '1423': 4000,
            '1324': 4000
        }
    };

    // 定义视频序列对应的标题
    const clipTitles = {
        // 第一轮
        0: {
        '1234': {
                text: '"New agent exposure, actor suspected to prepare a new movie!"',
            type: 'positive'
        },
        '134': {
                text: '"New agent exposure, actor suspected to prepare a new movie!"',
            type: 'positive'
        },
        '1342': {
                text: '"Who is the Strange Woman? Crying after spilling coffee"',
                type: 'neutral'
        },
        '1324': {
                text: '"Who is the Strange Woman? Crying after spilling coffee"',
                type: 'neutral'
        },
        '123': {
                text: '"Who is the Strange Woman? Crying after spilling coffee"',
                type: 'neutral'
        },
        '132': {
                text: '"Who is the Strange Woman? Crying after spilling coffee"',
                type: 'neutral'
        },
        '1432': {
                text: '"Male star and mysterious woman intimate interaction, suddenly threw coffee?"',
                type: 'negative'
        },
        '1423': {
                text: '"Male star and mysterious woman intimate interaction, suddenly threw coffee?"',
                type: 'negative'
        },
        '143': {
                text: '"Male star and mysterious woman intimate interaction, suddenly threw coffee?"',
            type: 'negative'
        },
            '1243': {
                text: '"Male star and mysterious woman intimate interaction, suddenly threw coffee?"',
            type: 'negative'
        },
            '124': {
                text: '"Male star and mysterious woman intimate interaction"',
            type: 'negative'
        },
            '142': {
                text: '"Male star and mysterious woman intimate interaction"',
            type: 'negative'
            }
        },
        
        // 第二轮
        1: {
        '123': {
            text: '"The restaurant fulfills its public welfare commitment, and the charity window warms people\'s hearts!"',
            type: 'positive'
        },
        '213': {
            text: '"The restaurant fulfills its public welfare commitment, and the charity window warms people\'s hearts!"',
            type: 'positive'
        },
        '231': {
            text: '"The restaurant fulfills its public welfare commitment, and the charity window warms people\'s hearts!"',
            type: 'positive'
        },
        '12': {
            text: '"The restaurant fulfills its public welfare commitment, and the charity window warms people\'s hearts!"',
            type: 'positive'
        },
            '23': {
            text: '"The restaurant fulfills its public welfare commitment, and the charity window warms people\'s hearts!"',
            type: 'positive'
        },
        '13': {
            text: '"The worker inquired about the charity meal but was unexpectedly driven away by the waiter?"',
            type: 'negative'
        },
        '132': {
            text: '"The worker inquired about the charity meal but was unexpectedly driven away by the waiter?"',
            type: 'negative'
        },
            '32': {
            text: '"The worker inquired about the charity meal but was unexpectedly driven away by the waiter?"',
            type: 'negative'
        },
        '312': {
            text: '"The restaurant fulfills its public welfare commitment, and the charity window warms people\'s hearts!"',
            type: 'neutral'
        },
        '321': {
            text: '"The restaurant fulfills its public welfare commitment, and the charity window warms people\'s hearts!"',
            type: 'neutral'
        },
        '31': {
            text: '"The restaurant fulfills its public welfare commitment, and the charity window warms people\'s hearts!"',
            type: 'neutral'
        },
        '21': {
            text: '"The restaurant fulfills its public welfare commitment, and the charity window warms people\'s hearts!"',
            type: 'neutral'
            }
        },
        
        // 第三轮
        2: {
            '1234': {
                text: '"Delivery man rushes to aid fallen elderly, good deed earns praise from netizens!"',
                type: 'positive'
            },
            '1243': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '2134': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '2143': {
                text: '"Delivery man flees after hitting elderly? Netizens outraged: \'Totally irresponsible!\'"',
                type: 'negative'
            },
            '2413': {
                text: '"Delivery man flees after hitting elderly? Netizens outraged: \'Totally irresponsible!\'"',
                type: 'negative'
            },
            '1324': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '1342': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '1423': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '1432': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '2314': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '2341': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '2431': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '3124': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '3142': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '3214': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '3241': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '3412': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '3421': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '4123': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '4132': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '4213': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '4231': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '4312': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            },
            '4321': {
                text: '"Accident or mishap? Delivery man knocking over elderly sparks heated debate!"',
                type: 'neutral'
            }
        },
        
        // 第四轮
        3: {
            '123': {
                text: '"The nursing home strengthens its management to ensure the safety of every elderly resident!"',
                type: 'positive'
            },
            '132': {
                text: '"The nursing home strengthens its management to ensure the safety of every elderly resident!"',
                type: 'positive'
            },
            '312': {
                text: '"The nursing home strengthens its management to ensure the safety of every elderly resident!"',
                type: 'positive'
            },
            '12': {
                text: '"The nursing home strengthens its management to ensure the safety of every elderly resident!"',
                type: 'positive'
            },
            '13': {
                text: '"The nursing home strengthens its management to ensure the safety of every elderly resident!"',
                type: 'positive'
            },
            '231': {
                text: '"The nursing home caregiver fails in their duty again as the elderly person walks alone toward the gate!"',
                type: 'negative'
            },
            '321': {
                text: '"The nursing home caregiver fails in their duty again as the elderly person walks alone toward the gate!"',
                type: 'negative'
            },
            '31': {
                text: '"The nursing home caregiver fails in their duty again as the elderly person walks alone toward the gate!"',
                type: 'negative'
            },
            '21': {
                text: '"The nursing home caregiver fails in their duty again as the elderly person walks alone toward the gate!"',
                type: 'negative'
            },
            '213': {
                text: '"The nursing home strengthens its management to ensure the safety of every elderly resident!"',
                type: 'neutral'
            },
            '23': {
                text: '"The nursing home strengthens its management to ensure the safety of every elderly resident!"',
                type: 'neutral'
            },
            '32': {
                text: '"The nursing home strengthens its management to ensure the safety of every elderly resident!"',
                type: 'neutral'
            }
        },
        
        // 第五轮
        4: {
            '1243': {
                text: '"Candidate Delivers on Promises, Nursing Home Shows Real Improvement"',
                type: 'positive'
            },
            '1234': {
                text: '"Nursing Home Progress, But Challenges Remain"',
                type: 'neutral'
            },
            '1342': {
                text: '"Shocking Footage: Elderly Left Uncared for While Candidate Speaks"',
                type: 'negative'
            },
            '1432': {
                text: '"Shocking Footage: Elderly Left Uncared for While Candidate Speaks"',
                type: 'negative'
            },
            '1423': {
                text: '"Shocking Footage: Elderly Left Uncared for While Candidate Speaks"',
                type: 'negative'
            },
            '1324': {
                text: '"Shocking Footage: Elderly Left Uncared for While Candidate Speaks"',
                type: 'negative'
            }
        }
    };

    // 确保找到所有必要的元素
    if (thumbnails.length > 0) {
        console.log(`Found ${thumbnails.length} thumbnails`);
    } else {
        console.error('No thumbnail elements found');
    }
    
    if (clipSlots.length > 0) {
        console.log(`Found ${clipSlots.length} clip slots`);
    } else {
        console.error('No clip-slot elements found');
    }
    
    if (!editingArea) {
        console.error('未找到editing-area元素');
        return;
    }

    if (!reviewingArea) {
        console.error('未找到reviewing-area元素');
        return;
    }

    // 检查当前的视频顺序并显示对应的标题
    const checkClipSequence = () => {
        // 获取所有已填充的clip slots
        const filledSlots = Array.from(clipSlots).filter(slot => slot.classList.contains('filled') && !slot.classList.contains('disabled'));
        console.log(`Found ${filledSlots.length} filled slots`);
        
        // 计算需要填充的slot数量（不包括被禁用的）
        const enabledSlots = Array.from(clipSlots).filter(slot => !slot.classList.contains('disabled'));
        const requiredFilledCount = enabledSlots.length;
        console.log(`Required filled count: ${requiredFilledCount}, Enabled slots: ${enabledSlots.length}`);
        
        if (filledSlots.length >= requiredFilledCount) {
            // 获取当前的视频顺序
            const sequence = filledSlots.map(slot => {
                const video = slot.querySelector('video');
                if (!video || !video.dataset.thumbnailId) return null;
                
                // 从thumbnailId中提取数字部分并加1
                    const thumbnailNum = video.dataset.thumbnailId.split('-')[1];
                const sequenceNum = (parseInt(thumbnailNum) + 1).toString();
                console.log(`Slot video ID: ${video.dataset.thumbnailId}, Sequence number: ${sequenceNum}`);
                return sequenceNum;
            }).filter(id => id !== null).join('');
            
            console.log('Current video sequence:', sequence);
            console.log('Available titles for current round:', Object.keys(clipTitles[currentRound]));
            
            // 检查是否有匹配的标题
            if (clipTitles[currentRound][sequence]) {
                console.log(`Found matching title: ${clipTitles[currentRound][sequence].text}`);
                showClipTitle(clipTitles[currentRound][sequence], sequence);
            } else {
                // 如果没有精确匹配，清除标题
                console.log(`No matching title found for sequence: ${sequence}`);
                clearClipTitle();
            }
        } else {
            // 如果没有足够的clips，清除标题
            console.log(`Not enough clips filled: ${filledSlots.length}/${requiredFilledCount}`);
            clearClipTitle();
        }
    };
    
    // 显示剪辑标题
    const showClipTitle = (titleData, sequence) => {
        // 清除现有标题
        clearClipTitle();
        
        // 创建标题元素
        const titleElement = document.createElement('div');
        titleElement.className = `clip-title ${titleData.type}`;
        
        // 获取浏览量数据
        const views = viewsMapping[currentRound][sequence] || '';
        
        // 显示type和浏览量
        titleElement.textContent = `${titleData.type.charAt(0).toUpperCase() + titleData.type.slice(1)} Editing\nViews: ${views}`;
        
        // 添加到reviewing area
        reviewingArea.appendChild(titleElement);
        
        // 显示评论
        showComments(currentRound, titleData.type);
        console.log(`Showing comments: Round=${currentRound}, Type=${titleData.type}`);
    };
    
    // 显示电话弹窗
    const showPhoneCallModal = () => {
        // 创建模态框容器
        const modalContainer = document.createElement('div');
        modalContainer.style.position = 'fixed';
        modalContainer.style.top = '0';
        modalContainer.style.left = '0';
        modalContainer.style.width = '100%';
        modalContainer.style.height = '100%';
        modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        modalContainer.style.display = 'flex';
        modalContainer.style.justifyContent = 'center';
        modalContainer.style.alignItems = 'center';
        modalContainer.style.zIndex = '9999';
        
        // 创建模态框内容
        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.padding = '30px 50px';
        modalContent.style.borderRadius = '10px';
        modalContent.style.textAlign = 'center';
        modalContent.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        modalContent.style.maxWidth = '80%';
        
        // 添加文本
        const text = document.createElement('p');
        text.textContent = 'Your mother is calling...';
        text.style.fontSize = '24px';
        text.style.marginBottom = '20px';
        text.style.color = '#333';
        
        // 添加头像图片
        const headImage = document.createElement('img');
        headImage.src = 'head.png'; // 使用head图片文件
        headImage.alt = 'Your mother';
        headImage.style.width = '120px'; // 设置合适的宽度
        headImage.style.height = '120px'; // 设置合适的高度
        headImage.style.borderRadius = '50%'; // 圆形头像
        headImage.style.objectFit = 'cover'; // 确保图片适当填充
        headImage.style.marginBottom = '20px'; // 与按钮保持一定距离
        headImage.style.border = '3px solid rgb(205, 61, 190)'; // 添加边框
        headImage.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'; // 添加阴影效果
        
        // 创建电话按钮
        const phoneButton = document.createElement('button');
        phoneButton.innerHTML = '&#128222; pick up';
        phoneButton.style.padding = '15px 30px';
        phoneButton.style.fontSize = '20px';
        phoneButton.style.backgroundColor = '#4CAF50';
        phoneButton.style.color = '#fff';
        phoneButton.style.border = 'none';
        phoneButton.style.borderRadius = '50px';
        phoneButton.style.cursor = 'pointer';
        phoneButton.style.transition = 'background-color 0.3s';
        phoneButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        phoneButton.style.display = 'block';
        phoneButton.style.margin = '0 auto';
        phoneButton.style.position = 'relative';
        
        // 添加振动动画
        const vibrateAnimation = () => {
            let isLeft = true;
            let vibrationCount = 0;
            const maxVibrations = 20; // 振动次数
            const vibrationInterval = setInterval(() => {
                if (vibrationCount >= maxVibrations) {
                    clearInterval(vibrationInterval);
                    phoneButton.style.transform = 'translateX(0)';
                    return;
                }
                
                phoneButton.style.transform = isLeft ? 'translateX(-5px)' : 'translateX(5px)';
                isLeft = !isLeft;
                vibrationCount++;
            }, 100);
        };
        
        // 开始振动动画
        vibrateAnimation();
        // 每3秒重复振动一次
        const repeatVibration = setInterval(vibrateAnimation, 3000);
        
        // 添加悬停效果
        phoneButton.onmouseover = () => {
            phoneButton.style.backgroundColor = '#45a049';
        };
        phoneButton.onmouseout = () => {
            phoneButton.style.backgroundColor = '#4CAF50';
        };
        
        // 添加按钮点击事件
        phoneButton.addEventListener('click', () => {
            // 停止振动动画
            clearInterval(repeatVibration);
            // 播放humeAI音频
            playHumeAIAudio(modalContainer);
        });
        
        // 组装模态框
        modalContent.appendChild(text);
        modalContent.appendChild(headImage); // 添加头像图片
        modalContent.appendChild(phoneButton);
        modalContainer.appendChild(modalContent);
        
        // 添加到页面
        document.body.appendChild(modalContainer);
    };
    
    // 播放humeAI音频
    const playHumeAIAudio = (modalContainer) => {
        // 更新模态框内容为播放状态
        modalContainer.innerHTML = '';
        
        const playingContent = document.createElement('div');
        playingContent.style.backgroundColor = '#fff';
        playingContent.style.padding = '30px 50px';
        playingContent.style.borderRadius = '10px';
        playingContent.style.textAlign = 'center';
        playingContent.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        
        const playingText = document.createElement('p');
        playingText.textContent = 'On the phone...';
        playingText.style.fontSize = '24px';
        playingText.style.marginBottom = '20px';
        playingText.style.color = '#333';
        
        // 添加头像图片
        const headImage = document.createElement('img');
        headImage.src = 'head.png'; // 使用head图片文件
        headImage.alt = 'Your mother';
        headImage.style.width = '120px'; // 设置合适的宽度
        headImage.style.height = '120px'; // 设置合适的高度
        headImage.style.borderRadius = '50%'; // 圆形头像
        headImage.style.objectFit = 'cover'; // 确保图片适当填充
        headImage.style.marginBottom = '20px'; // 与音频控件保持一定距离
        headImage.style.border = '3px solid rgb(206, 86, 208)'; // 添加边框
        headImage.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'; // 添加阴影效果
        
        // 创建音频元素
        const audio = document.createElement('audio');
        audio.src = 'HumeAI_voice-preview_OLD WOMEN.wav'; // 使用正确的音频文件名
        audio.style.width = '100%';
        audio.controls = true;
        
        // 暂停背景音乐
        const gameBgm = document.getElementById('game-bgm');
        const openingMusic = document.getElementById('opening-music');
        if (gameBgm) gameBgm.pause();
        if (openingMusic) openingMusic.pause();
        
        // 音频播放结束后关闭模态框并恢复背景音乐
        audio.addEventListener('ended', () => {
            modalContainer.remove();
            console.log('HumeAI audio playback ended, returning to game');
            
            // 根据当前显示的屏幕恢复相应的背景音乐
            if (document.getElementById('game-screen').style.display !== 'none') {
                if (gameBgm) gameBgm.play().catch(e => console.log('背景音乐恢复失败:', e));
            } else if (document.getElementById('opening-story1').style.display !== 'none' ||
                      document.getElementById('opening-story2').style.display !== 'none' ||
                      document.getElementById('opening-story3').style.display !== 'none' ||
                      document.getElementById('opening-story4').style.display !== 'none' ||
                      document.getElementById('opening-story5').style.display !== 'none') {
                if (openingMusic) openingMusic.play().catch(e => console.log('开场音乐恢复失败:', e));
            }
            // 编辑器界面不恢复音乐
        });
        
        // 组装播放界面
        playingContent.appendChild(playingText);
        playingContent.appendChild(headImage); // 添加头像图片
        playingContent.appendChild(audio);
        modalContainer.appendChild(playingContent);
        
        // 自动播放音频
        audio.play().catch(e => {
            console.error('Audio playback failed:', e);
            // 如果自动播放失败，显示提示
            const playButton = document.createElement('button');
            playButton.textContent = 'Click to play';
            playButton.style.padding = '10px 20px';
            playButton.style.margin = '10px auto';
            playButton.style.display = 'block';
            playButton.addEventListener('click', () => {
                audio.play().catch(e => console.error('Failed to play again:', e));
            });
            playingContent.appendChild(playButton);
        });
    };
    
    // 清除剪辑标题
    const clearClipTitle = () => {
        const existingTitle = reviewingArea.querySelector('.clip-title');
        if (existingTitle) {
            existingTitle.remove();
        }
    };

    // Create alert box
    const createAlert = (message) => {
        const alert = document.createElement('div');
        alert.style.position = 'fixed';
        alert.style.top = '50%';
        alert.style.left = '50%';
        alert.style.transform = 'translate(-50%, -50%)';
        alert.style.backgroundColor = '#fff';
        alert.style.padding = '20px';
        alert.style.borderRadius = '5px';
        alert.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        alert.style.zIndex = '1000';
        alert.textContent = message;
        
        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'OK';
        closeBtn.style.marginTop = '10px';
        closeBtn.style.padding = '5px 15px';
        closeBtn.style.display = 'block';
        closeBtn.style.margin = '10px auto 0';
        closeBtn.onclick = () => alert.remove();
        
        alert.appendChild(closeBtn);
        document.body.appendChild(alert);
        
        // 3秒后自动关闭
        setTimeout(() => alert.remove(), 3000);
    };

    // 初始化函数 - 根据当前回合设置初始状态
    const initializeRound = () => {
        console.log(`Initializing round ${currentRound + 1}...`);
        
        // 清除所有 slot 的内容和状态
        clipSlots.forEach((slot, index) => {
            // 保留第一轮第一个 slot 的内容
            if (!(currentRound === 0 && index === 0)) {
                slot.innerHTML = '';
                slot.classList.remove('filled');
            }
            slot.classList.remove('disabled');
        });
        
        // 在所有轮次都自动填充第一个clip
        autoFillFirstClip();
        
        // 第一轮或第五轮特殊处理
        if (currentRound === 0 || currentRound === 4) {
            // 为最后一个clip slot添加rub图标（仅第一轮）
            if (currentRound === 0) {
                const lastClipSlot = clipSlots[clipSlots.length - 1];
                const rubIconBg = createRubIcon(lastClipSlot);
                lastClipSlot.appendChild(rubIconBg);
            }
        } else {
            // 非第一轮和第五轮：移除第一个clip slot的fixed类
            if (clipSlots.length > 0) {
                clipSlots[0].classList.remove('fixed');
                console.log('Removed fixed class from the first clip slot');
                
                // 注意：不再需要在这里为第一个clip添加x图标，因为已经在autoFillFirstClip中添加了
                // if (currentRound >= 1 && currentRound <= 3) {
                //     const firstSlot = clipSlots[0];
                //     const rubIconBg = createRubIcon(firstSlot);
                //     firstSlot.appendChild(rubIconBg);
                //     console.log(`Round ${currentRound + 1}: Added rub icon (x function) to first clip slot`);
                // }
            }
            
            // 第二轮和第四轮：禁用第四个 slot，为第三个 slot 添加 rub 图标
            if (currentRound === 1 || currentRound === 3) {
                // 禁用第四个 slot
                if (clipSlots.length >= 4) {
                    clipSlots[3].classList.add('disabled');
                    console.log(`Round ${currentRound + 1}: Disabled 4th clip slot`);
                }
                
                // 为第三个 slot 添加 rub 图标
                if (clipSlots.length >= 3) {
                    const thirdSlot = clipSlots[2];
                    const rubIconBg = createRubIcon(thirdSlot);
                    thirdSlot.appendChild(rubIconBg);
                    console.log(`Round ${currentRound + 1}: Added rub icon to 3rd clip slot`);
                }
            } else if (currentRound === 2) {
                // 第三轮：不添加 rub 图标
                console.log(`Round ${currentRound + 1}: No rub icon added`);
            } else if (currentRound === 4) {
                // 第五轮：不添加 rub 图标，所有 slot 都可用
                console.log(`Round ${currentRound + 1}: No rub icon added, all slots available`);
            }
        }
        
        // 更新缩略图视频
        updateThumbnailVideos(currentRound);
    };

    // 自动将第一个视频放入第一个clip slot
    const autoFillFirstClip = () => {
        // 移除仅在第一轮和第五轮自动填充的限制，让所有轮次都自动填充
        // if (currentRound !== 0 && currentRound !== 4) {
        //     console.log('Not round 1 or 5, skipping auto-fill of first clip slot');
        //     return;
        // }
        
        console.log('Current round:', currentRound);
        console.log('Available videos for current round:', roundVideos[currentRound]);
        
        if (thumbnails.length > 0 && clipSlots.length > 0) {
            const firstThumbnail = thumbnails[0];
            const firstClipSlot = clipSlots[0];
            
            // 获取当前轮次的第一个视频源
            const currentRoundVideos = roundVideos[currentRound];
            if (currentRoundVideos && currentRoundVideos.length > 0) {
                console.log('Loading first video for round', currentRound + 1, ':', currentRoundVideos[0]);
                
                // 创建新的视频元素
                const newVideo = document.createElement('video');
                newVideo.className = 'clip-video';
                newVideo.autoplay = true;
                newVideo.loop = true;
                newVideo.muted = true; // 确保静音
                newVideo.playsinline = true;
                newVideo.dataset.thumbnailId = firstThumbnail.id; // 存储原始缩略图ID
                
                // 添加视频源
                const source = document.createElement('source');
                source.src = currentRoundVideos[0]; // 使用当前轮次的第一个视频
                source.type = 'video/mp4';
                console.log('Setting video source for round', currentRound + 1, ':', source.src);
                newVideo.appendChild(source);
                
                // 清空slot并添加视频
                firstClipSlot.innerHTML = '';
                firstClipSlot.appendChild(newVideo);
                firstClipSlot.classList.add('filled');
                
                // 只在第一轮和第五轮添加fixed类
                if (currentRound === 0 || currentRound === 4) {
                    firstClipSlot.classList.add('fixed');
                }
                
                // 加载并播放视频
                newVideo.load();
                console.log('Video loaded, attempting to play...');
                newVideo.play().catch(e => console.error('Video playback failed:', e));
                
                console.log(`Round ${currentRound + 1}: Auto-filled first clip slot with video: ${currentRoundVideos[0]}`);
                
                // 为第2、3、4轮的第一个clip添加x图标
                if (currentRound >= 1 && currentRound <= 3) {
                    const rubIconBg = createRubIcon(firstClipSlot);
                    firstClipSlot.appendChild(rubIconBg);
                    console.log(`Round ${currentRound + 1}: Added rub icon (x function) to first clip slot after filling`);
                }
            }
        }
    };

    // 创建rub图标
    const createRubIcon = (slot) => {
        const rubIconBg = document.createElement('div');
        rubIconBg.className = 'rub-icon-bg';
        
        const rubIcon = document.createElement('div');
        rubIcon.className = 'rub-icon';
        
        rubIconBg.appendChild(rubIcon);
        
        rubIconBg.addEventListener('click', () => {
            // 检查 slot 是否已被禁用
            if (slot.classList.contains('disabled')) {
                // 如果已禁用，则恢复正常
                slot.classList.remove('disabled');
                console.log('Restored clip slot to normal state');
            } else {
                // 如果未禁用，则禁用它
            slot.classList.add('disabled');
                console.log('Disabled clip slot');
            }
            // 无论如何都要清空内容并保留 rub 图标
            slot.innerHTML = '';
            slot.classList.remove('filled');
            slot.appendChild(rubIconBg);
            checkClipSequence();
        });
        
        return rubIconBg;
    };

    // 为每个缩略图添加唯一ID和拖拽功能
    thumbnails.forEach((thumbnail, index) => {
        // 设置唯一ID
        thumbnail.id = `thumbnail-${index}`;
        console.log(`Setting thumbnail ID: ${thumbnail.id}`);
        
        // 获取视频元素
        const videoElement = thumbnail.querySelector('video');
        if (videoElement) {
            // 默认设置为静音
            videoElement.muted = true;
        }
        
        // 在第一轮和第五轮时为第一个视频添加特殊处理
        if ((index === 0 && currentRound === 0) || (index === 0 && currentRound === 4)) {
            thumbnail.addEventListener('mousedown', (e) => {
                // 只在第一轮和第五轮时阻止拖拽
                if (currentRound === 0 || currentRound === 4) {
                    e.preventDefault();
                    // 只有当游戏已经开始后才显示提示
                    if (gameStarted) {
                        createAlert(`In Round ${currentRound + 1}, the first video is fixed and cannot be dragged`);
                    } else {
                        // 标记游戏已经开始
                        gameStarted = true;
                    }
                }
            });
            // 将第一个视频标记为已使用（仅在第一轮和第五轮）
            usedThumbnails.add(thumbnail.id);
            console.log(`Round ${currentRound + 1}: First video marked as used`);
        }
        
        thumbnail.addEventListener('dragstart', (e) => {
            // 检查视频是否已被使用
            if (usedThumbnails.has(thumbnail.id)) {
                e.preventDefault();
                createAlert('This video has already been used, please select another one');
                return;
            }
            
            // 检查是否是第二轮或第四轮的第四个视频
            if (index === 3 && (currentRound === 1 || currentRound === 3)) {
                e.preventDefault();
                createAlert(`In Round ${currentRound + 1}, the fourth video slot is disabled and cannot be used`);
                return;
            }
            
            // 标记游戏已经开始
            gameStarted = true;
            
            // 拖拽开始时取消静音
            if (videoElement) {
                videoElement.muted = false;
            }
            
            e.dataTransfer.setData('text/plain', thumbnail.id);
            thumbnail.classList.add('dragging');
            console.log(`Started dragging thumbnail: ${thumbnail.id}`);
        });

        thumbnail.addEventListener('dragend', () => {
            // 拖拽结束时恢复静音
            if (videoElement) {
                videoElement.muted = true;
            }
            
            thumbnail.classList.remove('dragging');
            console.log(`Finished dragging thumbnail: ${thumbnail.id}`);
        });
    });

    // 为clip slots添加拖拽事件
    clipSlots.forEach((slot, index) => {
        slot.addEventListener('dragover', (e) => {
            // 第一轮或第五轮时，跳过第一个slot
            if ((currentRound === 0 || currentRound === 4) && index === 0) {
                return;
            }
            
            if (slot.classList.contains('filled') || slot.classList.contains('disabled')) {
                return;
            }
            
            e.preventDefault();
            slot.classList.add('droppable');
        });

        slot.addEventListener('dragleave', () => {
            slot.classList.remove('droppable');
        });

        slot.addEventListener('drop', (e) => {
            e.preventDefault();
            
            // 第一轮或第五轮时，跳过第一个slot
            if ((currentRound === 0 || currentRound === 4) && index === 0) {
                return;
            }
            
            if (slot.classList.contains('filled') || slot.classList.contains('disabled')) {
                return;
            }
            
            slot.classList.remove('droppable');
            
            const thumbnailId = e.dataTransfer.getData('text/plain');
            const thumbnail = document.getElementById(thumbnailId);
            
            if (thumbnail && !usedThumbnails.has(thumbnailId)) {
                console.log(`Placed thumbnail ${thumbnailId} into clip slot ${index}`);
                
                // 标记缩略图为已使用
                usedThumbnails.add(thumbnailId);
                
                const videoElement = thumbnail.querySelector('video');
                if (videoElement && videoElement.querySelector('source')) {
                    // 将原视频设置为静音
                    if (videoElement) {
                        videoElement.muted = true;
                    }
                    
                    const videoSrc = videoElement.querySelector('source').getAttribute('src');
                    
                    // 保存rub图标引用（如果存在）
                    const existingRubIcon = slot.querySelector('.rub-icon-bg');
                    
                    // 清空slot
                    slot.innerHTML = '';
                    
                    const newVideo = document.createElement('video');
                    newVideo.className = 'clip-video';
                    newVideo.autoplay = true;
                    newVideo.loop = true;
                    newVideo.muted = true; // 确保静音
                    newVideo.playsinline = true;
                    newVideo.dataset.thumbnailId = thumbnailId;
                    
                    const source = document.createElement('source');
                    source.src = videoSrc;
                    source.type = 'video/mp4';
                    newVideo.appendChild(source);
                    
                    const closeButton = document.createElement('div');
                    closeButton.className = 'clip-close';
                    closeButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        // 移除已使用标记
                        usedThumbnails.delete(thumbnailId);
                        slot.innerHTML = '';
                        slot.classList.remove('filled');
                        
                        // 如果是最后一个slot，重新添加rub图标（除了第五轮）
                        if (index === clipSlots.length - 1 && currentRound !== 4) {
                            const rubIconBg = createRubIcon(slot);
                            slot.appendChild(rubIconBg);
                        } 
                        // 如果是第二轮或第四轮的第三个slot，重新添加rub图标
                        else if ((currentRound === 1 || currentRound === 3) && index === 2) {
                            const rubIconBg = createRubIcon(slot);
                            slot.appendChild(rubIconBg);
                            rubIconBg.style.display = 'none';
                        }
                        // 如果是第2、3、4轮的第一个slot，重新添加rub图标
                        else if ((currentRound >= 1 && currentRound <= 3) && index === 0) {
                            const rubIconBg = createRubIcon(slot);
                            slot.appendChild(rubIconBg);
                            console.log(`Restored rub icon to first clip slot in round ${currentRound + 1}`);
                        }
                        // 如果之前有rub图标，恢复它
                        else if (existingRubIcon) {
                            const rubIconBg = createRubIcon(slot);
                            slot.appendChild(rubIconBg);
                        }
                        
                        checkClipSequence();
                    });
                    
                    slot.appendChild(newVideo);
                    slot.classList.add('filled');
                    
                    // 为第2、3、4轮的第一个clip添加x功能（删除功能）
                    if ((currentRound >= 1 && currentRound <= 3) && index === 0) {
                        slot.appendChild(closeButton);
                        console.log(`Added close button to first clip slot in round ${currentRound + 1}`);
                    } else {
                        slot.appendChild(closeButton);
                    }
                    
                    // 如果有rub图标，添加回去但设为隐藏
                    if (existingRubIcon) {
                        const rubIconBg = createRubIcon(slot);
                        slot.appendChild(rubIconBg);
                        rubIconBg.style.display = 'none';
                    }
                    
                    newVideo.load();
                    newVideo.play().catch(e => console.error('视频播放失败:', e));
                    
                    checkClipSequence();
                }
            }
        });
        
        // 最后一个slot添加rub图标点击事件（除了第五轮）
        if (index === clipSlots.length - 1 && currentRound !== 4) {
            const rubIconBg = createRubIcon(slot);
            slot.appendChild(rubIconBg);
        }
    });
    
    // 初始检查视频顺序
    setTimeout(checkClipSequence, 500);
    
    // 修改export按钮点击事件
    if (exportButton) {
        exportButton.addEventListener('click', () => {
            // 获取当前的视频序列和标题
            const filledSlots = Array.from(clipSlots).filter(slot => slot.classList.contains('filled') && !slot.classList.contains('disabled'));
            let sequence = '';
            const videoSources = [];
            
            filledSlots.forEach(slot => {
                const video = slot.querySelector('video');
                if (video && video.dataset.thumbnailId) {
                    const thumbnailNum = video.dataset.thumbnailId.split('-')[1];
                    sequence += (parseInt(thumbnailNum) + 1);
                    
                    // 保存视频源
                    const source = video.querySelector('source');
                    if (source) {
                        videoSources.push(source.src);
                    }
                }
            });

            // 获取当前标题
            const currentTitle = clipTitles[currentRound][sequence];
            if (currentTitle) {
                // 保存当前回合的序列信息
                roundSequences.push({
                    sequence: sequence,
                    title: currentTitle,
                    videoSources: videoSources
                });
                
                // 隐藏编辑区域
                document.getElementById('editor-screen').style.display = 'none';
                // 显示预览区域
                previewArea.style.display = 'block';
                console.log('Preview mode activated');
                
                // 设置预览标题和描述
                const previewTitle = previewArea.querySelector('.preview-title');
                const previewSubtitle = document.querySelector('.preview-subtitle');
                if (previewTitle && currentTitle) {
                    // 设置完整标题文本，包含引号
                    previewTitle.textContent = `"${currentTitle.text.split('"')[1]}"`;
                    
                    // 设置描述文本
                    if (previewSubtitle && currentTitle.description) {
                        previewSubtitle.textContent = currentTitle.description;
                    } else if (previewSubtitle) {
                        previewSubtitle.textContent = "";
                    }
                }
                
                // 清空并填充视频容器
                const videoContainer = previewArea.querySelector('.video-container');
                if (videoContainer) {
                    videoContainer.innerHTML = '';
                    filledSlots.forEach(slot => {
                        const originalVideo = slot.querySelector('video');
                        if (originalVideo) {
                            const previewVideo = originalVideo.cloneNode(true);
                            // 确保预览视频是静音的
                            previewVideo.muted = true;
                            
                            const videoWrapper = document.createElement('div');
                            videoWrapper.className = 'video-wrapper';
                            videoWrapper.appendChild(previewVideo);
                            videoContainer.appendChild(videoWrapper);
                            previewVideo.play().catch(e => console.error('Preview video playback failed:', e));
                        }
                    });
                }
                
                // 更新标题栏
                const roundTitle = previewArea.querySelector('.round-title');
                if (roundTitle) {
                    roundTitle.textContent = document.querySelector('.header-title').textContent || 'Round 3: Delivery Man Accident';
                }
                
                // 更新预览界面的资金显示
                const fundsAmount = previewArea.querySelector('.funds-amount');
                if (fundsAmount) {
                    fundsAmount.textContent = `+${fundsMapping[currentRound][sequence]}`;
                }
                
                console.log('Preview mode activated');
                
                // 检测第三回合的negative类型
                if (currentRound === 2 && currentTitle.type === 'negative') {
                    // 不在预览界面显示电话模态框
                    console.log('Skipping phone modal in preview mode');
                }
                
                // 添加返回主界面的功能
                const uploadButton = previewArea.querySelector('.upload-button');
                if (uploadButton) {
                    uploadButton.addEventListener('click', () => {
                        // 清除所有弹幕容器
                        const danmakuContainers = document.querySelectorAll('.danmaku-container');
                        danmakuContainers.forEach(container => container.remove());
                        
                        // 隐藏预览区域
                        previewArea.style.display = 'none';
                        
                        // 显示结局页面
                        const outcomeArea = document.querySelector('.outcome-area');
                        if (outcomeArea) {
                            outcomeArea.style.display = 'block';
                            
                            // 恢复背景音乐
                            const gameBgm = document.getElementById('game-bgm');
                            if (gameBgm && gameBgm.paused) {
                                gameBgm.play().catch(e => console.log('背景音乐恢复失败:', e));
                            }
                            
                            // 创建视频播放器
                            const outcomeVideoContainer = outcomeArea.querySelector('.outcome-video-container');
                            if (outcomeVideoContainer) {
                                outcomeVideoContainer.innerHTML = '';
                                
                                // 创建视频元素
                                const video = document.createElement('video');
                                video.autoplay = true;
                                // 移除controls属性
                                video.style.width = '100%';
                                video.style.height = '100%';
                                video.style.objectFit = 'contain';
                                
                                // 设置视频播放速度为2倍
                                video.playbackRate = 2.0;
                                console.log('Set outcome video playback rate to 2.0x');
                                
                                // 创建一个合并的视频播放列表
                                let currentVideoIndex = 0;
                                
                                // 添加第一个视频源
                                if (videoSources.length > 0) {
                                    const source = document.createElement('source');
                                    source.src = videoSources[0];
                                    source.type = 'video/mp4';
                                    video.appendChild(source);
                                }
                                
                                // 根据视频序列和标题类型显示对应的facts
                                const factsPositive = outcomeArea.querySelector('.outcome-facts-positive');
                                const factsNeutral = outcomeArea.querySelector('.outcome-facts-neutral');
                                const factsNegative = outcomeArea.querySelector('.outcome-facts-negative');
                                
                                // 默认隐藏所有facts
                                if (factsPositive) factsPositive.style.display = 'none';
                                if (factsNeutral) factsNeutral.style.display = 'none';
                                if (factsNegative) factsNegative.style.display = 'none';
                                
                                // 清空之前的内容，只保留标题
                                if (factsPositive) {
                                    const title = factsPositive.querySelector('h3');
                                    factsPositive.innerHTML = '';
                                    factsPositive.appendChild(title);
                                }
                                if (factsNeutral) {
                                    const title = factsNeutral.querySelector('h3');
                                    factsNeutral.innerHTML = '';
                                    factsNeutral.appendChild(title);
                                }
                                if (factsNegative) {
                                    const title = factsNegative.querySelector('h3');
                                    factsNegative.innerHTML = '';
                                    factsNegative.appendChild(title);
                                }
                                
                                // 定义不同轮次的facts内容
                                const roundFacts = {
                                    0: { // Round 1: Actor's scandal
                                        positive: [
                                            "A famous actor sits in a café with his new agent,talking about the new movie they are going to make.",
                                            "The film was shot smoothly, supported the online celebrity restaurant owned by the male star, and helped the restaurant expand."
                                        ],
                                        neutral: [
                                            "The film was shot smoothly, supported the online celebrity restaurant owned by the male star, and helped the restaurant expand."
                                        ],
                                        negative: [
                                            "The woman touched the man's clothes, and the man was angry and knocked over the coffee, and the woman cried, suspected of breaking up.",
                                            "The contract was terminated, and the income of the online red restaurant owned by the male star became bleak."
                                        ]
                                    },
                                    1: { // Round 2: Public welfare illusion
                                        positive: [
                                            "The restaurant's charity program received widespread praise from the community.",
                                            "More people in need were able to receive free meals, improving their quality of life."
                                        ],
                                        neutral: [
                                            "The restaurant's charity program continued with mixed reviews from the public.",
                                            "Some questioned its effectiveness while others appreciated the effort."
                                        ],
                                        negative: [
                                            "The restaurant's charity program was exposed as a marketing ploy.",
                                            "Public trust was lost and the restaurant faced significant backlash."
                                        ]
                                    },
                                    2: { // Round 3: Hospital Incident
                                        positive: [
                                            "The delivery man was praised for his quick action to help the elderly person.",
                                            "His company rewarded him for his good deed and community service."
                                        ],
                                        neutral: [
                                            "The incident was determined to be an accident with no clear fault.",
                                            "Both parties reached an amicable resolution without further conflict."
                                        ],
                                        negative: [
                                            "The delivery man was found responsible for hitting the elderly person and fleeing.",
                                            "He lost his job and faced legal consequences for his actions."
                                        ],
                                        unprejudiced: [
                                            "The delivery man was found responsible for hitting the elderly person and fleeing.",
                                            "He lost his job and faced legal consequences for his actions."
                                        ]
                                    },
                                    3: { // Round 4: Nursing Home Care
                                        positive: [
                                            "The nursing home implemented improved safety measures for elderly residents.",
                                            "Staff received additional training on compassionate care and safety protocols."
                                        ],
                                        neutral: [
                                            "The nursing home maintained its standard procedures without significant changes.",
                                            "Residents continued to receive adequate but not exceptional care."
                                        ],
                                        negative: [
                                            "The nursing home was investigated for neglect and inadequate supervision.",
                                            "Several families removed their loved ones from the facility due to safety concerns."
                                        ],
                                        unprejudiced: [
                                            "The nursing home maintained its standard procedures without significant changes.",
                                            "Residents continued to receive adequate but not exceptional care."
                                        ]
                                    },
                                    4: { // Round 5: Political Visit
                                        positive: [
                                            "The candidate's promises led to real improvements in nursing home conditions.",
                                            "Elderly residents reported higher satisfaction and better quality of life."
                                        ],
                                        neutral: [
                                            "Some improvements were made to nursing homes, but challenges remained.",
                                            "The candidate's efforts were seen as a step in the right direction but insufficient."
                                        ],
                                        negative: [
                                            "The candidate's visit was revealed to be purely for political gain with no follow-through.",
                                            "Conditions in nursing homes actually worsened after the media attention faded."
                                        ]
                                    }
                                };
                                
                                // 根据当前标题类型显示对应的facts
                                if (currentTitle) {
                                    // 获取当前轮次的facts
                                    const currentRoundFacts = roundFacts[currentRound] || roundFacts[0];
                                    
                                    // 打字机效果函数
                                    const typewriterEffect = (container, texts, index = 0, charIndex = 0) => {
                                        if (index >= texts.length) return;
                                        
                                        // 如果是新段落，创建新的p元素
                                        if (charIndex === 0) {
                                            const paragraph = document.createElement('p');
                                            paragraph.className = 'typing-text';
                                            container.appendChild(paragraph);
                                        }
                                        
                                        // 获取当前段落
                                        const currentParagraph = container.querySelector('p.typing-text:last-child');
                                        
                                        // 如果已经完成当前段落
                                        if (charIndex >= texts[index].length) {
                                            // 移除打字机效果类
                                            currentParagraph.classList.remove('typing-text');
                                            
                                            // 延迟后开始下一段
                                            setTimeout(() => {
                                                typewriterEffect(container, texts, index + 1, 0);
                                            }, 500);
                                            return;
                                        }
                                        
                                        // 添加下一个字符
                                        currentParagraph.textContent = texts[index].substring(0, charIndex + 1);
                                        
                                        // 延迟后添加下一个字符
                                        setTimeout(() => {
                                            typewriterEffect(container, texts, index, charIndex + 1);
                                        }, 30);
                                    };
                                    
                                    if (currentTitle.type === 'positive' && factsPositive) {
                                        factsPositive.style.display = 'block';
                                        typewriterEffect(factsPositive, currentRoundFacts.positive);
                                    } else if (currentTitle.type === 'neutral' && factsNeutral) {
                                        factsNeutral.style.display = 'block';
                                        typewriterEffect(factsNeutral, currentRoundFacts.neutral);
                                    } else if (currentTitle.type === 'negative' && factsNegative) {
                                        factsNegative.style.display = 'block';
                                        typewriterEffect(factsNegative, currentRoundFacts.negative);
                                    }
                                }
                                
                                // 监听视频结束事件，播放下一个视频
                                video.addEventListener('ended', function playNextVideo() {
                                    if (currentVideoIndex < videoSources.length - 1) {
                                        currentVideoIndex++;
                                        video.src = videoSources[currentVideoIndex];
                                        video.play();
                                        
                                        // 确保下一个视频也是2倍速
                                        video.playbackRate = 2.0;
                                        console.log('Set next outcome video playback rate to 2.0x');
                                    } else {
                                        // 所有视频播放完毕，返回主界面
                                        // 隐藏结局页面
                                        outcomeArea.style.display = 'none';
                                        
                                        // 只在未进行轮次更新时更新
                                        if (!isRoundUpdateInProgress) {
                                            isRoundUpdateInProgress = true;
                        
                        // 更新回合计数
                        currentRound++;
                                            console.log('Round updated to:', currentRound);
                        
                        // 更新总资金
                        if (currentTitle) {
                                                totalFunds += fundsMapping[currentRound-1][sequence];
                        }
                        
                        // 显示游戏主界面
                        document.getElementById('game-screen').style.display = 'block';
                        
                        // 更新进度计数
                        const progressCount = document.querySelector('.progress-count');
                        if (progressCount) {
                            progressCount.textContent = `${currentRound}/5`;
                        }
                        
                        // 更新进度数字的激活状态
                        const progressNumbers = document.querySelectorAll('.number');
                        if (progressNumbers) {
                                                for (let i = 0; i < currentRound; i++) {
                                                    if (i < progressNumbers.length) {
                                                        progressNumbers[i].classList.add('active');
                                                    }
                                                }
                                            }
                                            
                                            // 确保启用New Post按钮，允许进入下一轮
                                            if (newPostButton) {
                                                console.log('启用New Post按钮');
                                                newPostButton.style.pointerEvents = 'auto';
                                                newPostButton.style.opacity = '1';
                                                newPostButton.classList.add('enabled');
                                            }
                                            
                                            // 更新moral图标
                                            const moralityMeter = document.querySelector('.morality-meter');
                                            if (moralityMeter) {
                                                const meterContent = moralityMeter.querySelector('.meter');
                                                if (meterContent) {
                                                    meterContent.innerHTML = '';
                                                    
                                                    const iconContainer = document.createElement('div');
                                                    iconContainer.className = 'moral-icon';
                                                    
                                                    if (currentTitle.type === 'positive') {
                                                        iconContainer.innerHTML = `<img src="up.svg" alt="Positive" width="100%" height="100%">`;
                                                    } else if (currentTitle.type === 'negative') {
                                                        iconContainer.innerHTML = `<img src="down1.svg" alt="Negative" width="100%" height="100%">`;
                                                    } else {
                                                        iconContainer.innerHTML = `<img src="flat.svg" alt="Neutral" width="100%" height="100%">`;
                                                    }
                                                    
                                                    meterContent.appendChild(iconContainer);
                                                }
                                            }
                                            
                                            // 更新资金显示
                                            const fundsMeter = document.querySelector('.funds-meter');
                                            if (fundsMeter) {
                                                fundsMeter.innerHTML = '';
                                                const currentFundsSpan = document.createElement('span');
                                                currentFundsSpan.className = 'current-funds';
                                                currentFundsSpan.textContent = totalFunds + '/20000';
                                                fundsMeter.appendChild(currentFundsSpan);
                                            }
                                            
                                            // 更新主界面视频封面和标题
                                            updateMainScreenVideo();
                                            
                                            console.log('Returning to main game screen, current round:', currentRound, 'total funds:', totalFunds);
                                            
                                            // 检查是否是第三回合结束
                                            if (currentRound === 3 && currentTitle.type === 'negative') {
                                                if (document.getElementById('game-screen').style.display === 'block') {
                                                    setTimeout(() => {
                                                        showPhoneCallModal();
                                                    }, 1500);
                                                }
                                            }
                                        }
                                        
                                        // 移除事件监听器
                                        video.removeEventListener('ended', playNextVideo);
                                    }
                                });
                                
                                outcomeVideoContainer.appendChild(video);
                                
                                // 添加跳过按钮功能
                                const skipButton = outcomeArea.querySelector('.skip-button');
                                if (skipButton) {
                                    skipButton.addEventListener('click', function() {
                                        // 停止视频播放
                                        video.pause();
                                        
                                        // 隐藏结局页面
                                        outcomeArea.style.display = 'none';
                                        
                                        // 更新回合计数
                                        currentRound++;
                                        
                                        // 更新总资金
                                        if (currentTitle) {
                                            totalFunds += fundsMapping[currentRound-1][sequence];
                                        }
                                        
                                        // 显示游戏主界面
                                        document.getElementById('game-screen').style.display = 'block';
                                        
                                        // 更新进度计数
                                        const progressCount = document.querySelector('.progress-count');
                                        if (progressCount) {
                                            progressCount.textContent = `${currentRound}/5`;
                                        }
                                        
                                        // 更新进度数字的激活状态
                                        const progressNumbers = document.querySelectorAll('.number');
                                        if (progressNumbers) {
                                            // 激活所有已完成轮次的数字
                                            for (let i = 0; i < currentRound; i++) {
                                                if (i < progressNumbers.length) {
                                                    progressNumbers[i].classList.add('active');
                                                }
                            }
                        }
                        
                        // 确保启用New Post按钮，允许进入下一轮
                        if (newPostButton) {
                            console.log('启用New Post按钮');
                            newPostButton.style.pointerEvents = 'auto';
                            newPostButton.style.opacity = '1';
                            // 添加一个明确的类来标记按钮已启用
                            newPostButton.classList.add('enabled');
                        }
                        
                        // 更新moral图标
                        const moralityMeter = document.querySelector('.morality-meter');
                        if (moralityMeter) {
                            // 清除现有内容
                            const meterContent = moralityMeter.querySelector('.meter');
                            if (meterContent) {
                                meterContent.innerHTML = '';
                                
                                // 创建图标容器
                                const iconContainer = document.createElement('div');
                                iconContainer.className = 'moral-icon';
                                
                                // 根据视频类型设置不同的图标
                                if (currentTitle.type === 'positive') {
                                    // 使用上升图标
                                    iconContainer.innerHTML = `<img src="up.svg" alt="Positive" width="100%" height="100%">`;
                                } else if (currentTitle.type === 'negative') {
                                    // 使用下降图标
                                    iconContainer.innerHTML = `<img src="down1.svg" alt="Negative" width="100%" height="100%">`;
                                } else {
                                    // 使用平稳图标
                                    iconContainer.innerHTML = `<img src="flat.svg" alt="Neutral" width="100%" height="100%">`;
                                }
                                
                                meterContent.appendChild(iconContainer);
                            }
                        }
                        
                        // 更新资金显示
                        const fundsMeter = document.querySelector('.funds-meter');
                        if (fundsMeter) {
                            // 清除现有内容
                            fundsMeter.innerHTML = '';
                            
                            // 创建资金显示
                            const currentFundsSpan = document.createElement('span');
                            currentFundsSpan.className = 'current-funds';
                            currentFundsSpan.textContent = totalFunds + '/20000';
                            
                            fundsMeter.appendChild(currentFundsSpan);
                        }
                        
                        // 更新主界面视频封面和标题
                        updateMainScreenVideo();
                        
                                        console.log('Skipped outcome videos, returning to main game screen');
                                        
                                        // 检查是否是第三回合结束
                                        if (currentRound === 3 && currentTitle.type === 'negative') {
                                            // 只在游戏主界面显示电话模态框
                                            if (document.getElementById('game-screen').style.display === 'block') {
                                                setTimeout(() => {
                                                    showPhoneCallModal();
                                                }, 1500);
                                            }
                                        }
                                    });
                                }
                                
                                // 加载并播放第一个视频
                                video.load();
                                video.play().catch(e => console.error('视频播放失败:', e));
                            }
                        }
                    }, { once: true }); // 确保事件只触发一次
                }
            } else {
                createAlert('Please complete the video sequence arrangement first');
            }
        });
    }

    // 创建弹幕容器
    const createDanmakuContainer = () => {
        const container = document.createElement('div');
        container.className = 'danmaku-container';
        container.style.position = 'fixed';  // 改为fixed定位
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100vw';     // 使用视窗宽度
        container.style.height = '100vh';    // 使用视窗高度
        container.style.overflow = 'hidden';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '1000';     // 确保弹幕显示在最上层
        return container;
    };

    // 创建单条弹幕
    const createDanmaku = (text, likes) => {
        const danmaku = document.createElement('div');
        danmaku.className = 'danmaku';
        danmaku.style.position = 'absolute';
        danmaku.style.whiteSpace = 'nowrap';
        danmaku.style.color = '#fff';
        danmaku.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)';
        danmaku.style.fontSize = '18px';     // 增大字体
        danmaku.style.padding = '6px 12px';  // 增加内边距
        danmaku.style.borderRadius = '4px';
        danmaku.style.backgroundColor = 'rgba(0,0,0,0.5)'; // 增加背景透明度
        danmaku.style.transform = 'translateX(100vw)';
        danmaku.style.transition = 'transform 15s linear'; // 增加动画时间到15秒
        danmaku.innerHTML = `${text} <span style="color: #ffd700">👍 ${likes}</span>`;
        
        // 随机垂直位置,但避免顶部和底部
        danmaku.style.top = Math.random() * 70 + 15 + '%';
        
        return danmaku;
    };

    // 发送弹幕
    const sendDanmaku = (container, comments) => {
        if (!comments || !comments.length) return;
        
        let index = 0;
        const sendNext = () => {
            // 检查是否正在显示结局，如果是则停止发送弹幕
            const endingContainer = document.querySelector('div[style*="z-index: 10000"]');
            if (endingContainer) {
                console.log('Ending is currently displayed, stopping danmaku');
                return;
            }
            
            if (index >= comments.length) {
                index = 0; // 循环播放
            }
            
            const comment = comments[index];
            const danmaku = createDanmaku(comment.text, comment.likes);
            container.appendChild(danmaku);
            
            // 开始动画
            setTimeout(() => {
                danmaku.style.transform = 'translateX(-100%)';
            }, 100);
            
            // 移除已播放的弹幕
            setTimeout(() => {
                danmaku.remove();
            }, 15100); // 对应15秒的动画时间
            
            index++;
            
            // 增加发送间隔到1.5-3秒
            setTimeout(sendNext, Math.random() * 1500 + 1500);
        };
        
        sendNext();
    };

    // 更新主界面视频封面和标题
    function updateMainScreenVideo() {
        if (roundSequences.length === 0) return;
        
        // 获取最新一轮的视频序列
        const latestRound = roundSequences[roundSequences.length - 1];
        
        // 更新视频封面
        const videoPlaceholder = document.querySelector('.video-placeholder');
        if (videoPlaceholder && latestRound.videoSources.length > 0) {
            // 清空现有内容
            videoPlaceholder.innerHTML = '';
            
            // 创建视频元素
            const video = document.createElement('video');
            video.autoplay = true;
            video.loop = true;
            video.muted = true; // 确保主界面视频是静音的
            video.playsinline = true;
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            
            // 添加视频源
            const source = document.createElement('source');
            source.src = latestRound.videoSources[0];
            source.type = 'video/mp4';
            video.appendChild(source);
            
            videoPlaceholder.appendChild(video);
            
            // 加载并播放视频
            video.load();
            video.play().catch(e => console.error('主界面视频播放失败:', e));
            
            // 先清除所有现有的弹幕容器
            const existingDanmakuContainers = document.querySelectorAll('.danmaku-container');
            existingDanmakuContainers.forEach(container => container.remove());
            
            // 只在游戏主屏幕显示时才创建弹幕
            if (document.getElementById('game-screen').style.display !== 'none') {
                // 创建并添加弹幕容器到body
                const danmakuContainer = createDanmakuContainer();
                document.body.appendChild(danmakuContainer);
                
                // 开始发送弹幕
                let comments = commentsData[currentRound-1] ? commentsData[currentRound-1][latestRound.title.type] : null;
                
                // 如果没有找到评论，尝试使用unprejudiced类型
                if (!comments && commentsData[currentRound-1] && commentsData[currentRound-1]['unprejudiced']) {
                    comments = commentsData[currentRound-1]['unprejudiced'];
                    console.log('Using unprejudiced type comments instead of neutral type');
                }
                
                // 如果没有neutral类型，但有unprejudiced类型，则使用unprejudiced
                if (!comments && commentsData[currentRound] && commentsData[currentRound]['unprejudiced']) {
                    comments = commentsData[currentRound]['unprejudiced'];
                    console.log('Using unprejudiced type comments instead of neutral type in showComments');
                }
                
                console.log(`Current round: ${currentRound}, Type: ${latestRound.title.type}, Comments data:`, comments ? comments.length : 'none');
                
                // 发送弹幕并更新评论区
                sendDanmaku(danmakuContainer, comments);
                showComments(currentRound-1, latestRound.title.type);
            }
        }
        
        // 更新视频标题
        const videoCaption = document.querySelector('.video-caption');
        if (videoCaption && latestRound.title) {
            videoCaption.textContent = `"${latestRound.title.text.split('"')[1]}"`;
        }
        
        // 更新浏览量
        const viewsCountElement = document.querySelector('.views-count');
        if (viewsCountElement && latestRound) {
            viewsCountElement.textContent = viewsMapping[currentRound-1][latestRound.sequence];
        }

        // 如果是第五轮结束，显示结局提示框
        if (currentRound === 5) {
            setTimeout(() => {
                // 创建模态框容器
                const modalContainer = document.createElement('div');
                modalContainer.style.position = 'fixed';
                modalContainer.style.top = '0';
                modalContainer.style.left = '0';
                modalContainer.style.width = '100%';
                modalContainer.style.height = '100%';
                modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                modalContainer.style.display = 'flex';
                modalContainer.style.justifyContent = 'center';
                modalContainer.style.alignItems = 'center';
                modalContainer.style.zIndex = '9999';

                // 创建模态框内容
                const modalContent = document.createElement('div');
                modalContent.style.backgroundColor = '#fff';
                modalContent.style.padding = '30px 50px';
                modalContent.style.borderRadius = '10px';
                modalContent.style.textAlign = 'center';
                modalContent.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

                // 添加文本
                const text = document.createElement('p');
                text.textContent = 'Are you ready for your ending?';
                text.style.fontSize = '24px';
                text.style.marginBottom = '20px';
                text.style.color = '#333';

                // 创建按钮
                const button = document.createElement('button');
                button.textContent = 'Yes';
                button.style.padding = '10px 30px';
                button.style.fontSize = '18px';
                button.style.backgroundColor = '#4a90e2';
                button.style.color = '#fff';
                button.style.border = 'none';
                button.style.borderRadius = '5px';
                button.style.cursor = 'pointer';
                button.style.transition = 'background-color 0.3s';

                // 添加按钮点击事件处理结局显示
                button.addEventListener('click', () => {
                    // 移除模态框
                    modalContainer.remove();

                    // 获取最后一轮的结果
                    const lastRound = roundSequences[roundSequences.length - 1];
                    const isPositive = lastRound.title.type === 'positive';
                    
                    // 获取morality值（从morality-meter的图标判断）
                    const moralityIcon = document.querySelector('.moral-icon img');
                    const morality = moralityIcon ? 
                        (moralityIcon.src.includes('up.svg') ? 1 : 
                         moralityIcon.src.includes('down1.svg') ? -1 : 0) : 0;

                    // 确定结局类型
                    let endingType;
                    if (isPositive) {
                        endingType = morality < 0 ? 1 : 2;
                    } else {
                        endingType = totalFunds >= 20000 ? 3 : 4;
                    }

                    // 清除所有弹幕容器，停止弹幕显示
                    const danmakuContainers = document.querySelectorAll('.danmaku-container');
                    danmakuContainers.forEach(container => container.remove());
                    console.log('Cleared all danmaku containers for ending');

                    // 创建结局展示容器
                    const endingContainer = document.createElement('div');
                    endingContainer.style.position = 'fixed';
                    endingContainer.style.top = '0';
                    endingContainer.style.left = '0';
                    endingContainer.style.width = '100%';
                    endingContainer.style.height = '100%';
                    endingContainer.style.backgroundColor = '#000';
                    endingContainer.style.zIndex = '10000';
                    endingContainer.style.display = 'flex';
                    endingContainer.style.justifyContent = 'center';
                    endingContainer.style.alignItems = 'center';
                    
                    // 创建并播放结局音乐
                    const endingMusic = document.createElement('audio');
                    endingMusic.volume = 0.7;
                    
                    // 根据结局类型选择音乐
                    if (endingType === 3 || endingType === 4) {
                        // 坏结果音乐 (ending 3 和 4)
                        endingMusic.src = '坏结果.MP3';
                    } else {
                        // 好结果音乐 (ending 1 和 2)
                        endingMusic.src = '好结果.MP3';
                    }
                    
                    // 播放音乐
                    endingMusic.play().catch(e => console.log('结局音乐播放失败:', e));
                    
                    // 停止游戏背景音乐
                    const gameBgm = document.getElementById('game-bgm');
                    if (gameBgm) {
                        gameBgm.pause();
                    }

                    // 创建图片元素
                    const endingImage = document.createElement('img');
                    endingImage.style.maxWidth = '100%';
                    endingImage.style.maxHeight = '100%';
                    endingImage.style.objectFit = 'contain';
                    
                    // 设置第一张图片
                    endingImage.src = `end${endingType}1.png`;
                    
                    // 跟踪当前图片序号
                    let currentImageIndex = 1;
                    const maxImages = endingType === 4 ? 2 : 3; // 结局4只有两张图片

                    // 点击图片显示下一张
                    endingContainer.addEventListener('click', () => {
                        currentImageIndex++;
                        if (currentImageIndex <= maxImages) {
                            endingImage.src = `end${endingType}${currentImageIndex}.png`;
                        } else {
                            // 停止结局音乐
                            endingMusic.pause();
                            endingMusic.currentTime = 0;
                            
                            // 恢复开场音乐
                            const openingMusic = document.getElementById('opening-music');
                            if (openingMusic) {
                                openingMusic.play().catch(e => console.log('Opening music resume failed:', e));
                            }
                            
                            // 再次确保所有弹幕容器被清除
                            const danmakuContainers = document.querySelectorAll('.danmaku-container');
                            danmakuContainers.forEach(container => container.remove());
                            
                            endingContainer.remove(); // 移除结局展示
                            
                            // 隐藏游戏主界面
                            document.getElementById('game-screen').style.display = 'none';
                            
                            // 显示游戏开端第一页（标题页面）
                            document.getElementById('title-screen').style.display = 'block';
                            
                            // 重置游戏状态
                            currentRound = 0;
                            totalFunds = 0;
                            gameStarted = false;
                            roundSequences.length = 0;
                            usedThumbnails.clear();
                            
                            // 重置进度数字的激活状态
                            const progressNumbers = document.querySelectorAll('.number');
                            if (progressNumbers) {
                                progressNumbers.forEach(number => number.classList.remove('active'));
                            }
                            // 重置进度计数
                            const progressCount = document.querySelector('.progress-count');
                            if (progressCount) {
                                progressCount.textContent = '0/5';
                            }
                            // 重置资金显示
                            const fundsMeter = document.querySelector('.funds-meter');
                            if (fundsMeter) {
                                fundsMeter.innerHTML = '<span class="current-funds">0/20000</span>';
                            }
                            // 重置morality图标
                            const moralityMeter = document.querySelector('.morality-meter');
                            if (moralityMeter) {
                                const meterContent = moralityMeter.querySelector('.meter');
                                if (meterContent) {
                                    meterContent.innerHTML = '';
                                }
                            }
                        }
                    });

                    endingContainer.appendChild(endingImage);
                    document.body.appendChild(endingContainer);
                });

                // 组装模态框
                modalContent.appendChild(text);
                modalContent.appendChild(button);
                modalContainer.appendChild(modalContent);

                // 添加到页面
                document.body.appendChild(modalContainer);
            }, 3000);
        }
    }

    // 添加返回按钮事件
    if (backButton) {
        backButton.addEventListener('click', () => {
            // 返回编辑器界面
            previewArea.style.display = 'none';
            document.getElementById('editor-screen').style.display = 'block';
            
            // 暂停背景音乐
            const gameBgm = document.getElementById('game-bgm');
            if (gameBgm) {
                gameBgm.pause();
                console.log('Background music paused when returning to editor mode');
            }
            
            console.log('Returning to editor mode');
        });
    }

    // 添加关闭按钮事件
    const closeButton = previewArea.querySelector('.window-controls .close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            // 清除所有弹幕容器
            const danmakuContainers = document.querySelectorAll('.danmaku-container');
            danmakuContainers.forEach(container => container.remove());
            
            // 隐藏预览区域
            previewArea.style.display = 'none';
            // 显示编辑区域
            document.getElementById('editor-screen').style.display = 'block';
            
            // 暂停背景音乐
            const gameBgm = document.getElementById('game-bgm');
            if (gameBgm) {
                gameBgm.pause();
                console.log('Background music paused when closing preview mode');
            }
            
            console.log('Preview mode closed');
        });
    }
    
    // 添加New Post按钮点击事件
    if (newPostButton) {
        console.log('Setting up New Post button click event');
        newPostButton.addEventListener('click', () => {
            isRoundUpdateInProgress = false;  // 重置轮次更新标志
            console.log('New Post button clicked, round update flag reset');
            console.log('New Post button clicked, current round:', currentRound);
            
            // 清除所有弹幕容器
            const danmakuContainers = document.querySelectorAll('.danmaku-container');
            danmakuContainers.forEach(container => container.remove());
            
            // 只有在完成上一轮后才能开始新一轮
            if (currentRound < 5) {
                // 切换到编辑器界面
                document.getElementById('game-screen').style.display = 'none';
                document.getElementById('editor-screen').style.display = 'block';
                
                // 暂停背景音乐
                const gameBgm = document.getElementById('game-bgm');
                if (gameBgm) {
                    gameBgm.pause();
                    console.log('Background music paused in editor mode');
                }
                
                // 更新编辑器标题
                const nextRound = currentRound + 1;
                const headerTitle = document.querySelector('.header-title');
                if (headerTitle) {
                    headerTitle.textContent = roundTitles[currentRound] || `Round${nextRound}: New Story`;
                }

                // 更新 facts 显示
                const factsText = document.querySelector('.facts-text');
                if (factsText) {
                    factsText.textContent = roundFacts[currentRound] || '';
                }
                
                // 清空编辑区域
                clearEditingArea();
                
                // 更新视频素材
                updateThumbnailVideos(currentRound);
                
                // 根据当前回合设置特定功能
                if (currentRound === 0) {
                    // 第一轮：自动填充第一个clip并添加rub键到最后一个clip
                    setTimeout(() => {
                        autoFillFirstClip();
                        
                        // 为最后一个clip slot添加rub图标
                        const lastClipSlot = clipSlots[clipSlots.length - 1];
                        const rubIconBg = createRubIcon(lastClipSlot);
                        lastClipSlot.appendChild(rubIconBg);
                    }, 500);
                }
                
                console.log('Entering round', nextRound, 'editing');
            } else {
                // 如果已经完成所有回合，显示游戏结束信息
                createAlert('All rounds completed!');
            }
        });
    }
    
    // 更新缩略图视频
    function updateThumbnailVideos(round) {
        console.log(`Updating video thumbnails for round ${round + 1}, available videos:`, roundVideos[round]);
        const videos = roundVideos[round] || [];
        const thumbnailVideos = document.querySelectorAll('.thumbnail-video');
        
        console.log(`Found ${thumbnailVideos.length} thumbnail video elements`);
        
        // 重置已使用缩略图集合
        usedThumbnails.clear();
        
        // 第一轮或第五轮时，将第一个视频标记为已使用
        if (round === 0 || round === 4) {
            if (thumbnails.length > 0) {
                usedThumbnails.add('thumbnail-0');
                console.log(`Round ${round + 1}: First video marked as used`);
            }
        }
        
        thumbnailVideos.forEach((video, index) => {
            // 确保所有视频默认是静音的
            video.muted = true;
            
            const thumbnailContainer = video.closest('.thumbnail');
            
            // 先移除所有之前添加的事件监听器
                if (thumbnailContainer) {
                const newContainer = thumbnailContainer.cloneNode(true);
                thumbnailContainer.parentNode.replaceChild(newContainer, thumbnailContainer);
                
                // 重新获取新的video元素
                const newVideo = newContainer.querySelector('.thumbnail-video');
                // 确保新视频也是静音的
                if (newVideo) {
                    newVideo.muted = true;
                }
                
                // 设置ID和draggable属性
                newContainer.id = `thumbnail-${index}`;
                newContainer.draggable = true;
                
                // 如果是第一个clip slot且在第一轮或第五轮，不允许拖拽
                if (index === 0 && (round === 0 || round === 4)) {
                    // 只有当游戏已经开始后才显示提示
                    if (gameStarted) {
                        createAlert(`In Round ${round + 1}, the first video is fixed and cannot be dragged`);
                    } else {
                        // 标记游戏已经开始
                        gameStarted = true;
                    }
                    return;
                }
                
                // 第二轮和第四轮且是最后一个视频时，禁用该缩略图
                if (index === 3 && (round === 1 || round === 3)) {
                    newContainer.classList.add('disabled');
                    console.log(`Round ${round + 1}: Disabled thumbnail ${index + 1}`);
                    
                    // 清除视频源
                    const source = newVideo.querySelector('source');
                    if (source) {
                        source.removeAttribute('src');
                        newVideo.load();
                    }
                    
                    // 添加mousedown事件阻止拖拽
                    newContainer.addEventListener('mousedown', (e) => {
                        e.preventDefault();
                        // 只有当游戏已经开始后才显示提示
                        if (gameStarted) {
                            createAlert(`In Round ${round + 1}, the fourth video slot is disabled and cannot be used`);
                        } else {
                            // 标记游戏已经开始
                            gameStarted = true;
                        }
                    });
                    
                    // 添加dragstart事件阻止拖拽
                    newContainer.addEventListener('dragstart', (e) => {
                        e.preventDefault();
                    });
                } else {
                    // 重新添加dragstart事件
                    newContainer.addEventListener('dragstart', (e) => {
                        if (usedThumbnails.has(newContainer.id)) {
                            e.preventDefault();
                            createAlert('This video has already been used, please select another one');
                return;
            }
            
                        // 拖拽开始时取消静音
                        if (newVideo) {
                            newVideo.muted = false;
                        }
                        
                        e.dataTransfer.setData('text/plain', newContainer.id);
                        newContainer.classList.add('dragging');
                    });
                    
                    // 重新添加dragend事件
                    newContainer.addEventListener('dragend', () => {
                        // 拖拽结束时恢复静音
                        if (newVideo) {
                            newVideo.muted = true;
                        }
                        
                        newContainer.classList.remove('dragging');
                    });
                }
                
                // 设置视频源
            if (index < videos.length) {
                    const source = newVideo.querySelector('source');
                if (source) {
                    source.src = videos[index];
                        newVideo.load();
                        
                        // 更新缩略图描述
                        const captionElement = newContainer.querySelector('.caption');
                        if (captionElement) {
                            const videoFileName = videos[index].split('/').pop();
                            const description = videoDescriptions[round][videoFileName];
                            if (description) {
                                captionElement.textContent = description;
                                console.log(`Updating video description for round ${round + 1}, video ${index + 1}: ${description}`);
                            }
                        }
                    }
                    newContainer.classList.remove('disabled');
            } else {
                    newContainer.classList.add('disabled');
                }
            }
        });
        
        // 处理 clip slots
        clipSlots.forEach((slot, index) => {
            // 清除所有 slot 的内容和状态
            if (!(round === 4 && index === 0)) { // 第五轮保留第一个slot的内容
                slot.innerHTML = '';
                slot.classList.remove('filled');
            }
            slot.classList.remove('disabled');
            
            // 第二轮和第四轮中，禁用第四个 slot
            if ((round === 1 || round === 3) && index === 3) {
                slot.classList.add('disabled');
                console.log(`Round ${round + 1}: Disabled thumbnail ${index + 1}`);
            }
            
            // 为第三个 slot 添加 rub 图标（在第二轮和第四轮中）
            if ((round === 1 || round === 3) && index === 2) {
                const rubIconBg = createRubIcon(slot);
                slot.appendChild(rubIconBg);
                console.log(`Round ${round + 1}: Added rub icon to 3rd clip slot`);
            }
            
            // 为最后一个 slot 添加 rub 图标（仅在第一轮中）
            if (round === 0 && index === clipSlots.length - 1) {
                const rubIconBg = createRubIcon(slot);
                slot.appendChild(rubIconBg);
                console.log(`Round ${round + 1}: Added rub icon to last clip slot`);
            }
        });
        
        // 如果是第五轮，确保第一个clip slot被正确填充
        if (round === 4) {
            setTimeout(() => {
                autoFillFirstClip();
                checkClipSequence(); // 检查视频序列
            }, 100);
        }
    }
    
    // 清空编辑区域
    function clearEditingArea() {
        // 清空所有clip-slot
        clipSlots.forEach(slot => {
            while (slot.firstChild) {
                slot.removeChild(slot.firstChild);
            }
            // 移除filled和fixed类
            slot.classList.remove('filled');
            slot.classList.remove('fixed');
        });
        
        // 清除标题显示
        clearClipTitle();
    }
    
    // 显示评论的函数
    const showComments = (round, type) => {
        console.log(`Displaying comments for round ${round + 1}, type: ${type}`); // 添加日志
        const commentsContent = document.querySelector('.comments-content');
        if (!commentsContent) {
            console.error('未找到评论容器元素 .comments-content');
            return;
        }

        // 清空现有评论
        commentsContent.innerHTML = '';

        // 获取对应回合和类型的评论
        let comments = commentsData[round] ? commentsData[round][type] : null;
        
        // 如果类型是 neutral 但没有找到对应评论，尝试使用 unprejudiced 类型的评论
        if (!comments && type === 'neutral' && commentsData[round] && commentsData[round]['unprejudiced']) {
            comments = commentsData[round]['unprejudiced'];
            console.log('Using unprejudiced type comments instead of neutral type in showComments');
        }
        
        // 如果没有找到评论，使用默认评论
        if (!comments || comments.length === 0) {
            console.log(`No comments found for round ${round + 1}, type: ${type}, using default comments`);
            comments = [
                { text: "Great content!", likes: 123 },
                { text: "Interesting perspective", likes: 87 },
                { text: "Thanks for sharing this", likes: 65 },
                { text: "I learned something new today", likes: 42 }
            ];
        }
        
        console.log(`Found ${comments.length} comments`); // 添加日志

        // 创建评论元素
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.style.padding = '10px';
            commentElement.style.borderBottom = '1px solid #eee';
            commentElement.style.marginBottom = '10px';

            const commentText = document.createElement('div');
            commentText.className = 'comment-text';
            commentText.textContent = comment.text;
            commentText.style.marginBottom = '5px';

            const likesCount = document.createElement('div');
            likesCount.className = 'likes-count';
            likesCount.textContent = `👍 ${comment.likes}`;
            likesCount.style.color = '#666';
            likesCount.style.fontSize = '0.9em';

            commentElement.appendChild(commentText);
            commentElement.appendChild(likesCount);
            commentsContent.appendChild(commentElement);
        });

        // 设置评论区样式
        commentsContent.style.maxHeight = '300px';
        commentsContent.style.overflowY = 'auto';
        commentsContent.style.padding = '10px';
    };
    
    // 初始化第一轮
    initializeRound();
    
    // 显示第一轮的 facts
    const factsText = document.querySelector('.facts-text');
    if (factsText) {
        factsText.textContent = roundFacts[0] || '';
    }
    
    // 确保评论区和弹幕功能正常工作
    const checkCommentsAndDanmaku = () => {
        // 检查是否正在显示结局，如果是则不生成弹幕
        const endingContainer = document.querySelector('div[style*="z-index: 10000"]');
        if (endingContainer) {
            console.log('Ending is currently displayed, skipping danmaku generation');
            return;
        }
        
        // 检查评论区容器
        const commentsContent = document.querySelector('.comments-content');
        if (!commentsContent) {
            console.error('Comments container element .comments-content not found');
        } else {
            console.log('Comments container found');
        }
        
        // 检查是否有弹幕容器
        const danmakuContainers = document.querySelectorAll('.danmaku-container');
        if (danmakuContainers.length === 0) {
            console.log('No danmaku containers currently, this is normal because no video has been uploaded yet');
        } else {
            console.log(`Found ${danmakuContainers.length} danmaku containers`);
        }
        
        // 检查评论数据是否完整
        for (let i = 0; i < 5; i++) {
            const types = ['positive', 'negative', 'neutral'];
            types.forEach(type => {
                const comments = commentsData[i] && commentsData[i][type];
                console.log(`Round ${i+1} ${type} comments: ${comments ? comments.length : 'none'}`);
            });
        }
    };
    
    // 在页面加载完成后执行检查
    setTimeout(checkCommentsAndDanmaku, 2000);
    
    console.log('拖拽功能初始化完成');

    const enableClipSlot = (slot) => {
        slot.classList.remove('disabled');
        slot.setAttribute('draggable', 'true');
        console.log('Restored clip slot to normal state');
    };
    
    const disableClipSlot = (slot) => {
        slot.classList.add('disabled');
        slot.setAttribute('draggable', 'false');
        console.log('Disabled clip slot');
    };
    
    // 监听结局页面被手动关闭的事件
    document.addEventListener('outcomeSkipped', () => {
        console.log('Outcome skipped, updating game progress...');
        
        // 获取最新一轮的视频序列和标题
        if (roundSequences.length > 0) {
            const latestRound = roundSequences[roundSequences.length - 1];
            const sequence = latestRound.sequence;
            const currentTitle = latestRound.title;
            
            // 更新回合计数
            currentRound++;
            
            // 更新总资金
            if (currentTitle) {
                totalFunds += fundsMapping[currentRound-1][sequence];
            }
            
            // 更新进度计数
            const progressCount = document.querySelector('.progress-count');
            if (progressCount) {
                progressCount.textContent = `${currentRound}/5`;
            }
            
            // 更新进度数字的激活状态
            const progressNumbers = document.querySelectorAll('.number');
            if (progressNumbers) {
                // 激活所有已完成轮次的数字
                for (let i = 0; i < currentRound; i++) {
                    if (i < progressNumbers.length) {
                        progressNumbers[i].classList.add('active');
                    }
                }
            }
            
            // 确保启用New Post按钮，允许进入下一轮
            if (newPostButton) {
                console.log('启用New Post按钮');
                newPostButton.style.pointerEvents = 'auto';
                newPostButton.style.opacity = '1';
                // 添加一个明确的类来标记按钮已启用
                newPostButton.classList.add('enabled');
            }
            
            // 更新moral图标
            const moralityMeter = document.querySelector('.morality-meter');
            if (moralityMeter) {
                // 清除现有内容
                const meterContent = moralityMeter.querySelector('.meter');
                if (meterContent) {
                    meterContent.innerHTML = '';
                    
                    // 创建图标容器
                    const iconContainer = document.createElement('div');
                    iconContainer.className = 'moral-icon';
                    
                    // 根据视频类型设置不同的图标
                    if (currentTitle.type === 'positive') {
                        // 使用上升图标
                        iconContainer.innerHTML = `<img src="up.svg" alt="Positive" width="100%" height="100%">`;
                    } else if (currentTitle.type === 'negative') {
                        // 使用下降图标
                        iconContainer.innerHTML = `<img src="down1.svg" alt="Negative" width="100%" height="100%">`;
                    } else {
                        // 使用平稳图标
                        iconContainer.innerHTML = `<img src="flat.svg" alt="Neutral" width="100%" height="100%">`;
                    }
                    
                    meterContent.appendChild(iconContainer);
                }
            }
            
            // 更新资金显示
            const fundsMeter = document.querySelector('.funds-meter');
            if (fundsMeter) {
                // 清除现有内容
                fundsMeter.innerHTML = '';
                
                // 创建资金显示
                const currentFundsSpan = document.createElement('span');
                currentFundsSpan.className = 'current-funds';
                currentFundsSpan.textContent = totalFunds + '/20000';
                
                fundsMeter.appendChild(currentFundsSpan);
            }
            
            // 更新主界面视频封面和标题
            updateMainScreenVideo();
            
            console.log('Game progress updated after skipping outcome, current round:', currentRound, 'total funds:', totalFunds);
            
            // 检查是否是第三回合结束
            if (currentRound === 3 && currentTitle.type === 'negative') {
                // 只在游戏主界面显示电话模态框
                if (document.getElementById('game-screen').style.display === 'block') {
                    setTimeout(() => {
                        showPhoneCallModal();
                    }, 1500);
                }
            }
        }
    });
}); 