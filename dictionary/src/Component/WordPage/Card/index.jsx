import React from "react";
import styles from "./style.module.css";

import Grid from "@mui/material/Grid";

const Card = ({ handleClose, open }) => {
  const json1 = [
    {
      word: "hello",
      phonetics: [
        {
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=75797336",
          license: {
            name: "BY-SA 4.0",
            url: "https://creativecommons.org/licenses/by-sa/4.0",
          },
        },
        {
          text: "/həˈləʊ/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9021983",
          license: {
            name: "BY 3.0 US",
            url: "https://creativecommons.org/licenses/by/3.0/us",
          },
        },
        {
          text: "/həˈloʊ/",
          audio: "",
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: '"Hello!" or an equivalent greeting.',
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: ["greeting"],
          antonyms: [],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition: 'To greet with "hello".',
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
        {
          partOfSpeech: "interjection",
          definitions: [
            {
              definition:
                "A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.",
              synonyms: [],
              antonyms: [],
              example: "Hello, everyone.",
            },
            {
              definition: "A greeting used when answering the telephone.",
              synonyms: [],
              antonyms: [],
              example: "Hello? How may I help you?",
            },
            {
              definition:
                "A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.",
              synonyms: [],
              antonyms: [],
              example: "Hello? Is anyone there?",
            },
            {
              definition:
                "Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.",
              synonyms: [],
              antonyms: [],
              example:
                "You just tried to start your car with your cell phone. Hello?",
            },
            {
              definition: "An expression of puzzlement or discovery.",
              synonyms: [],
              antonyms: [],
              example: "Hello! What’s going on here?",
            },
          ],
          synonyms: [],
          antonyms: ["bye", "goodbye"],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/hello"],
    },
    {
      word: "nice",
      phonetic: "/naɪs/",
      phonetics: [
        {
          text: "/naɪs/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/nice-us.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1221274",
          license: {
            name: "BY-SA 3.0",
            url: "https://creativecommons.org/licenses/by-sa/3.0",
          },
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "Niceness.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
        {
          partOfSpeech: "adjective",
          definitions: [
            {
              definition: "Pleasant, satisfactory.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "Of a person: friendly, attractive.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "Respectable; virtuous.",
              synonyms: [],
              antonyms: [],
              example:
                "What is a nice person like you doing in a place like this?",
            },
            {
              definition:
                "(with and) Shows that the given adjective is desirable, or acts as a mild intensifier; pleasantly, quite.",
              synonyms: [],
              antonyms: [],
              example: "The soup is nice and hot.",
            },
            {
              definition: "Silly, ignorant; foolish.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "Particular in one's conduct; scrupulous, painstaking; choosy.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "Particular as regards rules or qualities; strict.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "Showing or requiring great precision or sensitive discernment; subtle.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "Easily injured; delicate; dainty.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "Doubtful, as to the outcome; risky.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [
            "charming",
            "delightful",
            "friendly",
            "kind",
            "lovely",
            "pleasant",
            "sweet",
            "charming",
            "delightful",
            "lovely",
            "pleasant",
            "appetising",
            "appetizing",
            "delicious",
            "moreish",
            "scrummy",
            "scrumptious",
            "tasty",
            "fine",
            "subtle",
          ],
          antonyms: [
            "horrible",
            "horrid",
            "nasty",
            "horrible",
            "horrid",
            "nasty",
            "awful",
            "disgusting",
            "distasteful",
            "foul",
            "gross",
            "horrible",
            "horrid",
            "nasty",
            "nauseating",
            "putrid",
            "rancid",
            "rank",
            "sickening",
            "unsatisfactory",
            "naughty",
          ],
        },
        {
          partOfSpeech: "adverb",
          definitions: [
            {
              definition: "Nicely.",
              synonyms: [],
              antonyms: [],
              example: "Children, play nice.",
            },
          ],
          synonyms: [],
          antonyms: [],
        },
        {
          partOfSpeech: "interjection",
          definitions: [
            {
              definition: "Used to signify a job well done.",
              synonyms: [],
              antonyms: [],
              example: "Nice! I couldn't have done better.",
            },
            {
              definition: "Used to signify approval.",
              synonyms: [],
              antonyms: [],
              example: "Is that your new car? Nice!",
            },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/nice"],
    },
    {
      word: "nice",
      phonetic: "/naɪs/",
      phonetics: [
        {
          text: "/naɪs/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/nice-us.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1221274",
          license: {
            name: "BY-SA 3.0",
            url: "https://creativecommons.org/licenses/by-sa/3.0",
          },
        },
      ],
      meanings: [
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition:
                "To run a process with a specified (usually lower) priority.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/nice"],
    },
    {
      word: "people",
      phonetic: "/ˈpiːpəl/",
      phonetics: [
        {
          text: "/ˈpiːpəl/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/people-uk.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9023300",
          license: {
            name: "BY 3.0 US",
            url: "https://creativecommons.org/licenses/by/3.0/us",
          },
        },
        {
          text: "/ˈpipl̩/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/people-us.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=711602",
          license: {
            name: "BY-SA 3.0",
            url: "https://creativecommons.org/licenses/by-sa/3.0",
          },
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition:
                "Used as plural of person; a body of human beings considered generally or collectively; a group of two or more persons.",
              synonyms: ["lede", "leod", "peeps"],
              antonyms: [],
              example:
                "There were so many people at the restaurant last night.",
            },
            {
              definition:
                "Persons forming or belonging to a particular group, such as a nation, class, ethnic group, country, family, etc.",
              synonyms: ["collective", "community", "congregation", "folk"],
              antonyms: [],
            },
            {
              definition:
                "A group of persons regarded as being employees, followers, companions or subjects of a ruler.",
              synonyms: ["fans", "groupies", "supporters"],
              antonyms: [],
            },
            {
              definition: "One's colleagues or employees.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "A person's ancestors, relatives or family.",
              synonyms: ["folks", "kin", "kith"],
              antonyms: [],
              example:
                "My people lived through the Black Plague and the Thirty Years War.",
            },
            {
              definition:
                "The mass of a community as distinguished from a special class (elite); the commonalty; the populace; the vulgar; the common crowd; the citizens.",
              synonyms: ["citizenry", "commoners", "populace"],
              antonyms: [],
            },
          ],
          synonyms: [
            "citizenry",
            "commoners",
            "populace",
            "collective",
            "community",
            "congregation",
            "folk",
            "fans",
            "groupies",
            "supporters",
            "folks",
            "kin",
            "kith",
            "lede",
            "leod",
            "peeps",
          ],
          antonyms: [],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition:
                "To stock with people or inhabitants; to fill as with people; to populate.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To become populous or populated.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To inhabit; to occupy; to populate.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To interact with people; to socialize.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "An individual; usually a human being.",
              synonyms: [],
              antonyms: [],
              example: "Each person is unique, both mentally and physically.",
            },
            {
              definition:
                "The physical body of a being seen as distinct from the mind, character, etc.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "Any individual or formal organization with standing before the courts.",
              synonyms: [],
              antonyms: [],
              example:
                "At common law a corporation or a trust is legally a person.",
            },
            {
              definition: "The human genitalia; specifically, the penis.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "(grammar) A linguistic category used to distinguish between the speaker of an utterance and those to whom or about whom he or she is speaking. See grammatical person.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A shoot or bud of a plant; a polyp or zooid of the compound Hydrozoa, Anthozoa, etc.; also, an individual, in the narrowest sense, among the higher animals.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: [
        "https://en.wiktionary.org/wiki/people",
        "https://en.wiktionary.org/wiki/person",
      ],
    },
    {
      word: "star",
      phonetic: "/stɑː(ɹ)/",
      phonetics: [
        {
          text: "/stɑː(ɹ)/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/star-uk.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9027489",
          license: {
            name: "BY 3.0 US",
            url: "https://creativecommons.org/licenses/by/3.0/us",
          },
        },
        {
          text: "/stɑɹ/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/star-us.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1158030",
          license: {
            name: "BY-SA 3.0",
            url: "https://creativecommons.org/licenses/by-sa/3.0",
          },
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition:
                "Any small luminous dot appearing in the cloudless portion of the night sky, especially with a fixed location relative to other such dots.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A luminous celestial body, made up of plasma (particularly hydrogen and helium) and having a spherical shape. Depending on context the sun may or may not be included.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A concave polygon with regular, pointy protrusions and indentations, generally with five or six points.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "An actor in a leading role.",
              synonyms: [],
              antonyms: [],
              example: "Many Hollywood stars attended the launch party.",
            },
            {
              definition:
                "An exceptionally talented or famous person, often in a specific field; a celebrity.",
              synonyms: [],
              antonyms: [],
              example: "His teacher tells us he is a star pupil.",
            },
            {
              definition: "An asterisk (*).",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A symbol used to rate hotels, films, etc. with a higher number of stars denoting better quality.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A simple dance, or part of a dance, where a group of four dancers each put their right or left hand in the middle and turn around in a circle. You call them right-hand stars or left-hand stars, depending on the hand which is in the middle.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "A planet supposed to influence one's destiny.",
              synonyms: [],
              antonyms: [],
              example:
                "What's in the stars for you today? Find out in our horoscope.",
            },
            {
              definition:
                "A star-shaped ornament worn on the breast to indicate rank or honour.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A composition of combustible matter used in the heading of rockets, in mines, etc., which, exploding in the air, presents a starlike appearance.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: ["*"],
          antonyms: [],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition:
                "To appear as a featured performer or headliner, especially in an entertainment program.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "To feature (a performer or a headliner), especially in a movie or an entertainment program.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To mark with a star or asterisk.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "To set or adorn with stars, or bright, radiating bodies; to bespangle.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To shine like a star.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/star"],
    },
    {
      word: "laptop",
      phonetic: "/ˈlæp.tɒp/",
      phonetics: [
        {
          text: "/ˈlæp.tɒp/",
          audio: "",
        },
        {
          text: "/ˈlæp.tɑp/",
          audio: "",
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "A laptop computer.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: ["laptop computer", "notebook computer"],
          antonyms: [],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/laptop"],
    },
    {
      word: "story",
      phonetic: "/ˈstɔː.ɹi/",
      phonetics: [
        {
          text: "/ˈstɔː.ɹi/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/story-uk.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=816402",
        },
        {
          text: "/ˈstɔː.ɹi/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/story-us.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=816404",
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition:
                "A sequence of real or fictional events; or, an account of such a sequence.",
              synonyms: [],
              antonyms: [],
              example: "The book tells the story of two roommates.",
            },
            {
              definition: "A lie, fiction.",
              synonyms: [],
              antonyms: [],
              example: "You’ve been telling stories again, haven’t you?",
            },
            {
              definition: "(usually pluralized) A soap opera.",
              synonyms: [],
              antonyms: [],
              example:
                "What will she do without being able to watch her stories?",
            },
            {
              definition: "History.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A sequence of events, or a situation, such as might be related in an account.",
              synonyms: [],
              antonyms: [],
              example:
                "I tried it again; same story, no error message, nothing happened.",
            },
            {
              definition:
                "A chronological collection of pictures or short videos published by a user on an application or website that is typically only available for a short period.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: ["tome", "lie", "narrative", "serial", "soap opera"],
          antonyms: [],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition: "To tell as a story; to relate or narrate about.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/story"],
    },
    {
      word: "basic",
      phonetic: "/ˈbeɪsɪk/",
      phonetics: [
        {
          text: "/ˈbeɪsɪk/",
          audio:
            "https://api.dictionaryapi.dev/media/pronunciations/en/basic-au.mp3",
          sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=79241195",
          license: {
            name: "BY-SA 4.0",
            url: "https://creativecommons.org/licenses/by-sa/4.0",
          },
        },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "A necessary commodity, a staple requirement.",
              synonyms: [],
              antonyms: [],
              example: "Rice is a basic for many Asian villagers.",
            },
            {
              definition:
                "An elementary building block, e.g. a fundamental piece of knowledge.",
              synonyms: [],
              antonyms: [],
              example: "Arithmetic is a basic for the study of mathematics.",
            },
            {
              definition: "Basic training.",
              synonyms: [],
              antonyms: [],
              example: "The drill sergeants gave him hell in basic.",
            },
          ],
          synonyms: [],
          antonyms: [],
        },
        {
          partOfSpeech: "adjective",
          definitions: [
            {
              definition: "Necessary, essential for life or some process.",
              synonyms: [],
              antonyms: [],
              example: "Flour is a basic ingredient of bread.",
            },
            {
              definition: "Elementary, simple, fundamental, merely functional.",
              synonyms: [],
              antonyms: [],
              example: "The Hotel Sparta’s accommodation is very basic.",
            },
            {
              definition:
                "Of or pertaining to a base; having a pH greater than 7.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "Unremarkable or uninteresting; boring; uncool.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: ["alkaline"],
          antonyms: ["acidic"],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/basic"],
    },
  ];
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={styles.card}
    >
      <Grid item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvepBJUTrIAgqexE7J9Z7ZofuHY75H6NumhpoumoIJ3vkABnPT-vuZr79-XJPgN-Z77E&usqp=CAU"
          alt=""
          // className={open ? styles.cardImageFull : styles.cardImage}
        />
        <br />
        <button onClick={handleClose}>Click To open Dialog</button>
      </Grid>
    </Grid>
  );
};

export default Card;
