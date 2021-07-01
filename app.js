const body = document.querySelector('body');

const closeIcon = document.querySelector('#close-icon');

const hamburger = document.querySelector('#hamburger');

const speakerList = document.querySelector('#speakers-list');

hamburger.addEventListener('click', () => {
  body.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  body.classList.remove('active');
});

const createSpeaker = (speaker) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'speakers-list-item');
    const img = document.createElement('img');
    img.setAttribute('src', speaker.photoUrl);
    img.setAttribute('class', 'image');
    img.setAttribute('alt', 'image');
    const div = document.createElement('div');
    div.setAttribute('class', 'speakers-list-item__info');
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'speakers-list-item__heading');
    h2.textContent = speaker.speakerName;
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'speakers-list-item__role');
    h3.textContent = speaker.role;
    const p = document.createElement('p');
    p.setAttribute('class', 'speakers-list-item__text');
    p.textContent = speaker.description;
    li.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    li.appendChild(div);
    return li;
};

if (speakerList) {
    const speakers = [
      {
        speakerName: 'Andra Maria Maute',
        role: 'Head IT Strategy, AXA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
        photoUrl: 'images/Andra-Maria_Maute_AXA.png',
      },
      {
        speakerName: 'Chris Brown',
        role: 'Global Business Development, Bitstamp',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
        photoUrl: 'images/Chris_Aruliah_Bitstamp_NEW.png',
      },
      {
        speakerName: 'Harish Naik',
        role: 'Head of Innovation Labs, Ally',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
        photoUrl: 'images/Harish_Naik_Ally_NEW.png',
      },
      {
        speakerName: 'Jan oliver',
        role: 'Head of Operations, Germany, Coinbase',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
        photoUrl: 'images/Jan-Oliver_Sell_Coinbase_NEW.png',
      },
      {
        speakerName: 'Patrick Donnell',
        role: 'Vice President, Mastercard',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
        photoUrl: 'images/Patrick_ODonnell_Mastercard_NEW.png',
      },
      {
        speakerName: 'Radoslav Albrecht',
        role: 'Founder & CEO, Bitbond',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde, consectetur,',
        photoUrl: 'images/Radoslav_Albrecht_Bitbond.png',
      },
    ];
    for (let i = 0; i < speakers.length; i += 1) {
      const speakerItem = createSpeaker(speakers[i]);
      speakerList.appendChild(speakerItem);
    }
}
