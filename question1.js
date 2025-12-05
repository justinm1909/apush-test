// QUESTIONS SET 1 (1–25)
const questions1 = [
    {
        q: "Which constitutional debate resurfaced most sharply during the controversy over the Louisiana Purchase?",
        answers: [
            "The extent of implied presidential powers",
            "The authority of states to nullify federal treaties",
            "The legality of expanding slavery into new territories",
            "The role of Congress in regulating interstate trade"
        ],
        correct: 0,
        explanation: "Jefferson worried the Constitution did not explicitly permit purchasing foreign territory."
    },
    {
        q: "How did the Embargo Act of 1807 most significantly alter patterns of American economic development?",
        answers: [
            "It triggered rapid industrial growth in the northern states",
            "It increased southern dependence on British cotton markets",
            "It permanently redirected U.S. trade toward Asia",
            "It forced Western farmers to diversify crop production"
        ],
        correct: 0,
        explanation: "Cutting off Atlantic trade pushed northern manufacturers to expand domestic production."
    },
    {
        q: "Which strategic outcome did the War Hawks most hope to achieve through conflict with Britain in 1812?",
        answers: [
            "Territorial expansion into Canada",
            "Permanent neutrality agreements with Europe",
            "Restoration of the National Bank",
            "Access to Spanish trade ports"
        ],
        correct: 0,
        explanation: "War Hawks wanted war partly to seize Canada."
    },
    {
        q: "Which long term consequence of the War of 1812 most influenced American nationalism?",
        answers: [
            "Strengthening of frontier militias",
            "Collapse of the Federalist Party",
            "Expansion of voting rights to all taxpayers",
            "Establishment of a national draft system"
        ],
        correct: 1,
        explanation: "The Federalist Party collapsed after being seen as unpatriotic, strengthening national unity."
    },
    {
        q: "Why did the Missouri Crisis intensify sectional divisions more than previous disputes?",
        answers: [
            "It threatened to upset the balance of power in the Senate",
            "It challenged the constitutionality of the Monroe Doctrine",
            "It dismantled long held southern plantation privileges",
            "It introduced foreign intervention into domestic policy"
        ],
        correct: 0,
        explanation: "Missouri threatened the sectional balance in the Senate, raising slavery tensions."
    },
    {
        q: "Which principle of the Monroe Doctrine had the greatest immediate impact on global diplomacy?",
        answers: [
            "The rejection of future European colonization",
            "The creation of joint military patrols with Britain",
            "The demand that Latin American nations adopt republican governments",
            "The guarantee of U.S. military protection for Africa"
        ],
        correct: 0,
        explanation: "The doctrine immediately warned Europe against new colonization in the Americas."
    },
    {
        q: "What factor most directly enabled the Market Revolution to reshape regional specialization?",
        answers: [
            "Expansion of transportation networks",
            "Growth of foreign investment in railroads",
            "New federal restrictions on land purchases",
            "Decline of southern cotton production"
        ],
        correct: 0,
        explanation: "New canals, roads, and railroads allowed regions to specialize in different economic activities."
    },
    {
        q: "Why did the Lowell System represent a new stage in American industrial capitalism?",
        answers: [
            "It integrated labor, housing, and moral regulation within the factory model",
            "It guaranteed wages indexed to inflation",
            "It operated entirely without child labor",
            "It allowed women managerial roles in textile corporations"
        ],
        correct: 0,
        explanation: "Lowell combined factory work, dormitories, and strict oversight in a single industrial model."
    },
    {
        q: "Which development most accelerated the forced removal of Native nations during the Jackson administration?",
        answers: [
            "Georgia's assertion of state authority over Cherokee land",
            "Britain's withdrawal from western trading posts",
            "Louisiana's petition for statehood",
            "Mexico's invasion of northern tribes"
        ],
        correct: 0,
        explanation: "Georgia's claims over Cherokee land enabled federal removal policy to accelerate."
    },
    {
        q: "In Worcester v. Georgia, the Supreme Court's ruling most directly affirmed which constitutional principle?",
        answers: [
            "Federal authority over state interference in tribal sovereignty",
            "State authority over internal commercial regulations",
            "Presidential authority to negotiate removal treaties",
            "Congressional power to restrict Native migration"
        ],
        correct: 0,
        explanation: "The ruling affirmed federal authority over states in matters of tribal sovereignty."
    },
    {
        q: "Which economic effect followed Jackson's destruction of the Second National Bank?",
        answers: [
            "Expansion of unstable credit through state banks",
            "Rapid appreciation of western land prices",
            "Decline in foreign purchases of U.S. exports",
            "Consolidation of banking authority under Congress"
        ],
        correct: 0,
        explanation: "Without the Bank, state banks issued risky loans and unstable currency."
    },
    {
        q: "Which factor best explains the rising influence of the Whig Party during the 1830s?",
        answers: [
            "Widespread opposition to perceived executive overreach",
            "Northern support for universal male suffrage",
            "Southern demands for stronger slave codes",
            "Western dissatisfaction with internal improvements"
        ],
        correct: 0,
        explanation: "The Whigs formed in response to Jackson's strong use of executive power."
    },
    {
        q: "Which reform movement most directly grew out of the religious message of the Second Great Awakening?",
        answers: [
            "Temperance activism",
            "Prison abolition",
            "Western land reform",
            "Expansion of tariffs"
        ],
        correct: 0,
        explanation: "The revival stressed personal morality, inspiring temperance campaigns."
    },
    {
        q: "How did transcendentalist philosophy most challenge traditional American social values?",
        answers: [
            "It emphasized intuition and individual conscience over institutional authority",
            "It rejected all forms of organized religion",
            "It mandated communal property ownership",
            "It advocated strict adherence to scientific rationalism"
        ],
        correct: 0,
        explanation: "Transcendentalists trusted individual conscience more than organized institutions."
    },
    {
        q: "What feature made the Seneca Falls Declaration of Sentiments particularly radical for its time?",
        answers: [
            "Its demand for female suffrage",
            "Its rejection of legal marriage",
            "Its call for abolition of private property",
            "Its proposal for equal military service"
        ],
        correct: 0,
        explanation: "Calling for women's voting rights was far more radical than most reform demands of the time."
    },
    {
        q: "What was the primary political weakness of the Free Soil Party?",
        answers: [
            "Its focus on limiting slavery's expansion rather than abolishing it",
            "Its refusal to run national candidates",
            "Its reliance on southern plantation votes",
            "Its opposition to protective tariffs"
        ],
        correct: 0,
        explanation: "The party opposed expanding slavery but did not call for ending it nationwide."
    },
    {
        q: "Which factor most encouraged mass Irish immigration to the United States in the 1840s?",
        answers: [
            "Catastrophic famine resulting from British colonial policies",
            "Newly established American religious freedoms",
            "Incentives from U.S. railroad companies",
            "Rising industrial wages in eastern cities"
        ],
        correct: 0,
        explanation: "The Irish fled massive famine caused by crop failure and British policy."
    },
    {
        q: "Why did many Americans fear increasing numbers of German immigrants in the mid nineteenth century?",
        answers: [
            "They believed Germans supported radical political ideologies",
            "Germans dominated the textile trade",
            "Germans opposed public education",
            "Germans arrived with significant military training"
        ],
        correct: 0,
        explanation: "Nativists feared Germans brought new radical political ideas after the revolutions in Europe."
    },
    {
        q: "Which territorial dispute most directly contributed to the outbreak of the Mexican American War?",
        answers: [
            "Conflicted claims regarding the Rio Grande border",
            "Competition with Britain for California",
            "Spanish campaign to reclaim Texas",
            "Native alliances in New Mexico"
        ],
        correct: 0,
        explanation: "The war began after Mexican and American troops clashed over the Rio Grande boundary."
    },
    {
        q: "What feature made Polk's presidency one of the most expansionist in U.S. history?",
        answers: [
            "Fulfillment of specific territorial objectives including Oregon and California",
            "Immediate annexation of Canada",
            "Permanent military alliance with Mexico",
            "Advocacy for nationwide slavery expansion"
        ],
        correct: 0,
        explanation: "Polk fulfilled multiple territorial goals including Oregon, Texas, and California."
    },
    {
        q: "Why did Jefferson initially hesitate to approve the Louisiana Purchase?",
        answers: [
            "He questioned whether the Constitution allowed acquisition of foreign territory",
            "He feared Spain would declare war",
            "He believed the land was agriculturally useless",
            "He expected Britain to seize the territory first"
        ],
        correct: 0,
        explanation: "Jefferson feared purchasing land violated a strict reading of the Constitution."
    },
    {
        q: "What was the most significant economic consequence of the Erie Canal?",
        answers: [
            "New York City became the dominant commercial port in the United States",
            "Southern planters gained direct access to Atlantic trade",
            "Western farms shifted to tobacco production",
            "Federal land prices collapsed"
        ],
        correct: 0,
        explanation: "The Erie Canal linked western farms to Atlantic markets and made New York the top port."
    },
    {
        q: "Which development most weakened the Federalist Party after the War of 1812?",
        answers: [
            "The Hartford Convention's perceived disloyalty",
            "The popularity of the National Bank",
            "Expansion of cotton agriculture",
            "Increased German and Irish immigration"
        ],
        correct: 0,
        explanation: "The Hartford Convention made Federalists appear disloyal during wartime."
    },
    {
        q: "Why was the Battle of New Orleans significant despite occurring after the Treaty of Ghent?",
        answers: [
            "It boosted national pride and elevated Andrew Jackson's reputation",
            "It forced Britain to renegotiate the peace terms",
            "It secured American control of Florida",
            "It ended Native alliances against the United States"
        ],
        correct: 0,
        explanation: "The victory created enormous national pride and boosted Jackson's status."
    },
    {
        q: "Which diplomatic agreement reduced naval armaments on the Great Lakes after the War of 1812?",
        answers: [
            "Rush Bagot Agreement",
            "Webster Ashburton Treaty",
            "Adams Onis Treaty",
            "Jay's Treaty"
        ],
        correct: 0,
        explanation: "This agreement reduced naval weapons on the Great Lakes."
    }
];
