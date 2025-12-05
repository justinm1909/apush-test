// QUESTIONS SET 3 (51–75)
const questions3 = [
    {
        q: "Why did Henry Clay oppose the annexation of Texas during his presidential campaign?",
        answers: [
            "He feared it would inflame sectional tensions",
            "He predicted the land was agriculturally useless",
            "He believed Texas lacked a functional government",
            "He sought a military alliance with Mexico"
        ],
        correct: 0,
        explanation: "Clay feared annexation would inflame sectional conflict over slavery."
    },
    {
        q: "Which factor most contributed to the sharp increase in cotton production after 1800?",
        answers: [
            "Adoption of the cotton gin",
            "Large scale Irish immigration",
            "Federal subsidies for textile mills",
            "Decline of rice cultivation"
        ],
        correct: 0,
        explanation: "The cotton gin made cotton easier to process, boosting production."
    },
    {
        q: "Why did the Panic of 1819 have such widespread social and political effects?",
        answers: [
            "It was the first major financial depression in U.S. history",
            "It resulted in widespread crop failures",
            "It led to an embargo on foreign goods",
            "It forced abolition of the National Bank"
        ],
        correct: 0,
        explanation: "It was the first major depression and caused widespread economic hardship."
    },
    {
        q: "Which factor most encouraged the growth of western cities during the Market Revolution?",
        answers: [
            "New canals and river systems connecting farmers to distant markets",
            "Mandatory settlement programs from Congress",
            "Expansion of gold mining",
            "Creation of federal industrial zones"
        ],
        correct: 0,
        explanation: "New transportation routes helped western towns grow into commercial centers."
    },
    {
        q: "Why did the invention of the mechanical reaper transform agriculture in the Midwest?",
        answers: [
            "It enabled farmers to cultivate and harvest far larger acreages",
            "It minimized the need for migrant labor",
            "It replaced the cotton gin in agricultural importance",
            "It provided a new crop resistant to drought"
        ],
        correct: 0,
        explanation: "The reaper allowed Midwestern farmers to farm much larger areas efficiently."
    },
    {
        q: "Which belief united most supporters of the Whig Party?",
        answers: [
            "The federal government should actively promote economic development",
            "All new western states should enter as free states",
            "Indian Removal was unconstitutional",
            "The National Bank should be abolished"
        ],
        correct: 0,
        explanation: "Whigs believed the government should support economic modernization."
    },
    {
        q: "What made the Nullification Crisis a major constitutional test?",
        answers: [
            "It challenged federal supremacy by asserting that states could invalidate federal laws",
            "It required the Supreme Court to rewrite key parts of the Constitution",
            "It suspended tariff collection throughout the South",
            "It allowed states to independently negotiate trade agreements"
        ],
        correct: 0,
        explanation: "South Carolina asserted it could nullify federal law, challenging federal supremacy."
    },
    {
        q: "Which event most exposed limitations in Jackson's power as president?",
        answers: [
            "His inability to enforce Worcester v. Georgia",
            "His failure to secure Texas annexation",
            "His veto of the Maysville Road bill",
            "His destruction of the National Bank"
        ],
        correct: 0,
        explanation: "Jackson could not force Georgia to obey the Worcester ruling."
    },
    {
        q: "Which reform movement most directly addressed worsening urban conditions brought on by industrialization?",
        answers: [
            "Temperance",
            "Education reform",
            "Public health reform",
            "Transcendentalism"
        ],
        correct: 2,
        explanation: "Industrial growth led to urban overcrowding and poor sanitation that reformers addressed."
    },
    {
        q: "Which belief defined transcendentalist views on social reform?",
        answers: [
            "Individuals must improve themselves before improving society",
            "Government regulations were essential for justice",
            "Scientific progress was the key to moral progress",
            "Religious doctrine should guide political decision making"
        ],
        correct: 0,
        explanation: "Reformers believed personal transformation would lead to social improvement."
    },
    {
        q: "What sparked the growth of the abolitionist movement during the 1830s?",
        answers: [
            "Increased publication of antislavery newspapers and autobiographies",
            "Discovery of new cotton regions",
            "Collapse of the colonization movement",
            "Supreme Court rulings on fugitive slave laws"
        ],
        correct: 0,
        explanation: "Abolition gained momentum through widely read newspapers and slave narratives."
    },
    {
        q: "Why did the Temperance Movement gain broad support among middle class Americans?",
        answers: [
            "Alcohol abuse was linked to poverty, crime, and domestic instability",
            "Churches threatened excommunication",
            "It promised immediate political reform",
            "It offered financial compensation to supporters"
        ],
        correct: 0,
        explanation: "Many linked alcohol abuse to crime, poverty, and family breakdown."
    },
    {
        q: "Which group did nativist movements of the mid nineteenth century target most aggressively?",
        answers: [
            "Irish Catholics",
            "German farmers",
            "British merchants",
            "Canadian migrants"
        ],
        correct: 0,
        explanation: "Irish Catholics were targets due to prejudice and economic competition."
    },
    {
        q: "What factor allowed the United States to assert the Monroe Doctrine with limited military capability?",
        answers: [
            "Britain shared interest in limiting European intervention in the Americas",
            "Spain had already withdrawn from all colonial holdings",
            "France signed a neutrality agreement",
            "Russia refused to expand its Pacific settlements"
        ],
        correct: 0,
        explanation: "Britain supported limiting European influence, helping enforce the doctrine."
    },
    {
        q: "What primary issue divided northern and southern political leaders during Monroe's presidency?",
        answers: [
            "Expansion of slavery into western territories",
            "High tariffs on foreign goods",
            "The need for a new national capital",
            "Relations with Native nations"
        ],
        correct: 0,
        explanation: "Debates centered on whether slavery should expand westward."
    },
    {
        q: "Why did the United States pursue the Adams Onis Treaty with Spain?",
        answers: [
            "To acquire Florida and secure boundaries in the Southwest",
            "To gain Texas as a new slaveholding state",
            "To secure British withdrawal from the Great Lakes",
            "To prevent Mexican independence"
        ],
        correct: 0,
        explanation: "The treaty secured Florida and established a firm southwestern boundary."
    },
    {
        q: "What factor most shaped the rapid settlement of the Old Northwest?",
        answers: [
            "Construction of new road and canal systems",
            "Collapse of eastern farmland prices",
            "Federal subsidies for cotton plantations",
            "Arrival of southern planters seeking slavery expansion"
        ],
        correct: 0,
        explanation: "Better roads and canals sped migration and settlement in the Northwest."
    },
    {
        q: "Which invention most revolutionized long distance trade along American rivers?",
        answers: [
            "Steamboat",
            "Horse drawn barge",
            "Early locomotive",
            "Steel hulled ship"
        ],
        correct: 0,
        explanation: "Steamboats allowed faster, two way travel on rivers, transforming commerce."
    },
    {
        q: "Which belief distinguished early factory reformers from mainstream political leaders?",
        answers: [
            "Factory work required government oversight to protect laborers",
            "Industrial growth should be slowed",
            "Women should be excluded from all wage labor",
            "Child labor was necessary for national prosperity"
        ],
        correct: 0,
        explanation: "Factory reformers argued that government protections were needed to safeguard workers."
    },
    {
        q: "Which change best reflects how politics expanded during the Age of Jackson?",
        answers: [
            "Rise in mass participation through rallies, newspapers, and party organizations",
            "Elimination of property requirements for all elections",
            "Abolition of the Electoral College",
            "Requirement that presidents be selected by popular vote"
        ],
        correct: 0,
        explanation: "Campaigns, rallies, newspapers, and parties drew more people into politics."
    },
    {
        q: "Why did Jackson veto the recharter of the National Bank?",
        answers: [
            "He believed it served elite financial interests at the expense of ordinary citizens",
            "He feared it would undermine cotton exports",
            "He argued it violated the Missouri Compromise",
            "He opposed all forms of federal taxation"
        ],
        correct: 0,
        explanation: "Jackson argued the Bank favored elites at the expense of ordinary citizens."
    },
    {
        q: "Which event demonstrated the limitations of Native resistance to U.S. expansion?",
        answers: [
            "Defeat of Tecumseh's confederacy at the Battle of Tippecanoe",
            "Collapse of Cherokee leadership during the Creek Wars",
            "Failure of the Seminole migration north",
            "Removal of the Mohawk into British Canada"
        ],
        correct: 0,
        explanation: "Tecumseh's defeat eliminated hopes of a unified Native resistance movement."
    },
    {
        q: "Which factor most encouraged sectional economic differences in the early nineteenth century?",
        answers: [
            "Distinct regional specializations supported by new transportation networks",
            "Decline of European trade influence",
            "Uniform federal regulations on labor",
            "Equal distribution of immigrant populations"
        ],
        correct: 0,
        explanation: "Transportation allowed each region to specialize economically, deepening divisions."
    },
    {
        q: "Why did the United States hesitate to annex Texas immediately after its independence?",
        answers: [
            "Debates over expanding slavery into the new territory",
            "Uncertainty over Mexico's northern borders",
            "Lack of interest in western settlement",
            "Fear of conflict with Britain"
        ],
        correct: 0,
        explanation: "Texas raised immediate questions about slave and free state balance."
    },
    {
        q: "What issue most divided America during the debate over the Mexican Cession?",
        answers: [
            "Whether slavery should expand into the newly acquired lands",
            "Whether the National Bank should finance territorial governments",
            "Whether California should remain under military rule",
            "Whether to preserve Spanish as an official language"
        ],
        correct: 0,
        explanation: "Slavery in the new Mexican territories created fierce national disputes."
    }
];
