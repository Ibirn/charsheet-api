INSERT INTO characters
  (
  name, level, race, avatar, strength, dexterity, constitution, wisdom, intelligence, charisma
  )
VALUES
  (
    'Smashclaw', 7, 'lizardfolk', 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/233/346/315/636252766314905259.jpeg', 19, 14, 17, 12, 10, 8
);

INSERT INTO inventory
  (character_id, primary_weapon, secondary_weapon, armor, attunement_1, attunement_2, attunement_3, bag, gold)
VALUES
  (
    1, 'greataxe', 'longsword', null, 'bracers of ogre strength', 'ring of invisibility', 'boots of speed', 'potions of healing, shield', 15
);

INSERT INTO other
  (character_id, background, diety, description)
VALUES
  (
    1, 'far traveller', 'Shhsrrakl', 'big beefy lizardfolk'
);

INSERT INTO skills
  (character_id, athletics, acrobatics, sleight_of_hand, stealth, arcana, history, investigation, nature, religion, animal_handling, insight, medicine, perception, survival, deception, intimidation, performance, persuasion)
VALUES
  (1, true, true, false, false, false, false, true, true, false, false, false, true, true, false, false, true, false, false);